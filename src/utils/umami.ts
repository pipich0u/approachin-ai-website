/**
 * Umami 高性能埋点工具类
 * 特性：
 * 1. 队列 + 定时批量上报（普通埋点）
 * 2. 页面关闭时使用 sendBeacon
 * 3. 关键事件立即上报
 * 4. 高频事件节流/合并
 */

// 扩展 Window 类型
declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, any>) => void;
    };
  }
}

// ==================== 类型定义 ====================

interface TrackEvent {
  eventName: string;
  eventData?: Record<string, any>;
  timestamp: number;
  priority: 'immediate' | 'normal' | 'low';
}

type EventPriority = 'immediate' | 'normal' | 'low';

// ==================== 配置项 ====================

const CONFIG = {
  // 批量上报间隔（毫秒） - 仅在页面关闭时上报，运行时不发送
  BATCH_INTERVAL: Infinity,
  // 队列最大长度，超过立即上报 - 设为无限大，所有事件都等到页面关闭
  MAX_QUEUE_SIZE: Infinity,
  // 节流间隔（毫秒） - 增加到800ms
  THROTTLE_INTERVAL: 800,
  // 是否启用批量上报（页面关闭时）
  ENABLE_BATCH: true,
  // 是否启用控制台日志
  ENABLE_LOG: false,
};

// ==================== 埋点队列管理器 ====================

class TrackingQueue {
  private queue: TrackEvent[] = []; // 所有事件统一队列
  private throttleTimers: Map<string, number> = new Map();
  private lastEventTime: Map<string, number> = new Map();
  private eventCounts: Map<string, number> = new Map();

  constructor() {
    // 页面卸载时发送剩余数据
    this.setupBeforeUnload();
  }

  /**
   * 添加事件到队列（所有事件都只在页面关闭时发送）
   */
  add(eventName: string, eventData?: Record<string, any>, priority: EventPriority = 'normal') {
    const event: TrackEvent = {
      eventName,
      eventData,
      timestamp: Date.now(),
      priority,
    };

    // 所有事件（包括immediate）都加入队列，只在页面关闭时发送
    this.queue.push(event);

    if (CONFIG.ENABLE_LOG) {
      console.log(`[Umami] 📝 添加到队列: ${eventName} (将在页面关闭时发送)`, eventData);
    }
  }


  /**
   * 合并相同事件（去重）
   */
  private mergeEvents(events: TrackEvent[]): TrackEvent[] {
    const eventMap = new Map<string, TrackEvent>();

    events.forEach((event) => {
      // 生成事件key（基于事件名和数据）
      const key = `${event.eventName}_${JSON.stringify(event.eventData || {})}`;

      const existing = eventMap.get(key);
      if (existing) {
        // 如果已存在，增加计数
        const count = (existing.eventData?.count || 1) + 1;
        existing.eventData = { ...existing.eventData, count };
      } else {
        eventMap.set(key, { ...event });
      }
    });

    return Array.from(eventMap.values());
  }

  /**
   * 手动刷新队列（仅供调试）
   */
  flush() {
    if (this.queue.length === 0) return;

    const eventsToSend = this.mergeEvents([...this.queue]);
    this.queue = [];

    if (typeof window !== 'undefined' && window.umami) {
      try {
        // 批量发送
        eventsToSend.forEach((event) => {
          window.umami!.track(event.eventName, event.eventData);
        });

        if (CONFIG.ENABLE_LOG) {
          console.log(`[Umami] 📤 批量上报 ${eventsToSend.length} 个事件`);
        }
      } catch (error) {
        console.error('[Umami] 批量上报失败:', error);
      }
    }
  }

  /**
   * 使用 sendBeacon 发送（页面关闭时）
   */
  private sendBeacon() {
    if (this.queue.length === 0) return;

    // 合并相同事件
    const eventsToSend = this.mergeEvents([...this.queue]);
    const originalCount = this.queue.length;
    this.queue = [];

    if (typeof window !== 'undefined' && window.umami) {
      try {
        // 批量发送所有事件
        eventsToSend.forEach((event) => {
          window.umami!.track(event.eventName, event.eventData);
        });

        if (CONFIG.ENABLE_LOG) {
          console.log(`[Umami] 🚀 页面卸载，发送 ${eventsToSend.length} 个事件（原始 ${originalCount} 个，合并后减少 ${originalCount - eventsToSend.length} 个）`);
        }
      } catch (error) {
        console.error('[Umami] sendBeacon 失败:', error);
      }
    }
  }

  /**
   * 设置页面卸载监听
   */
  private setupBeforeUnload() {
    if (typeof window === 'undefined') return;

    // 页面卸载前发送数据
    window.addEventListener('beforeunload', () => {
      this.sendBeacon();
    });

    // 页面隐藏时也发送（移动端、切换标签）
    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.sendBeacon();
      }
    });

    // pagehide 事件（更可靠）
    window.addEventListener('pagehide', () => {
      this.sendBeacon();
    });
  }

  /**
   * 节流：限制事件触发频率
   */
  throttle(key: string, callback: () => void, interval: number = CONFIG.THROTTLE_INTERVAL) {
    const now = Date.now();
    const lastTime = this.lastEventTime.get(key) || 0;

    if (now - lastTime >= interval) {
      this.lastEventTime.set(key, now);
      callback();
    } else {
      // 清除旧的定时器
      const existingTimer = this.throttleTimers.get(key);
      if (existingTimer) {
        clearTimeout(existingTimer);
      }

      // 设置新的定时器，确保最后一次触发
      const timer = window.setTimeout(() => {
        this.lastEventTime.set(key, Date.now());
        callback();
        this.throttleTimers.delete(key);
      }, interval - (now - lastTime));

      this.throttleTimers.set(key, timer);
    }
  }

  /**
   * 合并：统计同类事件次数
   */
  merge(key: string, eventName: string, eventData?: Record<string, any>) {
    const count = (this.eventCounts.get(key) || 0) + 1;
    this.eventCounts.set(key, count);

    // 延迟发送，合并多次触发
    this.throttle(
      `merge_${key}`,
      () => {
        const finalCount = this.eventCounts.get(key) || 1;
        this.add(eventName, { ...eventData, count: finalCount }, 'normal');
        this.eventCounts.delete(key);
      },
      500
    );
  }
}

// 创建全局队列实例
const trackingQueue = new TrackingQueue();

// ==================== 导出的 API ====================

/**
 * 跟踪自定义事件（基础方法）
 * @param eventName 事件名称
 * @param eventData 事件数据（可选）
 * @param priority 优先级：immediate（立即）、normal（普通）、low（低优先级）
 */
export const trackEvent = (
  eventName: string,
  eventData?: Record<string, any>,
  priority: EventPriority = 'normal'
) => {
  try {
    trackingQueue.add(eventName, eventData, priority);
  } catch (error) {
    console.error('[Umami] 跟踪事件失败:', error);
  }
};

/**
 * 跟踪页面浏览事件（关键事件，立即上报）
 * @param pageName 页面名称
 * @param pageData 页面数据（可选）
 */
export const trackPageView = (pageName: string, pageData?: Record<string, any>) => {
  trackEvent(
    'page-view',
    {
      page: pageName,
      ...pageData,
    },
    'immediate' // 页面浏览是关键事件，立即上报
  );
};

/**
 * 跟踪按钮点击事件（普通埋点，批量上报）
 * @param buttonName 按钮名称
 * @param location 按钮位置
 * @param extraData 额外数据（可选）
 */
export const trackButtonClick = (
  buttonName: string,
  location: string,
  extraData?: Record<string, any>
) => {
  trackEvent(
    'button-click',
    {
      button: buttonName,
      location,
      ...extraData,
    },
    'normal'
  );
};

/**
 * 跟踪轮播切换事件（高频事件，节流处理）
 * @param slideIndex 轮播索引
 * @param slideTitle 轮播标题（可选）
 */
export const trackCarouselChange = (slideIndex: number, slideTitle?: string) => {
  const key = `carousel_${slideTitle || slideIndex}`;
  trackingQueue.throttle(key, () => {
    trackEvent('carousel-change', {
      slideIndex,
      slideTitle,
    });
  });
};

/**
 * 跟踪产品卡片点击事件（普通埋点）
 * @param productName 产品名称
 * @param productType 产品类型
 */
export const trackProductClick = (productName: string, productType: string) => {
  trackEvent('product-click', {
    product: productName,
    type: productType,
  });
};

/**
 * 跟踪鼠标悬停事件（高频事件，节流 + 合并）
 * @param elementName 元素名称
 * @param location 位置
 */
export const trackHover = (elementName: string, location: string) => {
  const key = `hover_${location}_${elementName}`;
  trackingQueue.merge(key, 'element-hover', {
    element: elementName,
    location,
  });
};

/**
 * 跟踪元素曝光事件（低优先级，批量上报）
 * @param elementName 元素名称
 * @param location 位置
 * @param extraData 额外数据（可选）
 */
export const trackExposure = (
  elementName: string,
  location: string,
  extraData?: Record<string, any>
) => {
  trackEvent(
    'element-exposure',
    {
      element: elementName,
      location,
      ...extraData,
    },
    'low'
  );
};

/**
 * 手动刷新队列（用于调试或特殊场景）
 */
export const flushTrackingQueue = () => {
  trackingQueue.flush();
};

/**
 * 更新配置（可选，用于动态调整）
 */
export const updateTrackingConfig = (config: Partial<typeof CONFIG>) => {
  Object.assign(CONFIG, config);
};

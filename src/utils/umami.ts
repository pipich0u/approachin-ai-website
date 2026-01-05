/**
 * Umami 埋点工具类
 * 提供类型安全的事件跟踪方法
 */

// 扩展 Window 类型
declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, any>) => void;
    };
  }
}

/**
 * 跟踪自定义事件
 * @param eventName 事件名称
 * @param eventData 事件数据（可选）
 */
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  try {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track(eventName, eventData);
      // console.log(`[Umami] ✓ ${eventName}`, eventData);
    }
  } catch (error) {
    console.error('[Umami] 跟踪事件失败:', error);
  }
};

/**
 * 跟踪页面浏览事件
 * @param pageName 页面名称
 * @param pageData 页面数据（可选）
 */
export const trackPageView = (pageName: string, pageData?: Record<string, any>) => {
  trackEvent('page-view', {
    page: pageName,
    ...pageData,
  });
};

/**
 * 跟踪按钮点击事件
 * @param buttonName 按钮名称
 * @param location 按钮位置
 * @param extraData 额外数据（可选）
 */
export const trackButtonClick = (
  buttonName: string,
  location: string,
  extraData?: Record<string, any>
) => {
  trackEvent('button-click', {
    button: buttonName,
    location,
    ...extraData,
  });
};

/**
 * 跟踪轮播切换事件
 * @param slideIndex 轮播索引
 * @param slideTitle 轮播标题（可选）
 */
export const trackCarouselChange = (slideIndex: number, slideTitle?: string) => {
  trackEvent('carousel-change', {
    slideIndex,
    slideTitle,
  });
};

/**
 * 跟踪产品卡片点击事件
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
 * 跟踪鼠标悬停事件
 * @param elementName 元素名称
 * @param location 位置
 */
export const trackHover = (elementName: string, location: string) => {
  trackEvent('element-hover', {
    element: elementName,
    location,
  });
};

import { useEffect, useRef } from 'react';
import { trackExposure } from '@/utils/umami';

/**
 * 曝光埋点 Hook
 * @param elementName 元素名称
 * @param location 位置
 * @param extraData 额外数据
 * @param options Intersection Observer 配置
 */
export const useExposureTracking = (
  elementName: string,
  location: string,
  extraData?: Record<string, any>,
  options?: IntersectionObserverInit
) => {
  const ref = useRef<HTMLDivElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 当元素进入可视区域且未曾跟踪过
          if (entry.isIntersecting && !hasTracked.current) {
            trackExposure(elementName, location, extraData);
            hasTracked.current = true;
            // 曝光后取消观察
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.5, // 元素 50% 可见时触发
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementName, location, extraData, options]);

  return ref;
};

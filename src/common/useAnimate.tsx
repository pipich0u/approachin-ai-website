import { RefObject, useEffect } from 'react';
import animateDirective from '@/utils/animate'; // 假设您的 animateDirective 导出自一个文件

interface UseAnimateProps {
    elementRef: RefObject<HTMLElement>;
    direction?: 'down' | 'up' | 'left' | 'right';
}

const useAnimate = ({ elementRef, direction }: UseAnimateProps) => {
    useEffect(() => {
        const el = elementRef.current;
        if (!el) return;

        // 调用 mounted 钩子
        animateDirective.mounted(el, { value: direction });

        // 清理函数，调用 unmounted 钩子
        return () => {
            if (el) {
                animateDirective.unmounted(el); // 正确：传递的是 Element
            }
        };
    }, [elementRef, direction]);
};

export default useAnimate;
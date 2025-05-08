import { RefObject, useEffect } from 'react';
import animateDirective from '@/utils/animate'; 

interface UseAnimateProps {
    elementRef: RefObject<HTMLElement>;
    direction?: 'down' | 'up' | 'left' | 'right';
}

const useAnimate = ({ elementRef, direction }: UseAnimateProps) => {
    useEffect(() => {
        const el = elementRef.current;
        if (!el) return;
        animateDirective.mounted(el, { value: direction });

        return () => {
            if (el) {
                animateDirective.unmounted(el);
            }
        };
    }, [elementRef, direction]);
};

export default useAnimate;
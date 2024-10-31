const distance = 150;
const animationMap = new WeakMap();

const ob = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            const animation = animationMap.get(entry.target);
            animation.play();
            ob.unobserve(entry.target);
        }
    }
});

function isBelowViewport(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return rect.top > window.innerHeight;
}

const animateDirective = {
    mounted(el: HTMLElement, binding: { value?: string }) {
        // 默认从下方滑入的动画
        const slideInAnimation = el.animate([
            {
                transform: `translateY(${distance}px)`, // 从下方滑入
                opacity: 0.5,
            },
            {
                transform: 'translateY(0)', // 回到原位
                opacity: 1,
            }
        ], {
            duration: 500,
            easing: "ease-in-out"
        });

        slideInAnimation.pause();
        animationMap.set(el, slideInAnimation);

        if (!isBelowViewport(el)) {
            // 如果元素已经在视口中，根据方向执行滑出动画
            const direction = binding.value || 'none'; // 默认方向为 'none'
            let transformValue;

            // 根据方向设置 transform 的值
            if (direction === 'right') {
                transformValue = `translateX(${distance}px)`; // 从右侧滑出
            } else if (direction === 'left') {
                transformValue = `translateX(-${distance}px)`; // 从左侧滑出
            } else {
                // 如果没有指定方向，使用默认的下方滑入动画
                ob.observe(el);
                return;
            }

            const slideOutAnimation = el.animate([
                {
                    transform: transformValue,
                    opacity: 0.5,
                },
                {
                    transform: 'translateX(0)', // 回到原位
                    opacity: 1,
                }
            ], {
                duration: 500,
                easing: "ease-in-out"
            });

            slideOutAnimation.pause();
            animationMap.set(el, slideOutAnimation);
        }

        ob.observe(el); // 开始观察元素
    },
    unmounted(el: HTMLElement) {
        ob.unobserve(el);
    },
};

export default animateDirective;
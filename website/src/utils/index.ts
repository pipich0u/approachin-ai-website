// animateDirective.ts
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
        if (!isBelowViewport(el)) {
            return;
        }

        const direction = binding.value || 'down'; // 默认方向为 'down'
        let transformValue;

        if (direction === 'right') {
            transformValue = `translateX(${distance}px)`; // 从右侧滑出
        } else if (direction === 'left') {
            transformValue = `translateX(-${distance}px)`; // 从左侧滑出
        } else {
            transformValue = `translateY(${distance}px)`; // 从下方滑入
        }

        const animation = el.animate([
            {
                transform: transformValue,
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

        animation.pause();
        animationMap.set(el, animation);
        ob.observe(el);
    },
    unmounted(el: HTMLElement) {
        ob.unobserve(el);
    },
};

export default animateDirective;
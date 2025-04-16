const distance = 150;
const animationMap = new WeakMap();

const ob = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            const animation = animationMap.get(entry.target);
            if (animation) {
                animation.play();
                // 动画播放完成后停止观察
                animation.onfinish = () => {
                    ob.unobserve(entry.target);
                    animationMap.delete(entry.target);
                };
            }
        } else {
            // 当元素离开视口时，如果动画未播放，则取消动画
            const animation = animationMap.get(entry.target);
            if (animation && animation.playState !== 'finished') {
                animation.cancel();
                animation.currentTime = 0;
            }
        }
    }
}, {
    rootMargin: '0px 0px -100px 0px' 
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

        const direction = binding.value || 'down';
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
        const animation = animationMap.get(el);
        if (animation) {
            animation.cancel();
            animationMap.delete(el);
        }
        ob.unobserve(el);
    },
};

export default animateDirective;
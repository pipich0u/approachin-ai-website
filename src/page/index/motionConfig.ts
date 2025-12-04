// Motion 动画配置
import type { Transition } from "motion/react";

// 滚动进入视口动画配置
export const fadeInUpVariants = {
  initial: { y: 50, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
};

export const fadeInUpTransition: Transition = {
  duration: 0.6,
  ease: 'easeOut',
};

export const defaultViewport = {
  once: false,
  amount: 0.5,
};

// 初始加载动画配置
export const initialLoadVariants = {
  initial: { x: 0, y: 100, opacity: 0 },
  animate: { x: 0, y: 0, opacity: 1 },
};

export const initialLoadTransition: Transition = {
  duration: 0.8,
  ease: 'easeOut',
};

// 组合配置 - 滚动进入视口
export const scrollInViewProps = {
  ...fadeInUpVariants,
  viewport: defaultViewport,
  transition: fadeInUpTransition,
};

// 组合配置 - 初始加载
export const initialLoadProps = {
  ...initialLoadVariants,
  transition: initialLoadTransition,
};

// Spring 弹簧滚动动画配置
export const springScrollTransition: Transition = {
  type: "spring",
  stiffness: 100,    // 弹簧刚度（值越大动画越快）
  damping: 20,       // 阻尼系数（值越大弹跳越少，越平滑）
  mass: 1,           // 质量（值越大惯性越大）
};

// 滚动进入视口 - Spring 版本
export const scrollInViewSpringProps = {
  ...fadeInUpVariants,
  viewport: defaultViewport,
  transition: springScrollTransition,
};

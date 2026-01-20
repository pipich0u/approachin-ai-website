import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import './index.css'
import studio_carousel from '@/assets/images/img/studio_carousel.png'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
const carouselData = [
    {
        id: 0,
        title: '训练场景',
        desc: 'AI任务稳定运行，训练效率跟随卡数线性变化，趋境自研高性能引擎为千亿大模型的训练保驾护航。',
        img: studio_carousel
    },
    {
        id: 1,
        title: '多框架开发场景',
        desc: '兼容 Python/Java/C++ 及 PyTorch/TensorFlow 等主流框架，集成 Jupyter/VSCode 等在线 IDE，一键完成数据处理、模型调试与代码管理。',
        img: studio_carousel
    },
    {
        id: 2,
        title: '镜像与资源管理场景',
        desc: '提供 Web Shell 在线镜像构建能力，预置 GPU / 推理等基础镜像，支持 K8s 资源弹性调度，降低 AI 环境部署与运维成本。',
        img: studio_carousel
    }
]

export const StudioCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
    };

    // 获取要显示的三个项：前一个、当前、后一个
    const getDisplayItems = () => {
        const prevIndex = activeIndex === 0 ? carouselData.length - 1 : activeIndex - 1;
        const nextIndex = activeIndex === carouselData.length - 1 ? 0 : activeIndex + 1;

        return [
            { ...carouselData[prevIndex], position: 'left', index: prevIndex },
            { ...carouselData[activeIndex], position: 'center', index: activeIndex },
            { ...carouselData[nextIndex], position: 'right', index: nextIndex }
        ];
    };

    const displayItems = getDisplayItems();

    return <div className='studio-carousel-container'>
        <div className='studio-carousel-content'>
            <motion.div {...scrollInViewOnceProps} className='studio-carousel-title'>应用场景</motion.div>
            <div className='studio-carousel-box'>
                <div className='studio-carousel-arrow studio-carousel-arrow-left' onClick={handlePrev}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" fill="#B5B5B5" />
                    </svg>
                </div>
                <div className='studio-carousel-arrow studio-carousel-arrow-right' onClick={handleNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13.1716 11.9993L8.2218 7.0496L9.636 5.6354L16 11.9993L9.636 18.3633L8.2218 16.9491L13.1716 11.9993Z" fill="#B5B5B5" />
                    </svg>
                </div>
                <motion.div {...scrollInViewOnceProps} className='studio-carousel-list'>
                    {displayItems.map((item) => {
                        const isActive = item.position === 'center';
                        return (
                            <motion.div
                                key={`${item.id}-${item.position}`}
                                className={`studio-carousel-list-items ${isActive ? 'studio-carousel-list-item-active' : ''}`}
                                onClick={() => {
                                    if (item.position === 'left') {
                                        handlePrev();
                                    } else if (item.position === 'right') {
                                        handleNext();
                                    }
                                }}
                                animate={{
                                    width: isActive ? 760 : 210,
                                    opacity: isActive ? 1 : 0.8
                                }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                                <motion.div
                                    className='studio-carousel-list-item-title'
                                    animate={{
                                        scale: isActive ? 1 : 0.95
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {item.title}
                                </motion.div>

                                <AnimatePresence mode="wait">
                                    {isActive && (
                                        <>
                                            <motion.div
                                                key={`desc-${item.id}`}
                                                className='studio-carousel-list-item-desc'
                                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                                animate={{ opacity: 1, height: 'auto', marginTop: 5 }}
                                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                            >
                                                {item.desc}
                                            </motion.div>

                                            <motion.img
                                                key={`img-${item.id}`}
                                                src={item.img}
                                                alt={item.title}
                                                className='studio-carousel-list-item-img'
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
                                            />
                                        </>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    </div>
} 
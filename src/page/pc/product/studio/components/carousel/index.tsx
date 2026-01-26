import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import './index.css'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import { studioTextConfig } from '../../textConfig'
import studio_carousel from '@/assets/images/img/studio_carousel.png'
import { trackCarouselChange } from '@/utils/umami'

interface CarouselItem {
    id: number
    title: string
    desc: string
}

interface CarouselConfig {
    title: string
    imageName?: string
    data: CarouselItem[]
}

interface StudioCarouselProps {
    config?: CarouselConfig
}

// 图片映射表
const imageMap: Record<string, string> = {
    'studio_carousel': studio_carousel
}

export const StudioCarousel = ({ config = studioTextConfig.carousel }: StudioCarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(1);

    // 根据配置的 imageName 获取图片
    const carouselImage = useMemo(() => {
        return config.imageName ? imageMap[config.imageName] : studio_carousel
    }, [config.imageName])

    const carouselData = useMemo(() =>
        config.data.map(item => ({ ...item, img: carouselImage })),
        [config.data, carouselImage]
    )

    const handlePrev = () => {
        setActiveIndex((prev) => {
            const newIndex = prev === 0 ? carouselData.length - 1 : prev - 1;
            trackCarouselChange(newIndex, carouselData[newIndex].title);
            return newIndex;
        });
    };

    const handleNext = () => {
        setActiveIndex((prev) => {
            const newIndex = prev === carouselData.length - 1 ? 0 : prev + 1;
            trackCarouselChange(newIndex, carouselData[newIndex].title);
            return newIndex;
        });
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

    return <div className='studio-carousel-container' style={{ backgroundColor: '#F8F8FC' }}>
        <div className='studio-carousel-content'>
            <motion.div {...scrollInViewOnceProps} className='studio-carousel-title'>{config.title}</motion.div>
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
                                    animate={{ scale: isActive ? 1 : 0.95 }}
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
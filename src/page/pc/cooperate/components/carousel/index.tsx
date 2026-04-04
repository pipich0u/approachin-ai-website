import './index.css'
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { carouselList } from '../../textConfig'
import logo1 from '@/assets/images/img/guo_logo.png'
import logo2 from '@/assets/images/img/zhipu_logo.png'
import logo3 from '@/assets/images/img/changting_logo.png'
// import logo4 from '@/assets/images/img/huawei.png'
import card_bg1 from '@/assets/images/img/carousel1.webp'
import card_bg2 from '@/assets/images/img/carousel2.webp'
import card_bg3 from '@/assets/images/img/carousel3.webp'
// import card_bg4 from '@/assets/images/img/carousel4.png'
import { trackCarouselChange } from '@/utils/umami';

// 轮播数据
const carouselData = [
    {
        ...carouselList.carouselData[0],
        image: card_bg1,
        logo: logo1,
    },
    {
        ...carouselList.carouselData[1],
        image: card_bg2,
        logo: logo2,
    },
    {
        ...carouselList.carouselData[2],
        image: card_bg3,
        logo: logo3
    },
    // {
    //     ...carouselList.carouselData[3],
    //     image: card_bg4,
    //     logo: logo4
    // },
];

export default function CooperateCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    // 自动轮播
    // useEffect(() => {
    //     if (!isAutoPlay) return;

    //     const timer = setInterval(() => {
    //         setCurrentIndex((prev) => (prev + 1) % carouselData.length);
    //     }, 8000);

    //     return () => clearInterval(timer);
    // }, [isAutoPlay]);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
        trackCarouselChange(index, carouselData[index].title);
        setIsAutoPlay(false);
        setTimeout(() => setIsAutoPlay(true), 5000);
    };

    // 点击卡片切换到中间
    const handleCardClick = (index: number) => {
        setCurrentIndex(index);
        trackCarouselChange(index, carouselData[index].title);
        setIsAutoPlay(false);
        setTimeout(() => setIsAutoPlay(true), 5000);
    };

    // 获取显示的三张卡片
    const getVisibleCards = () => {
        const total = carouselData.length;
        const prevIndex = (currentIndex - 1 + total) % total;
        const nextIndex = (currentIndex + 1) % total;

        return [
            { ...carouselData[prevIndex], position: -1, cardIndex: prevIndex },
            { ...carouselData[currentIndex], position: 0, cardIndex: currentIndex },
            { ...carouselData[nextIndex], position: 1, cardIndex: nextIndex }
        ];
    };

    const visibleCards = getVisibleCards();

    return (
        <div className='carousel-container'>
            <div className="carousel-content">
                <div className="carousel-con-title">{carouselList.title}</div>
                <div className="carousel-con-box">
                    {/* 左侧遮罩 */}
                    <div className="carousel-mask carousel-mask-left"></div>

                    {/* 卡片容器 */}
                    <div className="carousel-cards-wrapper"
                        onMouseEnter={() => setIsAutoPlay(false)}
                        onMouseLeave={() => setIsAutoPlay(true)}>
                        <AnimatePresence initial={false} mode="popLayout">
                            {visibleCards.map((card) => {
                                const centerWidth = 500;
                                const sideWidth = 450;
                                const gap = 30;
                                let x = 0;
                                if (card.position === -1) {
                                    x = -(centerWidth / 2 + gap + sideWidth / 2);
                                } else if (card.position === 1) {
                                    x = centerWidth / 2 + gap + sideWidth / 2;
                                }

                                return (
                                    <motion.div
                                        key={`${card.id}-${card.cardIndex}`}
                                        className="carousel-card"
                                        style={{
                                            width: card.position === 0 ? centerWidth : sideWidth,
                                            height: card.position === 0 ? 300 : 270
                                        }}
                                        initial={{
                                            x: card.position > 0 ? (centerWidth + gap + sideWidth)
                                                : card.position < 0 ? -(centerWidth + gap + sideWidth) : x,
                                        }}
                                        exit={{
                                            x: card.position > 0 ? (centerWidth + gap + sideWidth)
                                                : -(centerWidth + gap + sideWidth),
                                        }}
                                        animate={{ x, zIndex: card.position === 0 ? 3 : 1 }}
                                        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                                        onClick={() => handleCardClick(card.cardIndex)}
                                    >
                                        <div className="carousel-card-image">
                                            <img src={card.image} alt={card.title} />
                                            <div className='carousel-card-logo'>
                                                <img src={card.logo} alt="" />
                                            </div>
                                        </div>
                                        <div className="carousel-card-info">
                                            <div className='carousel-card-info-title'>{card.title}</div>
                                            <p>{card.desc}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    {/* 右侧遮罩 */}
                    <div className="carousel-mask carousel-mask-right"></div>
                </div>

                {/* 指示器 */}
                <div className="carousel-dots">
                    {carouselData.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        >
                            <span className="carousel-dot-inner"></span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
} 
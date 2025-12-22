import './index.css'
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

// 轮播数据
const carouselData = [
    {
        id: 1,
        title: '合作伙伴 1',
        desc: '优秀合作伙伴介绍文案',
        image: '/images/partner1.png'
    },
    {
        id: 2,
        title: '合作伙伴 2',
        desc: '优秀合作伙伴介绍文案',
        image: '/images/partner2.png'
    },
    {
        id: 3,
        title: '合作伙伴 3',
        desc: '优秀合作伙伴介绍文案',
        image: '/images/partner3.png'
    },
    {
        id: 4,
        title: '合作伙伴 4',
        desc: '优秀合作伙伴介绍文案',
        image: '/images/partner4.png'
    }
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
        setIsAutoPlay(false);
        setTimeout(() => setIsAutoPlay(true), 5000);
    };

    // 点击卡片切换到中间
    const handleCardClick = (index: number) => {
        setCurrentIndex(index);
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
                <div className="carousel-con-title">优秀伙伴展示</div>
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

                                // 计算位置：左边卡片、中间卡片、右边卡片
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
                                            x: card.position > 0 ? (centerWidth + gap + sideWidth) : card.position < 0 ? -(centerWidth + gap + sideWidth) : x,
                                            opacity: 0
                                        }}
                                        animate={{
                                            x,
                                            opacity: card.position === 0 ? 1 : 0.5,
                                            zIndex: card.position === 0 ? 3 : 1
                                        }}
                                        exit={{
                                            x: card.position > 0 ? (centerWidth + gap + sideWidth) : -(centerWidth + gap + sideWidth),
                                            opacity: 0
                                        }}
                                        transition={{
                                            duration: 0.7,
                                            ease: [0.25, 0.46, 0.45, 0.94]
                                        }}
                                        onClick={() => handleCardClick(card.cardIndex)}
                                    >
                                        <div className="carousel-card-image">
                                            {/* <img src={card.image} alt={card.title} /> */}
                                        </div>
                                        <div className="carousel-card-info">
                                            <h3>{card.title}</h3>
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
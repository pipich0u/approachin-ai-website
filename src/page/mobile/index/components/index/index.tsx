
import './index.css'
import { useState, useEffect } from 'react';
import { heroSlides, heroCards } from '@/page/pc/index/textConfig';
import { useNavigate } from 'react-router-dom';
import heroVisionBg from '@/assets/images/img/hero_vision_bg.webp';

const SLIDE_DURATION = 6000;

export default function PageIndex() {
    const [current, setCurrent] = useState(0);
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const tick = setInterval(() => {
            setProgress(prev => {
                const next = prev + (100 / (SLIDE_DURATION / 50));
                if (next >= 100) {
                    setCurrent(c => (c + 1) % heroSlides.length);
                    return 0;
                }
                return next;
            });
        }, 50);
        return () => clearInterval(tick);
    }, []);

    const handleTabClick = (idx: number) => {
        if (idx === current) return;
        setCurrent(idx);
        setProgress(0);
    };

    const handleCardClick = (card: typeof heroCards[0]) => {
        if (card.link.startsWith('http')) {
            window.open(card.link, '_blank');
        } else {
            navigate(card.link);
        }
    };

    const handleBtnClick = (slide: typeof heroSlides[0]) => {
        if (!slide.btnLink) return;
        if (slide.btnLink.startsWith('http')) {
            window.open(slide.btnLink, '_blank');
        } else {
            navigate(slide.btnLink);
        }
    };

    return (
        <div className="mob-hero">
            {/* 轮播区域 */}
            <div
                className={`mob-hero-slide ${current === 0 ? 'mob-hero-slide-vision' : ''} ${current === 1 ? 'mob-hero-slide-dark' : ''}`}
                style={current === 0 ? { backgroundImage: `url(${heroVisionBg})` } : {}}
            >
                <div className="mob-hero-slide-content">
                    <h1 className="mob-hero-title">{heroSlides[current].title}</h1>
                    <p className="mob-hero-desc">{heroSlides[current].desc}</p>
                    {heroSlides[current].btnText && (
                        <button
                            className="mob-hero-btn"
                            onClick={() => handleBtnClick(heroSlides[current])}
                        >
                            {heroSlides[current].btnText}
                        </button>
                    )}
                </div>

                {/* 指示器 */}
                <div className="mob-hero-indicators">
                    {heroSlides.map((slide, idx) => (
                        <div
                            key={idx}
                            className={`mob-hero-indicator ${current === idx ? 'active' : ''}`}
                            onClick={() => handleTabClick(idx)}
                        >
                            <span className="mob-hero-indicator-text">{slide.tag}</span>
                            <div className="mob-hero-indicator-bar">
                                {current === idx && (
                                    <div
                                        className="mob-hero-indicator-fill"
                                        style={{ width: `${progress}%` }}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 卡片区域 */}
            <div className="mob-hero-cards">
                {heroCards.map((card, idx) => (
                    <div
                        key={idx}
                        className="mob-hero-card"
                        onClick={() => handleCardClick(card)}
                    >
                        <div className="mob-hero-card-body">
                            <div className="mob-hero-card-title">{card.title}</div>
                            <span className="mob-hero-card-tag">{card.tag}</span>
                        </div>
                        <div className="mob-hero-card-img">
                            <img src={card.image} alt={card.title} loading="eager" />
                            {card.imageLabel && (
                                <span className="mob-hero-card-img-label">{card.imageLabel}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

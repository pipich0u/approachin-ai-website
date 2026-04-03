import './index.css'
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { heroSlides, heroCards } from '@/page/pc/index/textConfig';
import { trackPageView, trackButtonClick } from '@/utils/umami';
import { useExposureTracking } from '@/hooks/useExposureTracking';
import { useNavigate } from 'react-router-dom';
import LightPillar from './LightPillar';
import heroVisionBg from '@/assets/images/img/hero_vision_bg.png';


const SLIDE_DURATION = 6000; // 6秒切换

export default function PageIndex() {
    const [current, setCurrent] = useState(0);
    const [progress, setProgress] = useState(0);
    const [paused, setPaused] = useState(false);
    const navigate = useNavigate();
    const exposureRef = useExposureTracking('首页Hero区域', '首页', { section: 'hero' });

    useEffect(() => {
        trackPageView('首页Hero', { section: 'hero' });
    }, []);

    // 自动轮播进度
    useEffect(() => {
        if (paused) return;
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
    }, [paused]);

    const handleTabClick = (idx: number) => {
        if (idx === current) return;
        setCurrent(idx);
        setProgress(0);
    };

    const handleBtnClick = (slide: typeof heroSlides[0]) => {
        trackButtonClick(slide.btnText, '首页Hero', { slideTag: slide.tag });
        if (slide.btnLink.startsWith('http')) {
            window.open(slide.btnLink, '_blank');
        } else {
            navigate(slide.btnLink);
        }
    };

    const handleCardClick = (card: typeof heroCards[0]) => {
        trackButtonClick(card.title, '首页Hero卡片', {});
        if (card.link.startsWith('http')) {
            window.open(card.link, '_blank');
        } else {
            navigate(card.link);
        }
    };

    return (
        <div
            ref={exposureRef}
            className="hero-section"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="hero-inner">
                {/* 左侧：轮播内容 + 指示器 */}
                <div className={`hero-left ${current === 0 ? 'hero-left-vision' : ''} ${current === 1 ? 'hero-left-dark' : ''} ${current === 1 || current === 2 ? 'hero-left-centered' : ''}`} style={{
                    position: 'relative',
                    ...(current === 0 ? {
                        backgroundImage: `url(${heroVisionBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    } : {})
                }}>
                    {current === 1 && (
                        <div className="hero-left-bg">
                            <LightPillar
                                topColor="#5227FF"
                                bottomColor="#FF9FFC"
                                intensity={1}
                                rotationSpeed={0.3}
                                glowAmount={0.002}
                                pillarWidth={10}
                                pillarHeight={0.4}
                                noiseIntensity={0.5}
                                pillarRotation={25}
                                interactive={false}
                                mixBlendMode="screen"
                                quality="high"
                            />
                        </div>
                    )}
                    <div className="hero-slide-area">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.35, ease: 'easeOut' }}
                                className="hero-slide-content"
                            >
                                <h1 className="hero-title">{heroSlides[current].title}</h1>
                                <p className="hero-desc">{heroSlides[current].desc}</p>
                                {heroSlides[current].btnText && (
                                    <button
                                        className={`hero-btn ${heroSlides[current].btnType === 'primary' ? 'hero-btn-primary' : 'hero-btn-default'}`}
                                        onClick={() => handleBtnClick(heroSlides[current])}
                                    >
                                        {heroSlides[current].btnText}
                                    </button>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* 指示器 tab 栏 */}
                    <div className="hero-indicators">
                        {heroSlides.map((slide, idx) => (
                            <div
                                key={idx}
                                className={`hero-indicator ${current === idx ? 'active' : ''}`}
                                onClick={() => handleTabClick(idx)}
                            >
                                <span className="hero-indicator-text">{slide.tag}</span>
                                <div className="hero-indicator-bar">
                                    {current === idx && (
                                        <div
                                            className="hero-indicator-fill"
                                            style={{ width: `${progress}%` }}
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 右侧：资讯卡片（火山引擎排版） */}
                <div className="hero-right">
                    {heroCards.map((card, idx) => (
                        <div
                            key={idx}
                            className="hero-card"
                            onClick={() => handleCardClick(card)}
                        >
                            <div className="hero-card-body">
                                <div className="hero-card-title">{card.title}</div>
                                <span className="hero-card-tag">{card.tag}</span>
                            </div>
                            <div className="hero-card-img">
                                <img src={card.image} alt={card.title} loading="eager" fetchPriority="high" />
                                {card.imageLabel && (
                                    <span className="hero-card-img-label">{card.imageLabel}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

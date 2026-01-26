import './index.css'
import { motion } from 'motion/react';
import { initialLoadProps } from '@/utils/motionConfig'
import { useState, useEffect } from 'react';
import { indexPageList,bannerList } from '@/page/textConfig';
import { trackPageView, trackButtonClick, trackCarouselChange } from '@/utils/umami';
import { useExposureTracking } from '@/hooks/useExposureTracking';
import { useNavigate } from 'react-router-dom';

export default function PageIndex() {
    const [showContent, setShowContent] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isMouseInCarousel, setIsMouseInCarousel] = useState(false);
    const navigator = useNavigate()
    // 曝光埋点
    const exposureRef = useExposureTracking('首页轮播区域', '首页', { section: 'hero' });

    // 跟踪页面浏览
    useEffect(() => {
        trackPageView('首页轮播', { section: 'hero' });
    }, []);

    // 轮播自动切换逻辑 - 鼠标在轮播容器内时暂停
    useEffect(() => {
        if (!showContent || isMouseInCarousel) return;

        const interval = setInterval(() => {
            setProgress((prev) => {
                const newProgress = prev + (100 / 80); // 8秒 = 8000ms, 每100ms增加1.25%
                return newProgress > 100 ? 100 : newProgress;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [showContent, isMouseInCarousel]);

    // 监听进度，触发页面切换
    useEffect(() => {
        if (progress >= 100) {
            const timer = setTimeout(() => {
                const nextSlide = (currentSlide + 1) % 3;
                setCurrentSlide(nextSlide);
                setProgress(0);
            }, 50);

            return () => clearTimeout(timer);
        }
    }, [progress, currentSlide]);

    // 手动切换轮播
    const handleSlideChange = (index: number) => {
        if (index === currentSlide) return;
        setCurrentSlide(index);
        setProgress(0);
        // 只跟踪用户手动切换
        trackCarouselChange(index, `手动切换到第${index + 1}屏`);
    };

    return (
        <div
            ref={exposureRef}
            className="carousel-wrapper"
            onMouseEnter={() => setIsMouseInCarousel(true)}
            onMouseLeave={() => setIsMouseInCarousel(false)}
        >
            {/* 横向排列的三个页面容器 */}
            <div
                className="carousel-slides"
                style={{
                    transform: `translateX(-${currentSlide * 33.333}%)`,
                    transition: 'transform 0.6s ease-in-out'
                }}
            >
                {/* Section 1 */}
                <div className="section-1 overflow-hidden">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 0 }}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                        onAnimationComplete={() => setShowContent(true)}
                    />

                    {<div className='relative z-10 w-full mt-15 flex flex-col '>
                        <div className="flex items-center flex-col">
                            <motion.div {...initialLoadProps} className='title-top text-[#1B1D22] flex'>
                                {indexPageList[0].title}<div className='title-top-text'>{indexPageList[0].color}</div>
                            </motion.div>

                            <motion.div {...initialLoadProps} className='title-desc text-[#484848]'>
                                {indexPageList[0].desc}
                            </motion.div>

                            <motion.button {...initialLoadProps}
                                className='animated-button w-[180px] rounded-lg bg-[#806BFF] '
                                onClick={() => {
                                    trackButtonClick(indexPageList[0].ask, '首页第1屏', { slideIndex: 0 });
                                    navigator('/contact');
                                }}
                            >
                                <span className="text-white font-[380] bt-text">{indexPageList[0].ask}</span>
                            </motion.button>

                            <motion.div {...initialLoadProps} className='index-bottom flex justify-between py-[45px] px-12 mt-28 w-[1210px] h-[130px] rounded-[20px] bg-[#FFFFFF1A] border border-white/80 backdrop-blur-sm'>
                                <div className='index-bottom-item flex items-center gap-2'>
                                    <div className='text-[#333] text-4xl font-[520]'>{indexPageList[0].list[0].item}</div>
                                    <div className='text-[#484848] flex flex-col font-[305] text-[14px] '>
                                        <div>{indexPageList[0].list[0].desc[0]}</div> <div>{indexPageList[0].list[0].desc[1]}</div>
                                    </div>
                                </div>
                                <div className='index-line w-px mx-9'></div>
                                <div className='index-bottom-item flex items-center gap-2'>
                                    <div className='text-[#333] text-4xl font-[520]'>{indexPageList[0].list[1].item}</div>
                                    <div className='text-[#484848] flex flex-col font-[305] text-[14px] '>
                                        <div>{indexPageList[0].list[1].desc[0]}</div><div>{indexPageList[0].list[1].desc[1]}</div>
                                    </div>
                                </div>
                                <div className='index-line w-px mx-9'></div>
                                <div className='index-bottom-item flex items-center gap-2'>
                                    <div className='text-[#333] text-4xl font-[520]'>{indexPageList[0].list[2].item}</div>
                                    <div className='text-[#484848] flex flex-col font-[305] text-[14px] '>
                                        <div>{indexPageList[0].list[2].desc[0]}</div> <div>{indexPageList[0].list[2].desc[1]}</div>
                                    </div>
                                </div>
                                <div className='index-line w-px mx-9'></div>
                                <div className='index-bottom-item flex items-center gap-2'>
                                    <div className='text-[#333] text-4xl font-[520]'>{indexPageList[0].list[3].item}</div>
                                    <div className='text-[#484848] flex flex-col font-[305] text-[14px] '>
                                        <div>{indexPageList[0].list[3].desc[0]}</div> <div>{indexPageList[0].list[3].desc[1]}</div>
                                    </div>
                                </div>
                                <div className='index-line w-px mx-9'></div>
                                <div className='index-bottom-item flex items-center gap-2'>
                                    <div className='text-[#333] text-4xl font-[520]'>{indexPageList[0].list[4].item}</div>
                                    <div className='text-[#484848] flex flex-col font-[305] text-[14px] '>
                                        <div>{indexPageList[0].list[4].desc[0]}</div> <div>{indexPageList[0].list[4].desc[1]}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>}
                </div>

                {/* Section 2 */}
                <div className="section-2">
                    <div className='relative z-10'>
                        <div className="title">
                            <div className='title-top text-white flex text-[48px]! mb-[18px]'>
                                {bannerList[0].title[0]} <br />
                                {bannerList[0].title[1]}
                            </div>
                            <motion.button {...initialLoadProps}
                                className='animated-button w-[152px] shadow-none! rounded-lg bg-[#806BFF] '
                                onClick={() => {
                                    trackButtonClick(bannerList[0].ask, '首页第2屏', { slideIndex: 0 });
                                    window.open(bannerList[0].link,'_blank');
                                }}
                                >
                                <span className="text-white font-[380] bt-text">{bannerList[0].ask}</span>
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="section-3">
                    <div className='relative z-10'>
                        <div className="title">
                            <div className='title-top text-white flex text-[48px]! mb-[18px]'>
                                {bannerList[1].title[0]} <br />
                                {bannerList[1].title[1]}
                            </div>
                            <motion.button {...initialLoadProps}
                                className='animated-button w-[152px] shadow-none! rounded-lg bg-[#806BFF] '
                                onClick={() => {
                                    window.open(bannerList[1].link,'_blank');
                                    trackButtonClick(bannerList[1].ask, '首页第3屏', { slideIndex: 1 });
                                }}
                            >
                                <span className="text-white font-[380] bt-text">{bannerList[1].ask}</span>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 轮播指示器 - 固定在底部 */}
            {showContent && (
                <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-50'>
                    {[0, 1, 2].map((index) => (
                        <div
                            key={index}
                            onClick={() => handleSlideChange(index)}
                            className='cursor-pointer relative overflow-hidden'
                            style={{
                                width: currentSlide === index ? '60px' : '30px',
                                height: '6px',
                                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                borderRadius: '3px',
                                transition: 'width 0.3s ease',
                            }}
                        >
                            {currentSlide === index && (
                                <div
                                    className='absolute top-0 left-0 h-full bg-white rounded-[3px]'
                                    style={{
                                        width: `${progress}%`,
                                        transition: 'width 0.1s linear',
                                    }}
                                />
                            )}
                            {currentSlide !== index && (
                                <div className='absolute top-0 left-0 h-full w-full bg-white/50 rounded-[3px]' />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

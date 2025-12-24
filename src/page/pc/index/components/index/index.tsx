import './index.css'
import { motion } from 'motion/react';
import { initialLoadProps } from '@/utils/motionConfig'
import { useState, useEffect } from 'react';
import { indexPageList } from '@/page/textConfig';

export default function PageIndex() {
    const [showContent, setShowContent] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isMouseInCarousel, setIsMouseInCarousel] = useState(false);

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
                setCurrentSlide((current) => (current + 1) % 3);
                setProgress(0);
            }, 50);

            return () => clearTimeout(timer);
        }
    }, [progress]);

    // 手动切换轮播
    const handleSlideChange = (index: number) => {
        if (index === currentSlide) return;
        setCurrentSlide(index);
        setProgress(0);
    };

    return (
        <div
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

                    {showContent && <div className='relative z-10 w-full mt-15 flex flex-col '>
                        <div className="title">
                            <motion.div {...initialLoadProps} className='title-top text-[#1B1D22] flex'>
                                {indexPageList[0].title}<div className='title-top-text'>{indexPageList[0].color}</div>
                            </motion.div>

                            <motion.div {...initialLoadProps} className='title-desc text-[#484848]'>
                                {indexPageList[0].desc}
                            </motion.div>

                            <motion.button {...initialLoadProps} className='animated-button w-[180px] mt-8 h-11 rounded-lg bg-[#806BFF] '>
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
                            <div className='title-top text-[#fbfbfb] flex'>
                                稳定可靠服务·<div className='title-top-text'>全天守护</div>
                            </div>
                            <div className='title-desc text-[#c3c3c3]'>
                                7x24小时专业技术支持，99.9%可用性保障，让您的AI应用持续稳定运行
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="section-3">
                    <div className='relative z-10'>
                        <div className="title">
                            <div className='title-top text-[#1B1D22] flex'>
                                极速开发部署·<div className='title-top-text'>降本增效</div>
                            </div>
                            <div className='title-desc text-[#484848]'>
                                从开发到上线分钟级完成，大幅降低成本，显著提升效率，助力业务快速增长
                            </div>
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

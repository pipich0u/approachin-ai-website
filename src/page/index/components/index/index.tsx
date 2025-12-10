import './index.css'
import { motion, AnimatePresence } from 'motion/react';
import { initialLoadProps } from '../../motionConfig'
import img1 from '@/assets/images/img/index_left.png'
import img2 from '@/assets/images/img/index_rig.png'
import { useState, useEffect } from 'react';

export default function PageIndex() {
    const [showContent, setShowContent] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    // 轮播自动切换逻辑 - 分离进度更新和页面切换
    useEffect(() => {
        if (!showContent) return;

        const interval = setInterval(() => {
            setProgress((prev) => {
                const newProgress = prev + (100 / 80); // 8秒 = 8000ms, 每100ms增加1.25%
                return newProgress > 100 ? 100 : newProgress;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [showContent]);

    // 监听进度，触发页面切换
    useEffect(() => {
        if (progress >= 100) {
            const timer = setTimeout(() => {
                setIsFirstLoad(false);
                setCurrentSlide((current) => {
                    const next = (current + 1) % 3;
                    console.log('切换: 从', current, '到', next);
                    return next;
                });
                setProgress(0);
            }, 50); // 稍微延迟，避免状态更新冲突

            return () => clearTimeout(timer);
        }
    }, [progress]);

    // 手动切换轮播
    const handleSlideChange = (index: number) => {
        if (index === currentSlide) return;
        setIsFirstLoad(false);
        setCurrentSlide(index);
        setProgress(0);
    };

    return (
        <div className="carousel-wrapper relative">
            <AnimatePresence initial={false}>
                {currentSlide === 0 && (
                    <motion.div
                        key="section-1"
                        initial={
                            isFirstLoad
                                ? { opacity: 1 }
                                : { opacity: 0, x: '100%' }
                        }
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '-100%' }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="section section-1 overflow-hidden absolute inset-0"
                    >
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 0 }}
                            transition={{ duration: 1.5, ease: 'easeInOut' }}
                            onAnimationComplete={() => setShowContent(true)}
                        />
                        <motion.img
                            src={img1}
                            alt=""
                            className="floating-left"
                            animate={{
                                x: [-100, -300, -200, -300, -100],
                                y: [50, -80, 60, -80, 50],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        <motion.img
                            src={img2}
                            alt=""
                            className="floating-right"
                            animate={{
                                x: [100, 300, 200, 300, 100],
                                y: [-50, 80, -60, 80, -50],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        {showContent && <div className='fp-overflow relative z-10'>
                            <div className="title">
                                <motion.div {...initialLoadProps} className='title-top text-[#1B1D22] flex'>
                                    全栈智算引擎·普惠<div className='text-[#4F4CFF]'>高效AI</div>
                                </motion.div>

                                <motion.div {...initialLoadProps} className='title-desc text-[#484848]'>
                                    为企业级用户的 AI 落地提供从算力破局到价值交付的全链路解决方案
                                </motion.div>

                                <motion.button {...initialLoadProps} className='animated-button w-[180px] mt-8 h-11 rounded-lg bg-[#806BFF] '>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" ></path>
                                    </svg>
                                    <span className="text-white font-[380] bt-text">立即咨询</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" ></path>
                                    </svg>
                                </motion.button>

                                <motion.div {...initialLoadProps} className='index-bottom bottom-35 absolute flex py-[19px] px-12 mt-20 w-[1070px] h-20 rounded-[10px] bg-[#FFFFFF1A] border border-white/80 backdrop-blur-sm'>
                                    <div className='flex items-center gap-2'>
                                        <div className='text-[#333] text-2xl font-[520]'>10倍</div>
                                        <div className='text-[#484848] flex flex-col font-[305] text-[14px] '>
                                            <div>顶尖模型</div> <div>门槛降低</div>
                                        </div>
                                    </div>
                                    <div className='index-line w-px mx-10.5'></div>
                                    <div className='flex items-center gap-2'>
                                        <div className='text-[#333] text-2xl font-[520]'>150%</div>
                                        <div className='text-[#484848] flex flex-col font-[305] text-[14px] '>
                                            <div>模型推理</div><div>性能提升</div>
                                        </div>
                                    </div>
                                    <div className='index-line w-px mx-10.5'></div>
                                    <div className='flex items-center gap-2'>
                                        <div className='text-[#333] text-2xl font-[520]'>小时级</div>
                                        <div className='text-[#484848] flex flex-col font-[305] text-[14px] '>
                                            <div>开箱插电</div> <div>应用上线</div>
                                        </div>
                                    </div>
                                    <div className='index-line w-px mx-10.5'></div>
                                    <div className='flex items-center gap-2'>
                                        <div className='text-[#333] text-2xl font-[520]'>80%</div>
                                        <div className='text-[#484848] flex flex-col font-[305] text-[14px] '>
                                            <div>算力资源</div> <div>利用力达</div>
                                        </div>
                                    </div>
                                    <div className='index-line w-px mx-10.5'></div>
                                    <div className='flex items-center gap-2'>
                                        <div className='text-[#333] text-2xl font-[520]'>80%</div>
                                        <div className='text-[#484848] flex flex-col font-[305] text-[14px] '>
                                            <div>AI应用Task</div> <div>成本降低</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>}
                    </motion.div>
                )}

                {currentSlide === 1 && (
                    <motion.div
                        key="section-2"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '-100%' }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="section section-2 overflow-hidden absolute inset-0"
                    >
                        <div className='fp-overflow relative z-10'>
                            <div className="title">
                                <div className='title-top text-[#1B1D22] flex'>
                                    稳定可靠服务·<div className='text-[#4F4CFF]'>全天守护</div>
                                </div>
                                <div className='title-desc text-[#484848]'>
                                    7x24小时专业技术支持，99.9%可用性保障，让您的AI应用持续稳定运行
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {currentSlide === 2 && (
                    <motion.div
                        key="section-3"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '-100%' }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="section section-3 overflow-hidden absolute inset-0"
                    >
                        <div className='fp-overflow relative z-10'>
                            <div className="title">
                                <div className='title-top text-[#1B1D22] flex'>
                                    极速开发部署·<div className='text-[#4F4CFF]'>降本增效</div>
                                </div>
                                <div className='title-desc text-[#484848]'>
                                    从开发到上线分钟级完成，大幅降低成本，显著提升效率，助力业务快速增长
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 轮播指示器 - 固定在底部 */}
            {showContent && (
                <div className='fixed bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-50'>
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

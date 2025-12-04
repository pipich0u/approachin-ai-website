import './index.css'
import { motion } from 'motion/react';
import { initialLoadProps } from '../../motionConfig'
import img1 from '@/assets/images/img/index_left.png'
import img2 from '@/assets/images/img/index_rig.png'

interface indexProps {
    id: string
}

export default function PageIndex({ id }: indexProps) {
    return (
        <div className="section section-1 relative overflow-hidden" id={id}>
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


            {/* ===== 内容区域 ===== */}
            <div className='fp-overflow relative z-10'>
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

                    {/* 你原来的数据统计条 */}
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

            </div>

        </div>
    );
}

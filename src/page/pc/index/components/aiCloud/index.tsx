import './index.css'
import { motion } from "motion/react"
import { scrollInViewSpringProps } from '@/utils/motionConfig'
import { useExposureTracking } from '@/hooks/useExposureTracking'
import computeBall from '@/assets/images/img/compute-ball.webp'

const awards = [
    { title: '异构推理2.0', desc: 'GPU+CPU\n异构协同计算' },
    { title: '以存换算2.0', desc: 'KVCache\n存算分离架构' },
    { title: '虚实同构', desc: '虚拟化与物理\n统一调度引擎' },
    { title: '极致弹性', desc: '万卡级集群\n弹性伸缩能力' },
]

export default function AiCloud() {
    const exposureRef = useExposureTracking('AI算力云区域', '首页', { section: 'aiCloud' })

    return (
        <div className="aicloud-section" ref={exposureRef}>
            <div className="aicloud-card">
                <div className="aicloud-left">
                    <motion.h2 {...scrollInViewSpringProps} className="aicloud-headline">
                        ATaaS: 全球领先的<span className="aicloud-highlight">高效能Token</span>生产平台
                    </motion.h2>
                    <motion.p {...scrollInViewSpringProps} className="aicloud-desc-text">
                        ATaaS通过极致的系统工程设计，重构模型推理的计算、调度、访存逻辑，能够在万卡级异构算力<br/>环境上提供<span className="aicloud-highlight">高产能</span>、<span className="aicloud-highlight">高性能</span>、<span className="aicloud-highlight">高可靠</span>的Token服务
                    </motion.p>
                    <motion.div {...scrollInViewSpringProps} className="aicloud-awards">
                        {awards.map((award, i) => (
                            <div className="aicloud-award-item" key={i}>
                                <div className="aicloud-award-wreath">
                                    <svg viewBox="0 0 80 42" width="100%" height="auto" fill="none" className="aicloud-wreath-svg">
                                        <defs>
                                            <linearGradient id={`gA${i}`} x1="0" y1="0" x2="1" y2="1">
                                                <stop offset="0%" stopColor="#F2D675"/>
                                                <stop offset="50%" stopColor="#D4A843"/>
                                                <stop offset="100%" stopColor="#B08427"/>
                                            </linearGradient>
                                            <linearGradient id={`gB${i}`} x1="0" y1="0" x2="1" y2="1">
                                                <stop offset="0%" stopColor="#EDD06A"/>
                                                <stop offset="100%" stopColor="#C69B38"/>
                                            </linearGradient>
                                        </defs>
                                        {/* 左枝叶 */}
                                        <path d="M16 4C12 5 10 8 12 10.5C13.5 8 16 6.5 16 4Z" fill={`url(#gA${i})`}/>
                                        <path d="M11 9C7 11 6 15 8.5 17C9.5 14 12 12 11 9Z" fill={`url(#gB${i})`}/>
                                        <path d="M7.5 16C4 19 3.5 23 6 25C6.5 22 9 19.5 7.5 16Z" fill={`url(#gA${i})`}/>
                                        <path d="M6 24C3 27 3.5 31 6 32.5C6 30 8 27 6 24Z" fill={`url(#gB${i})`}/>
                                        <path d="M8 32C6 35 7.5 38 10 38.5C9.5 36 10.5 33.5 8 32Z" fill={`url(#gA${i})`}/>
                                        <path d="M18 2C12 10 6 20 9 30C10.5 34 14 38 20 40" stroke="#B08427" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                                        {/* 右枝叶 */}
                                        <path d="M64 4C68 5 70 8 68 10.5C66.5 8 64 6.5 64 4Z" fill={`url(#gA${i})`}/>
                                        <path d="M69 9C73 11 74 15 71.5 17C70.5 14 68 12 69 9Z" fill={`url(#gB${i})`}/>
                                        <path d="M72.5 16C76 19 76.5 23 74 25C73.5 22 71 19.5 72.5 16Z" fill={`url(#gA${i})`}/>
                                        <path d="M74 24C77 27 76.5 31 74 32.5C74 30 72 27 74 24Z" fill={`url(#gB${i})`}/>
                                        <path d="M72 32C74 35 72.5 38 70 38.5C70.5 36 69.5 33.5 72 32Z" fill={`url(#gA${i})`}/>
                                        <path d="M62 2C68 10 74 20 71 30C69.5 34 66 38 60 40" stroke="#B08427" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                                    </svg>
                                    <div className="aicloud-award-inner">
                                        <div className="aicloud-award-title">{award.title}</div>
                                        <div className="aicloud-award-desc">{award.desc}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div {...scrollInViewSpringProps} className="aicloud-tags">
                        <span className="aicloud-tag">万卡级</span>
                        <span className="aicloud-tag">高产能</span>
                    </motion.div>
                </div>
                <div className="aicloud-right">
                    <img src={computeBall} alt="算力球" className="aicloud-ball" />
                </div>
            </div>
        </div>
    )
}

import './index.css'
import { motion } from "motion/react"
import { scrollInViewSpringProps } from '@/utils/motionConfig'
import { useExposureTracking } from '@/hooks/useExposureTracking'
import computeBall from '@/assets/images/img/compute-ball.webp'
import awardYigou from '@/assets/images/img/award_yigou.webp'
import awardYicun from '@/assets/images/img/award_yicun.webp'
import awardXushi from '@/assets/images/img/award_xushi.webp'
import awardTanxing from '@/assets/images/img/award_tanxing.webp'

const awards = [
    { img: awardYigou, alt: '异构推理2.0' },
    { img: awardYicun, alt: '以存换算2.0' },
    { img: awardXushi, alt: '虚实同构' },
    { img: awardTanxing, alt: '极致弹性' },
]

export default function AiCloud() {
    const exposureRef = useExposureTracking('AI算力云区域', '首页', { section: 'aiCloud' })

    return (
        <div className="aicloud-section" ref={exposureRef}>
            <div className="aicloud-card">
                <div className="aicloud-left">
                    <motion.h2 {...scrollInViewSpringProps} className="aicloud-headline">
                        ATaaS: <span className="aicloud-highlight">高效能Token</span>生产平台
                    </motion.h2>
                    <motion.p {...scrollInViewSpringProps} className="aicloud-desc-text">
                        万卡级异构算力环境上提供<span className="aicloud-highlight">高产能</span>、<span className="aicloud-highlight">高性能</span>、<span className="aicloud-highlight">高可靠</span>的Token服务
                    </motion.p>
                    <motion.div {...scrollInViewSpringProps} className="aicloud-awards">
                        {awards.map((award, i) => (
                            <div className="aicloud-award-item" key={i}>
                                <img src={award.img} alt={award.alt} className="aicloud-award-img" />
                            </div>
                        ))}
                    </motion.div>
                    <motion.div {...scrollInViewSpringProps} className="aicloud-tags">
                        <span className="aicloud-tag">万卡级</span>
                        <span className="aicloud-tag">高产能</span>
                    </motion.div>
                    <motion.p {...scrollInViewSpringProps} className="aicloud-footnote">
                        ATaaS 是以提升 Token 效能为核心目标，围绕大模型推理的计算、调度、访存、稳定等链路开展全系统深度重构的技术工程，是清华 MADSys 实验室的"十年磨一剑"。
                    </motion.p>
                </div>
                <div className="aicloud-right">
                    <img src={computeBall} alt="算力球" className="aicloud-ball" />
                </div>
            </div>
        </div>
    )
}

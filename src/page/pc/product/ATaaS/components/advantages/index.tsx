import './index.css'
import { advantagesText } from '../../textConfig'
import { motion } from 'motion/react'
import { scrollInViewOnceProps } from '@/utils/motionConfig'

const padNum = (n: number) => String(n + 1).padStart(2, '0')

export const ATaaSAdvantages = () => {
    return <div className='ataas-core-container'>
        <div className='ataas-core-content'>
            <motion.div {...scrollInViewOnceProps} className='ataas-core-title'>{advantagesText.title}</motion.div>
            <motion.div {...scrollInViewOnceProps} className='ataas-core-subtitle'>多项全球首创技术，重构AI推理架构</motion.div>
            <motion.div {...scrollInViewOnceProps} className='ataas-core-grid'>
                {advantagesText.advantagesList.map((item, index) => (
                    <div className='ataas-core-card' key={index}>
                        <div className='ataas-core-num'>{padNum(index)}</div>
                        <h3 className='ataas-core-card-title'>{item.title}</h3>
                        <div className='ataas-core-card-list'>
                            {item.items.map((li, liIndex) => (
                                <p key={liIndex}>{li}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    </div>
}

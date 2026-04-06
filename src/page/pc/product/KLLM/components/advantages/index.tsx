import './index.css'
import { advantagesText } from '../../textConfig'
import { motion } from 'motion/react'
import { scrollInViewOnceProps } from '@/utils/motionConfig'

const padNum = (n: number) => String(n + 1).padStart(2, '0')

export const KllmAdvantages = () => {
    return <div className='kllm-core-container'>
        <div className='kllm-core-content'>
            <motion.div {...scrollInViewOnceProps} className='kllm-core-title'>{advantagesText.title}</motion.div>
            <motion.div {...scrollInViewOnceProps} className='kllm-core-grid'>
                {advantagesText.advantagesList.map((item, index) => (
                    <div className='kllm-core-card' key={index}>
                        <div className='kllm-core-num'>{padNum(index)}</div>
                        <h3 className='kllm-core-card-title'>{item.title}</h3>
                        <div className='kllm-core-card-list'>
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

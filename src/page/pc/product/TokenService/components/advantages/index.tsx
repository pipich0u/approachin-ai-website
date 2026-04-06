import './index.css'
import { advantagesText } from '../../textConfig'
import { motion } from 'motion/react'
import { scrollInViewOnceProps } from '@/utils/motionConfig'

const padNum = (n: number) => String(n + 1).padStart(2, '0')

export const TokenServiceAdvantages = () => {
    return <div className='ts-core-container'>
        <div className='ts-core-content'>
            <motion.div {...scrollInViewOnceProps} className='ts-core-title'>{advantagesText.title}</motion.div>
            <motion.div {...scrollInViewOnceProps} className='ts-core-grid'>
                {advantagesText.advantagesList.map((item, index) => (
                    <div className='ts-core-card' key={index}>
                        <div className='ts-core-num'>{padNum(index)}</div>
                        <h3 className='ts-core-card-title'>{item.title}</h3>
                        <div className='ts-core-card-list'>
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

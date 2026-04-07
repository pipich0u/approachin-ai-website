import './index.css'
import { motion } from 'motion/react'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import { amaasTextConfig } from '@/page/pc/product/AMaaS/textConfig'

export const MobAMaaSTestimony = () => {
    const { testimony } = amaasTextConfig

    return <div className='mob-amaas-testimony'>
        <motion.div {...scrollInViewOnceProps} className='mob-amaas-testimony-title'>{testimony.title}</motion.div>
        <motion.div {...scrollInViewOnceProps} className='mob-amaas-testimony-desc'>{testimony.description}</motion.div>
        <div className='mob-amaas-testimony-list'>
            {testimony.list.map((item, index) => (
                <div className='mob-amaas-testimony-card' key={index}>
                    <img src={item.icon} alt="" className='mob-amaas-testimony-icon' />
                    <div className='mob-amaas-testimony-card-desc'>{item.desc}</div>
                    <div className='mob-amaas-testimony-link' onClick={() => window.open(item.link)}>{item.btn}</div>
                </div>
            ))}
        </div>
    </div>
}

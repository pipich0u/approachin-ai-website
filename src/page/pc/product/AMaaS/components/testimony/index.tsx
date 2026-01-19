import { motion } from 'motion/react'
import './index.css'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import { amaasTextConfig } from '../../textConfig'

export const AMaasTestimony = () => {
    const { testimony } = amaasTextConfig;
    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,15,15,15,15];
    return <div className='amaas-testimony-container'>
        <div className='amaas-testimony-content'>
            <motion.div className='amaas-testimony-title' {...scrollInViewOnceProps}>{testimony.title}</motion.div>
            <motion.div className='amaas-testimony-desc' {...scrollInViewOnceProps}>{testimony.description}</motion.div>

            <motion.div className='amaas-testimony-scroll' {...scrollInViewOnceProps}>
                <div className='testimony-scroll-container'>
                    <div className='testimony-scroll-track'>
                        {images.map((item, index) => (
                            <div className='testimony-items'>

                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
}
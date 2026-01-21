import './index.css'
import { motion } from 'motion/react'
import { scrollInViewOnceProps,initialLoadProps } from '@/utils/motionConfig'
import studioLink from '@/assets/images/img/studio_link.png'
import { studioTextConfig } from '../../textConfig'

export const StudioLink = () => {

    return <div className='studio-link-container'>
        <div className='studio-link-content'>
            <motion.div className='studio-link-title' {...initialLoadProps}>{studioTextConfig.link.title}</motion.div>
            <motion.div className='studio-link-desc' {...initialLoadProps}>{studioTextConfig.link.desc}</motion.div>
            <motion.div className='studio-link-box' {...scrollInViewOnceProps}>
                <img src={studioLink} alt="" className='selectNone' />
            </motion.div>
        </div>
    </div>
}
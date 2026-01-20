import './index.css'
import { motion } from 'motion/react'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import studioLink from '@/assets/images/img/studio_link.png'

export const StudioLink = () => {

    return <div className='studio-link-container'>
        <div className='studio-link-content'>
            <motion.div className='studio-link-title' {...scrollInViewOnceProps}>AI开发全链路可视</motion.div>
            <motion.div className='studio-link-desc' {...scrollInViewOnceProps}>云原生一站式机器学习/深度学习/大模型AI平台</motion.div>
            <motion.div className='studio-link-box' {...scrollInViewOnceProps}>
                <img src={studioLink} alt="" className='selectNone' />
            </motion.div>
        </div>
    </div>
}
import './index.css'
import { motion } from 'motion/react'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import studioLink from '@/assets/images/img/studio_link.png'

export const StudioLink = () => {

    return <div className='studio-link-container'>
        <div className='studio-link-content'>
            <motion.div className='studio-link-title' {...scrollInViewOnceProps}>AI开发全链路可视</motion.div>
            <motion.div className='studio-link-desc' {...scrollInViewOnceProps}>云原生一站式机器学习/深度学习/大模型AI平台</motion.div>
            <motion.div className='studio-link-learn' {...scrollInViewOnceProps}>
                <div className='studio-link-learn-text'>了解详情</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#806BFF">
                    <path d="M3.50014 13.0001L3.5 11.0002H16.6719L12.7222 7.05044L14.1364 5.63623L20.5004 12.0002L14.1364 18.3642L12.7222 16.9499L16.672 13.0002L3.50014 13.0001Z" fill="#806BFF" />
                </svg>
            </motion.div>
            <motion.div className='studio-link-box' {...scrollInViewOnceProps}>
                <img src={studioLink} alt="" className='selectNone' />
            </motion.div>
        </div>
    </div>
}
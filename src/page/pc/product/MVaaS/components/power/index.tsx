import { motion } from 'motion/react'
import './index.css'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import powerImg from '@/assets/images/img/mvaas_power.png'

export const MVaaSPower = () => {

    return <div className='mvaas-power-container'>
        <div className='mvaas-power-content'>
            <motion.div className='mvaas-power-title' {...scrollInViewOnceProps}>业务SLO驱动的算力规划师</motion.div>
            <motion.div className='mvaas-power-box' {...scrollInViewOnceProps}>
                <img src={powerImg} alt="" className='selectNone' />
            </motion.div>
        </div>
    </div>
}
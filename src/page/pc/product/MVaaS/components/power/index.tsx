import './index.css'
import { motion } from 'motion/react'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import powerImg from '@/assets/images/img/mvaas_power.webp'
import { mvaasTextConfig } from '../../textConfig'

export const MVaaSPower = () => {
    const { power } = mvaasTextConfig;

    return <div className='mvaas-power-container'>
        <div className='mvaas-power-content'>
            <motion.div className='mvaas-power-title' {...scrollInViewOnceProps}>{power.title}</motion.div>
            <motion.div className='mvaas-power-box' {...scrollInViewOnceProps}>
                <img src={powerImg} alt="" className='selectNone' />
            </motion.div>
        </div>
    </div>
}
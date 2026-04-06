import { motion } from 'motion/react'
import './index.css'
import { initialLoadProps } from '@/utils/motionConfig'
import { trackButtonClick } from '@/utils/umami'
import { amaasTextConfig } from '@/page/pc/product/AMaaS/textConfig'
import { useNavigate } from 'react-router-dom'

export const MobAMaaSIndex = () => {
    const { index } = amaasTextConfig
    const navigate = useNavigate()
    return <div className='mob-amaas-banner'>
        <div className='mob-amaas-banner-inner'>
            <motion.div {...initialLoadProps} className='mob-amaas-banner-name'>{index.title}</motion.div>
            <motion.div {...initialLoadProps} className='mob-amaas-banner-title'>{index.subtitle}</motion.div>
            <motion.p {...initialLoadProps} className='mob-amaas-banner-features'>
                {index.features.join('  |  ')}
            </motion.p>
            <motion.button
                {...initialLoadProps}
                className='mob-amaas-banner-btn'
                onClick={() => { trackButtonClick(index.buttonText, '移动端AMaaS首屏'); navigate('/contact') }}
            >
                {index.buttonText}
            </motion.button>
        </div>
    </div>
}

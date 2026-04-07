import '@/page/mobile/common/mob-banner.css'
import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'
import { trackButtonClick } from '@/utils/umami'
import { amaasTextConfig } from '@/page/pc/product/AMaaS/textConfig'
import { useNavigate } from 'react-router-dom'

export const MobAMaaSIndex = () => {
    const { index } = amaasTextConfig
    const navigate = useNavigate()
    return <div className='mob-banner mob-amaas-bg'>
        <div className='mob-banner-content'>
            <div className='mob-banner-left'>
                <motion.div {...initialLoadProps} className='mob-banner-name'>{index.title}</motion.div>
                <motion.div {...initialLoadProps} className='mob-banner-title'>{index.subtitle}</motion.div>
                <motion.p {...initialLoadProps} className='mob-banner-features'>
                    {index.features.join('  |  ')}
                </motion.p>
                <motion.button
                    {...initialLoadProps}
                    className='mob-banner-btn'
                    onClick={() => { trackButtonClick(index.buttonText, '移动端AMaaS首屏'); navigate('/contact') }}
                >
                    {index.buttonText}
                </motion.button>
            </div>
        </div>
    </div>
}

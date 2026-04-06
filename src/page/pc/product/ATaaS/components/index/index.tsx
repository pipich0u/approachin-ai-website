import './index.css'
new Image().src = '/images/ataas_banner.webp'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'
import { overviewText } from '../../textConfig'
import { useNavigate } from 'react-router-dom'
import { trackButtonClick } from '@/utils/umami'

export const ATaaSIndex = () => {
    const navigate = useNavigate()
    return <div className='ataas-banner'>
        <div className='ataas-banner-inner'>
            <motion.h2 {...initialLoadProps} className='ataas-banner-name'>{overviewText.name}</motion.h2>
            <motion.h3 {...initialLoadProps} className='ataas-banner-title'>{overviewText.title}</motion.h3>
            <motion.p {...initialLoadProps} className='ataas-banner-features'>{overviewText.features}</motion.p>
            <motion.button {...initialLoadProps} className='hero-btn hero-btn-primary' onClick={() => {
                trackButtonClick('联系我们', 'ATaaS首屏');
                navigate('/contact');
            }}>
                联系我们
            </motion.button>
        </div>
    </div>
}

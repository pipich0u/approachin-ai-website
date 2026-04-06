import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'
import { overviewText } from '../../textConfig'
import { useNavigate } from 'react-router-dom'
import { trackButtonClick } from '@/utils/umami'

export const TokenServiceIndex = () => {
    const navigate = useNavigate()
    return <div className='ts-banner'>
        <div className='ts-banner-inner'>
            <motion.h2 {...initialLoadProps} className='ts-banner-name'>{overviewText.name}</motion.h2>
            <motion.h3 {...initialLoadProps} className='ts-banner-title'>{overviewText.title}</motion.h3>
            <motion.p {...initialLoadProps} className='ts-banner-desc'>
                {overviewText.desc}
            </motion.p>
            <motion.button {...initialLoadProps} className='hero-btn hero-btn-primary' onClick={() => {
                trackButtonClick('联系我们', 'TokenService首屏');
                navigate('/contact');
            }}>
                联系我们
            </motion.button>
        </div>
    </div>
}

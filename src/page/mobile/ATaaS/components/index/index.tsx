import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'
import { overviewText } from '@/page/pc/product/ATaaS/textConfig'
import { useNavigate } from 'react-router-dom'
import { trackButtonClick } from '@/utils/umami'

export const MobATaaSIndex = () => {
    const navigate = useNavigate()
    return <div className='mob-ataas-banner'>
        <div className='mob-ataas-banner-inner'>
            <motion.div {...initialLoadProps} className='mob-ataas-banner-name'>{overviewText.name}</motion.div>
            <motion.div {...initialLoadProps} className='mob-ataas-banner-title'>{overviewText.title}</motion.div>
            <motion.p {...initialLoadProps} className='mob-ataas-banner-features'>{overviewText.features}</motion.p>
            <motion.button {...initialLoadProps} className='mob-ataas-banner-btn' onClick={() => {
                trackButtonClick('联系我们', '移动端ATaaS首屏');
                navigate('/contact');
            }}>
                联系我们
            </motion.button>
        </div>
    </div>
}

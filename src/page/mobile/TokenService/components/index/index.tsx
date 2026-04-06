import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'
import { overviewText } from '@/page/pc/product/TokenService/textConfig'
import { useNavigate } from 'react-router-dom'
import { trackButtonClick } from '@/utils/umami'

export const MobTokenServiceIndex = () => {
    const navigate = useNavigate()
    return <div className='mob-ts-banner'>
        <div className='mob-ts-banner-inner'>
            <motion.div {...initialLoadProps} className='mob-ts-banner-name'>{overviewText.name}</motion.div>
            <motion.div {...initialLoadProps} className='mob-ts-banner-title'>{overviewText.title}</motion.div>
            <motion.p {...initialLoadProps} className='mob-ts-banner-desc'>{overviewText.desc}</motion.p>
            <motion.button {...initialLoadProps} className='mob-ts-banner-btn' onClick={() => {
                trackButtonClick('联系我们', '移动端TokenService首屏');
                navigate('/contact');
            }}>
                联系我们
            </motion.button>
        </div>
    </div>
}

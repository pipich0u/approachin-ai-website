import '@/page/mobile/common/mob-banner.css'
import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'
import { overviewText } from '@/page/pc/product/TokenService/textConfig'
import { useNavigate } from 'react-router-dom'
import { trackButtonClick } from '@/utils/umami'
import bannerImg from '@/assets/images/img/compute-ball.webp'

export const MobTokenServiceIndex = () => {
    const navigate = useNavigate()
    return <div className='mob-banner mob-ts-bg'>
        <div className='mob-banner-content'>
            <div className='mob-banner-left'>
                <motion.div {...initialLoadProps} className='mob-banner-name'>{overviewText.name}</motion.div>
                <motion.div {...initialLoadProps} className='mob-banner-title'>{overviewText.title}</motion.div>
                <motion.p {...initialLoadProps} className='mob-banner-desc'>{overviewText.desc}</motion.p>
                <motion.button {...initialLoadProps} className='mob-banner-btn' onClick={() => {
                    trackButtonClick('联系我们', '移动端TokenService首屏');
                    navigate('/contact');
                }}>
                    联系我们
                </motion.button>
            </div>
            <motion.div {...initialLoadProps} className='mob-banner-right'>
                <img src={bannerImg} alt={overviewText.name} />
            </motion.div>
        </div>
    </div>
}

import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps, scrollInViewOnceProps } from '@/utils/motionConfig'
import { bannerText, systemText, carouselList, stepList } from '@/page/pc/cooperate/textConfig'
import { useNavigate } from 'react-router-dom'
import { trackButtonClick } from '@/utils/umami'

export const MobCooperateIndex = () => {
    const navigate = useNavigate()

    return <>
        <div className='mob-cp-banner'>
            <div className='mob-cp-banner-inner'>
                <motion.div {...initialLoadProps} className='mob-cp-banner-name'>{bannerText.title}</motion.div>
                <motion.div {...initialLoadProps} className='mob-cp-banner-title'>{bannerText.title2}</motion.div>
                <motion.p {...initialLoadProps} className='mob-cp-banner-desc'>{bannerText.desc}</motion.p>
                <motion.button {...initialLoadProps} className='mob-cp-banner-btn' onClick={() => {
                    trackButtonClick(bannerText.btnText, '移动端Cooperate首屏');
                    navigate('/contact');
                }}>
                    {bannerText.btnText}
                </motion.button>
            </div>
        </div>

        <div className='mob-cp-system'>
            <motion.div {...scrollInViewOnceProps} className='mob-cp-system-title'>{systemText.title}</motion.div>
            <div className='mob-cp-system-list'>
                {systemText.list.map((item, i) => (
                    <motion.div {...scrollInViewOnceProps} className='mob-cp-system-card' key={i}>
                        <div className='mob-cp-system-card-title'>{item.title}</div>
                        <div className='mob-cp-system-card-desc'>{item.desc}</div>
                    </motion.div>
                ))}
            </div>
        </div>

        <div className='mob-cp-cases'>
            <motion.div {...scrollInViewOnceProps} className='mob-cp-cases-title'>{carouselList.title}</motion.div>
            <div className='mob-cp-case-list'>
                {carouselList.carouselData.map((item) => (
                    <motion.div {...scrollInViewOnceProps} className='mob-cp-case-card' key={item.id}>
                        <div className='mob-cp-case-card-title'>{item.title}</div>
                        <div className='mob-cp-case-card-desc'>{item.desc}</div>
                    </motion.div>
                ))}
            </div>
        </div>

        <div className='mob-cp-steps'>
            <motion.div {...scrollInViewOnceProps} className='mob-cp-steps-title'>{stepList.title}</motion.div>
            <div className='mob-cp-step-list'>
                {stepList.steps.map((item, i) => (
                    <motion.div {...scrollInViewOnceProps} className='mob-cp-step-item' key={i}>
                        <div className='mob-cp-step-num'>{item.step}</div>
                        <div className='mob-cp-step-desc'>{item.desc}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    </>
}

import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps, scrollInViewOnceProps } from '@/utils/motionConfig'
import { moonBannerList, MoonInfluenceList } from '@/page/pc/moonCake/textConfig'

export const MobMoonCakeIndex = () => {
    return <>
        <div className='mob-moon-banner'>
            <motion.div {...initialLoadProps} className='mob-moon-banner-tag'>
                {moonBannerList.tag}
            </motion.div>
            <motion.div {...initialLoadProps} className='mob-moon-banner-title'>{moonBannerList.title}</motion.div>
            <motion.p {...initialLoadProps} className='mob-moon-banner-desc'>{moonBannerList.desc}</motion.p>
            <motion.button {...initialLoadProps} className='mob-moon-banner-btn' onClick={() => window.open('https://kvcache-ai.github.io/Mooncake/index.html')}>
                {moonBannerList.btn1}
            </motion.button>
        </div>

        <div className='mob-moon-influence'>
            <motion.div {...scrollInViewOnceProps} className='mob-moon-influence-title'>{MoonInfluenceList.title}</motion.div>
            <div className='mob-moon-influence-list'>
                {MoonInfluenceList.items.map((item, i) => (
                    <motion.div {...scrollInViewOnceProps} className='mob-moon-influence-card' key={i}>
                        <img src={item.img} alt="" />
                        <div className='mob-moon-influence-card-desc'>{item.desc}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    </>
}

import './index.css'
import { IconFont } from '@/utils/antdUtils'
import { infoList } from '@/page/pc/Information/textConfig'
import { motion } from 'motion/react'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import { trackButtonClick } from '@/utils/umami'

export const MobInformationInfo = () => {

    return <div className='mob-information-info-container'>
        {/* <motion.div {...scrollInViewOnceProps} className='mob-in-info-title'>企业资讯</motion.div> */}
        <div className='mob-in-info-content'>
            {infoList.map((item, index) => (
                <motion.div {...scrollInViewOnceProps} key={index}>
                    <div className="mob-in-info-item" onClick={() => {
                        trackButtonClick('查看详情', `Information资讯-${item.title}`);
                        window.open(item.link);
                    }}>
                        <div className='mob-in-info-item-content'>
                            <img src={item.image} alt='' className='mob-in-info-item-content-img' />
                            <div className='mob-in-info-item-content-text'>
                                <div className='mob-in-info-item-title'>{item.title}</div>
                                <div className='mob-in-info-item-desc'>{item.desc}</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
}
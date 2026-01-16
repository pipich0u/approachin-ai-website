import './index.css'
import { IconFont } from '@/utils/antdUtils'
import { infoList } from '../../textConfig'
import { motion } from 'motion/react'
import { scrollInViewOnceProps } from '@/utils/motionConfig'

export const IntroductionStep = () => {
    const stepIcon = <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
        <rect width="38.7344" height="38.7344" rx="19.3672" fill="#A07AFF" fillOpacity="0.6" />
        <circle cx="19.365" cy="19.3672" r="13.8337" fill="white" />
        <circle cx="19.365" cy="19.3672" r="14.6637" stroke="#6031D2" strokeOpacity="0.57" strokeWidth="1.66004" />
        <circle cx="19.3643" cy="19.3672" r="4.42679" fill="#A07AFF" />
    </svg>

    return <div className='introduction-step-container'>
        <div className='introduction-step-content'>
            <div className='introduction-step-timeline'>
                {infoList.map((item, index) => (
                    <motion.div key={index} className='introduction-step-item' {...scrollInViewOnceProps}>
                        <div className='introduction-step-left'>
                            {item.image && (
                                <div className='introduction-step-img-box'>
                                    <div className='introduction-step-img-title'>{item.title}</div>
                                    <img src={item.image} alt={item.title} className='introduction-step-img selectNone' />
                                </div>
                            )}
                        </div>
                        <div className='introduction-step-icon'>
                            {stepIcon}
                        </div>
                        <div className='introduction-step-right'>
                            <div className='introduction-step-date'>{item.date}</div>
                            <div className='introduction-step-desc'>{item.desc}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
}

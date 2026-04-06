import './index.css'
import { infoList } from '../../textConfig'
import { motion } from 'motion/react'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import { trackButtonClick } from '@/utils/umami'

export const InformationInfo = () => {

    return <div className='information-info-container'>
        <div className='in-info-content'>
            {infoList.map((item, index) => (
                <motion.div {...scrollInViewOnceProps} key={index}>
                    <div
                        className="in-info-item"
                        onClick={() => {
                            trackButtonClick('查看详情', `Information资讯-${item.title}`);
                            window.open(item.link);
                        }}
                    >
                        <div className='in-info-item-thumb'>
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className='in-info-item-body'>
                            <h3 className='in-info-item-title'>{item.title}</h3>
                            <div className='in-info-item-desc'>{item.desc}</div>
                            <div className='in-info-item-meta'>
                                <span className='in-info-item-date-icon-wrap'>
                                    <svg className='in-info-item-date-icon' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(-45deg)' }}>
                                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="#fff" />
                                    </svg>
                                </span>
                                <span className='in-info-item-date'>发布时间：{item.date}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
}

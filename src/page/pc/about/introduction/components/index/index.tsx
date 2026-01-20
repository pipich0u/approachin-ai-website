import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'
import { introductionList } from '../../textConfig'
export const IntroductionIndex = () => {
    return <div className='introduction-index-container'>
        <div className='introduction-idx-content'>
            <motion.div {...initialLoadProps} className="introduction-idx-content-title">
                {introductionList.title}<div className='introduction-idx-content-title-color'>{introductionList.titleColor}</div>
            </motion.div>
            <motion.button {...initialLoadProps} className='introduction-idx-content-btn  animated-button'>
                <span className="text-white font-[380] bt-text">{introductionList.btnText}</span>
            </motion.button>
        </div>
        <div className='introduction-idx-company-box'>
            <motion.div {...initialLoadProps} className='introduction-idx-company'>
                <div className="introduction-idx-company-size introduction-idx-company-name">{introductionList.companyName}</div>
                <div className="introduction-idx-company-title introduction-idx-company-size">{introductionList.companyTitle}</div>
                <div className="introduction-idx-company-content">
                    {introductionList.companyContent[0]}<br />
                </div>
                <div className="introduction-idx-company-content">
                    {introductionList.companyContent[1]}<br />
                </div>
                <div className="introduction-idx-company-data">
                    {
                        introductionList.companyData.map((item, index) => (
                            <div key={index} className="in-idx-company-data-item">
                                <div className="introduction-idx-company-data-item-num">{item.num}</div>
                                <div className="introduction-idx-company-data-item-title">{item.title}</div>
                            </div>
                        ))
                    }
                </div>
            </motion.div>
        </div>
    </div>
}
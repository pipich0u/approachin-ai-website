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
                    这段内容暂为占位，待进一步完善和补充具体的信息。它可能涉及到某个重要的主题、事件或者观点，但目前尚未明确其确切的方向和细节。这段内容暂为占位，待进一步完善和补充具体的信息。它可能涉及到某个重要的主题、事件或者观点，但目前尚未明确其确切的方向和细节。
                    <br /><br />
                    这段内容暂为占位，待进一步完善和补充具体的信息。它可能涉及到某个重要的主题、事件或者观点，但目前尚未明确其确切的方向和细节。这段内容暂为占位，待进一步完善和补充具体的信息。它可能涉及到某个重要的主题、事件或者观点，但目前尚未明确其确切的方向和细节。
                    <br /><br />
                    这段内容暂为占位，待进一步完善和补充具体的信息。它可能涉及到某个重要的主题、事件或者观点，但目前尚未明确其确切的方向和细节。
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
import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'
import { introductionList } from '../../textConfig'
export const IntroductionIndex = () => {
    return <div className='introduction-index-container'>
        <div className='in-idx-content'>
            <motion.div {...initialLoadProps} className="in-idx-content-title">
                {introductionList.title}<div className='in-idx-content-title-color'>{introductionList.titleColor}</div>
            </motion.div>
            <motion.button {...initialLoadProps} className='in-idx-content-btn  animated-button'>
                <span className="text-white font-[380] bt-text">{introductionList.btnText}</span>
            </motion.button>
        </div>
        <div className='in-idx-company-box'>
            <motion.div {...initialLoadProps} className='in-idx-company'>
                <div className="in-idx-company-size in-idx-company-name">{introductionList.companyName}</div>
                <div className="in-idx-company-title in-idx-company-size">{introductionList.companyTitle}</div>
                <div className="in-idx-company-content">这段内容暂为占位，待进一步完善和补充具体的信息。它可能涉及到某个重要的主题、事件或者观点，但目前尚未明确其确切的方向和细节。这段内容暂为占位，待进一步完善和补充具体的信息。它可能涉及到某个重要的主题、事件或者观点，但目前尚未明确其确切的方向和细节。
                    <br /><br />
                    这段内容暂为占位，待进一步完善和补充具体的信息。它可能涉及到某个重要的主题、事件或者观点，但目前尚未明确其确切的方向和细节。这段内容暂为占位，待进一步完善和补充具体的信息。它可能涉及到某个重要的主题、事件或者观点，但目前尚未明确其确切的方向和细节。
                    <br /><br />
                    这段内容暂为占位，待进一步完善和补充具体的信息。它可能涉及到某个重要的主题、事件或者观点，但目前尚未明确其确切的方向和细节。
                </div>
                <div className="in-idx-company-data">
                    {
                        introductionList.companyData.map((item, index) => (
                            <div key={index} className="in-idx-company-data-item">
                                <div className="in-idx-company-data-item-num">{item.num}</div>
                                <div className="in-idx-company-data-item-title">{item.title}</div>
                            </div>
                        ))
                    }
                </div>
            </motion.div>
        </div>
    </div>
}
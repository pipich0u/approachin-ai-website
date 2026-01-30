import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps, scrollInViewOnceProps } from '@/utils/motionConfig'
import { introductionList } from '../../textConfig'
import { useNavigate } from 'react-router-dom'

// 渲染公司内容的辅助函数
const renderCompanyContent = (content: string | { text: string; bold?: string; text2?: string }) => {
    if (typeof content === 'string') return content
    return (
        <>
            {content.text}
            {content.bold && <span className='text-[#4D4D4D] font-[520]'>{content.bold}</span>}
            {content.text2}
        </>
    )
}

export const IntroductionIndex = () => {
    const { solutionSection, recognitionSection } = introductionList
    const navigate = useNavigate()
    return (
        <div className='introduction-index-container'>
            {/* 顶部内容区域 */}
            <div className='introduction-idx-content'>
                <motion.div {...initialLoadProps} className="introduction-idx-content-title">
                    {introductionList.title}
                    <div className='introduction-idx-content-title-color'>{introductionList.titleColor}</div>
                </motion.div>
                <motion.button {...initialLoadProps} className='introduction-idx-content-btn animated-button' onClick={() => navigate('/contact')}>
                    <span className="text-white font-[380] bt-text">{introductionList.btnText}</span>
                </motion.button>
                <motion.div {...initialLoadProps} className='introduction-idx-company-team'>
                    {introductionList.companyData.map((item, index) => (
                        <div key={index} className="introduction-idx-company-data-item">
                            <div className="introduction-idx-company-data-item-num">{item.num}</div>
                            <div className="introduction-idx-company-data-item-title">{item.title}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* 公司介绍区域 */}
            <div className='introduction-idx-company-box'>
                <div className='introduction-idx-company'>
                    <motion.div {...initialLoadProps} className="introduction-idx-company-size introduction-idx-company-name">
                        {introductionList.companyName}
                    </motion.div>
                    <motion.div {...initialLoadProps} className="introduction-idx-company-title introduction-idx-company-size">
                        {introductionList.companyTitle}
                    </motion.div>
                    {introductionList.companyContent.map((content, index) => (
                        <motion.div key={index} {...initialLoadProps} className="introduction-idx-company-content indent">
                            {renderCompanyContent(content)}
                        </motion.div>
                    ))}

                    {/* 解决方案区域 */}
                    <motion.div {...scrollInViewOnceProps} className='introduction-idx-company-desc'>
                        <div className='introduction-idx-company-desc-btn' />
                        {solutionSection.titles.map((title, index) => (
                            <div key={index} className={`introduction-idx-company-desc-title${index === solutionSection.titles.length - 1 ? ' mb-3' : ''}`}>
                                {title}
                            </div>
                        ))}
                        {solutionSection.contents.map((content, index) => (
                            <div key={index} className="introduction-idx-company-content">
                                {renderCompanyContent(content)}
                            </div>
                        ))}
                    </motion.div>

                    {/* 行业认可区域 */}
                    <motion.div {...scrollInViewOnceProps} className='introduction-idx-company-desc introduction-idx-company-desc-rig'>
                        <div className='introduction-idx-company-desc-title mb-3'>{recognitionSection.title}</div>
                        <div className="introduction-idx-company-content">{recognitionSection.content}</div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
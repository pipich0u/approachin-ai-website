import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps, scrollInViewOnceProps } from '@/utils/motionConfig'
import { introductionList } from '@/page/pc/about/introduction/textConfig'
import { useNavigate } from 'react-router-dom'

// 渲染公司内容的辅助函数
const renderCompanyContent = (content: string | { text: string; bold?: string; text2?: string }) => {
    if (typeof content === 'string') return content
    return (
        <>
            {content.text}
            {content.bold && <span className='mob-introduction-bold-text'>{content.bold}</span>}
            {content.text2}
        </>
    )
}

export const MobIntroductionIndex = () => {
    const { solutionSection, recognitionSection } = introductionList
    const navigate = useNavigate()
    return (
        <div className='mob-introduction-index-container'>
            {/* 顶部内容区域 */}
            <div className='mob-introduction-idx-content'>
                <motion.div {...initialLoadProps} className="mob-introduction-idx-content-title">
                    {introductionList.title}
                    <div className='mob-introduction-idx-content-title-color'>{introductionList.titleColor}</div>
                </motion.div>
                <motion.button {...initialLoadProps} className='mob-introduction-idx-content-btn animated-button' onClick={() => navigate('/contact')}>
                    <span className="mob-introduction-btn-text bt-text">{introductionList.btnText}</span>
                </motion.button>
            </div>

            {/* 公司介绍区域 */}
            <motion.div {...initialLoadProps} className='mob-introduction-idx-company-box'>
                <div className='mob-introduction-idx-company'>
                    <motion.div {...initialLoadProps} className="mob-introduction-idx-company-size mob-introduction-idx-company-name">
                        {introductionList.companyName}
                    </motion.div>
                    <motion.div {...initialLoadProps} className="mob-introduction-idx-company-title mob-introduction-idx-company-size">
                        {introductionList.companyTitle}
                    </motion.div>
                    {introductionList.companyContent.map((content, index) => (
                        <motion.div key={index} {...initialLoadProps} className="mob-introduction-idx-company-content mob-introduction-indent">
                            {renderCompanyContent(content)}
                        </motion.div>
                    ))}

                    {/* 解决方案区域 */}
                    <motion.div {...initialLoadProps} className='mob-introduction-idx-company-desc'>
                        <div className='mob-introduction-idx-company-desc-btn' />
                        {solutionSection.titles.map((title, index) => (
                            <div key={index} className={`mob-introduction-idx-company-desc-title${index === solutionSection.titles.length - 1 ? ' mob-introduction-mb-3' : ''}`}>
                                {title}
                            </div>
                        ))}
                        {solutionSection.contents.map((content, index) => (
                            <div key={index} className="mob-introduction-idx-company-content mob-introduction-indent">
                                {renderCompanyContent(content)}
                            </div>
                        ))}
                    </motion.div>

                    {/* 行业认可区域 */}
                    <motion.div {...scrollInViewOnceProps} className='mob-introduction-idx-company-desc'>
                        <div className='mob-introduction-idx-company-desc-title mob-introduction-mb-3'>{recognitionSection.title}</div>
                        <div className="mob-introduction-idx-company-content mob-introduction-indent">{recognitionSection.content}</div>
                    </motion.div>
                    <motion.div {...scrollInViewOnceProps} className='mob-introduction-idx-company-team'>
                        {introductionList.companyData.map((item, index) => (
                            <div key={index} className="mob-introduction-idx-company-data-item">
                                <div className="mob-introduction-idx-company-data-item-num">{item.num}</div>
                                <div className="mob-introduction-idx-company-data-item-title">{item.title}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
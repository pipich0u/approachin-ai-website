import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps, scrollInViewOnceProps } from '@/utils/motionConfig'
import { introductionList } from '../../textConfig'
import { useNavigate } from 'react-router-dom'

const renderCompanyContent = (content: string | { text: string; bold?: string; text2?: string }) => {
    if (typeof content === 'string') return content
    return (
        <>
            {content.text}
            {content.bold && <span className='intro-bold'>{content.bold}</span>}
            {content.text2}
        </>
    )
}

export const IntroductionIndex = () => {
    const { solutionSection, recognitionSection } = introductionList
    const navigate = useNavigate()

    return (
        <div className='intro-container'>
            {/* Hero */}
            <div className='intro-hero'>
                <motion.div {...initialLoadProps} className='intro-hero-inner'>
                    <h1 className='intro-hero-title'>
                        {introductionList.title}
                        <span className='intro-hero-title-en'>{introductionList.titleColor}</span>
                    </h1>
                    <p className='intro-hero-subtitle'>{introductionList.companyTitle}</p>
                    <div className='intro-hero-data'>
                        {introductionList.companyData.map((item, index) => (
                            <div key={index} className='intro-hero-data-item'>
                                <div className='intro-hero-data-num'>{item.num}</div>
                                <div className='intro-hero-data-label'>{item.title}</div>
                            </div>
                        ))}
                    </div>
                    <motion.button {...initialLoadProps} className='hero-btn hero-btn-primary mt-12' onClick={() => navigate('/contact')}>
                        {introductionList.btnText}
                    </motion.button>
                </motion.div>
            </div>

            {/* Company Text Blocks */}
            <div className='intro-body'>
                <div className='intro-body-inner'>
                    <motion.h2 {...scrollInViewOnceProps} className='intro-company-name'>
                        {introductionList.companyName}
                    </motion.h2>

                    {introductionList.companyContent.map((content, index) => (
                        <motion.p key={index} {...scrollInViewOnceProps} className='intro-paragraph'>
                            {renderCompanyContent(content)}
                        </motion.p>
                    ))}

                    <motion.div {...scrollInViewOnceProps} className='intro-section'>
                        <span className='intro-section-badge'>{solutionSection.badge}</span>
                        {solutionSection.titles.map((title, index) => (
                            <h3 key={index} className='intro-section-title'>{title}</h3>
                        ))}
                        {solutionSection.contents.map((content, index) => (
                            <p key={index} className='intro-paragraph'>
                                {renderCompanyContent(content)}
                            </p>
                        ))}
                    </motion.div>

                    <motion.div {...scrollInViewOnceProps} className='intro-section'>
                        <h3 className='intro-section-title'>{recognitionSection.title}</h3>
                        <p className='intro-paragraph'>{recognitionSection.content}</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

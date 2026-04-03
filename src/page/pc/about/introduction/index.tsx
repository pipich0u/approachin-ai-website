import PageContact from '../../index/components/contact'
import './index.css'
import { useEffect, useRef, useState } from 'react'
import { trackPageView } from '@/utils/umami'
import { introductionList, cultureList } from './textConfig'

export const IntroductionPage = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        trackPageView('公司介绍页面')
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const sections = sectionRefs.current
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i]
                if (!section) continue
                const rect = section.getBoundingClientRect()
                if (rect.top <= 120) {
                    setActiveIndex(i)
                    break
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (index: number) => {
        const section = sectionRefs.current[index]
        if (section) {
            const top = section.getBoundingClientRect().top + window.scrollY - 110
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    const renderContent = (content: string | { text: string; bold?: string; text2?: string }) => {
        if (typeof content === 'string') return content
        return <>
            {content.text}
            {content.bold && <strong>{content.bold}</strong>}
            {content.text2}
        </>
    }

    const guideItems = ['公司简介', '文化理念']

    const allContent = introductionList.companyContent

    return (
        <div className='about-page'>
            {/* Banner */}
            <div className='about-banner'>
                <h1 className='about-banner-title'>公司介绍</h1>
                <span className='about-banner-sub'>P r o f i l e</span>
            </div>

            {/* 公司简介 */}
            <div className='about-section' ref={el => { sectionRefs.current[0] = el }}>
                <div className='about-section-inner'>
                    <h2 className='about-section-title'>
                        <span className='about-title-cn'>趋境科技</span>
                        <span className='about-title-en'>APPROACHING.AI</span>
                    </h2>
                    <div className='about-intro-columns'>
                        <div className='about-intro-col'>
                            {allContent.map((content, index) => (
                                <p key={index}>{renderContent(content)}</p>
                            ))}
                        </div>
                    </div>

                    {/* 使命 / 愿景 / 价值观 */}
                    <div className='about-values'>
                        <div className='about-value-card'>
                            <h3 className='about-value-title'>使命</h3>
                            <span className='about-value-en'>Mission</span>
                            <p className='about-value-desc'>算力更高效，智能更普惠</p>
                        </div>
                        <div className='about-value-card'>
                            <h3 className='about-value-title'>愿景</h3>
                            <span className='about-value-en'>Vision</span>
                            <p className='about-value-desc'>领航全球AI推理技术创新与产业升级，赋能企业AI能力高效构建</p>
                        </div>
                        <div className='about-value-card'>
                            <h3 className='about-value-title'>定位</h3>
                            <span className='about-value-en'>Positioning</span>
                            <p className='about-value-desc'>全球领先的<br/>高效能AI Token生产服务商</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact */}
            <PageContact />
        </div>
    )
}

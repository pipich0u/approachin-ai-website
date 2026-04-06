import PageContact from '../../index/components/contact'
import './index.css'
import { useEffect, useRef, useState } from 'react'
import { trackPageView } from '@/utils/umami'
import { introductionList, cultureList, infoList } from './textConfig'
import leafImg from '@/assets/images/img/leaf.png'
import DarkVeil from './DarkVeil'

const leafItems = [
    '10万级别硬件推理1000B模型技术',
    '10万级别硬件微调1000B模型技术',
    '完整复现分布式PD+EP推理技术',
    'Qwen、Kimi等模型首发支持的中国引擎',
    '发明全系统异构协同技术理念团队',
    '发明以存换算技术理念的团队',
    '发明无序KVcache优化技术的团队',
    '发明虚实同构算力规划技术的团队',
    '发明延迟推理优化技术的团队',
    '定义Token as a Service概念的公司',
]

const TimelineSection = () => {
    const trackRef = useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
    const [activeYear, setActiveYear] = useState('2024')
    const years = ['2024', '2025', '2026']
    const yearRefs = useRef<Record<string, HTMLDivElement | null>>({})

    const onMouseDown = (e: React.MouseEvent) => {
        if (!trackRef.current) return
        setIsDragging(true)
        setStartX(e.pageX - trackRef.current.offsetLeft)
        setScrollLeft(trackRef.current.scrollLeft)
    }
    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !trackRef.current) return
        e.preventDefault()
        const x = e.pageX - trackRef.current.offsetLeft
        trackRef.current.scrollLeft = scrollLeft - (x - startX)
    }
    const onMouseUp = () => setIsDragging(false)

    const scrollToYear = (year: string) => {
        setActiveYear(year)
        const el = yearRefs.current[year]
        if (el && trackRef.current) {
            trackRef.current.scrollTo({ left: el.offsetLeft - 40, behavior: 'smooth' })
        }
    }

    // 构建带年份标记的扁平列表
    let currentYear = ''
    const items = infoList.map(item => {
        const isYearStart = !!item.title
        if (item.title) currentYear = item.title
        return { ...item, year: currentYear, isYearStart }
    })

    return <>
        <div className='about-tl-tabs'>
            {years.map(y => (
                <span key={y} className={`about-tl-tab ${activeYear === y ? 'active' : ''}`} onClick={() => scrollToYear(y)}>{y}</span>
            ))}
        </div>
        <div
            className='about-tl-track'
            ref={trackRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
        >
            <div className='about-tl-rail'>
                {items.map((item, i) => (
                    <div
                        className='about-tl-item'
                        key={i}
                        ref={el => { if (item.isYearStart) yearRefs.current[item.year] = el }}
                    >
                        <div className='about-tl-year-label'>{item.isYearStart ? item.year : ''}</div>
                        <div className='about-tl-dot'></div>
                        <div className='about-tl-month'>{item.date}</div>
                        <div className='about-tl-desc'>
                            {item.desc.map((d, j) => <p key={j}>{d}</p>)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
}

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
                <DarkVeil
                    hueShift={336}
                    noiseIntensity={0}
                    scanlineIntensity={0}
                    speed={2.6}
                    scanlineFrequency={0}
                    warpAmount={0}
                />
                <div className='about-banner-overlay'>
                    <h1 className='about-banner-title'>公司介绍</h1>
                    <span className='about-banner-sub'>P r o f i l e</span>
                </div>
            </div>

            {/* 板块一：趋境科技 */}
            <div className='about-block' ref={el => { sectionRefs.current[0] = el }}>
                <div className='about-block-inner'>
                    <h2 className='about-block-title'>趋境科技</h2>
                    <div className='about-block-card'>
                        {allContent.map((content, index) => (
                            <p key={index}>{renderContent(content)}</p>
                        ))}
                    </div>
                    <div className='about-leaf-rows'>
                        {leafItems.map((item, i) => (
                            <div className='about-leaf-item' key={i}>
                                <div className='about-leaf-wrap'>
                                    <img src={leafImg} alt="" className='about-leaf-icon' />
                                    <div className='about-leaf-text'>
                                        <span className='about-leaf-big'>首个</span>
                                        <span className='about-leaf-small'>{item}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 板块二：文化价值 */}
            <div className='about-block'>
                <div className='about-block-inner'>
                    <h2 className='about-block-title'>文化价值</h2>
                    <div className='about-values'>
                        <div className='about-value-item'>
                            <div className='about-value-accent'></div>
                            <h3 className='about-value-label'>使命</h3>
                            <span className='about-value-en'>Mission</span>
                            <p className='about-value-content'>算力更高效，智能更普惠</p>
                        </div>
                        <div className='about-value-item'>
                            <div className='about-value-accent'></div>
                            <h3 className='about-value-label'>愿景</h3>
                            <span className='about-value-en'>Vision</span>
                            <p className='about-value-content'>领航全球AI推理技术创新与产业升级，赋能企业AI能力高效构建</p>
                        </div>
                        <div className='about-value-item'>
                            <div className='about-value-accent'></div>
                            <h3 className='about-value-label'>定位</h3>
                            <span className='about-value-en'>Positioning</span>
                            <p className='about-value-content'>全球领先的高效能AI Token生产服务商</p>
                        </div>
                        <div className='about-value-item'>
                            <div className='about-value-accent'></div>
                            <h3 className='about-value-label'>价值</h3>
                            <span className='about-value-en'>Value</span>
                            <p className='about-value-content'>以用户价值为导向，以技术突破为驱动，以开放生态为路径，以产业落地为目标</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 板块三：发展历程 */}
            <div className='about-block'>
                <div className='about-block-inner'>
                    <h2 className='about-block-title'>发展历程</h2>
                    <TimelineSection />
                </div>
            </div>

            {/* Contact */}
            <PageContact />
        </div>
    )
}

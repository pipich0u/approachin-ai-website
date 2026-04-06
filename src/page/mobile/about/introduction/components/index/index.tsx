import './index.css'
import { introductionList, infoList } from '@/page/pc/about/introduction/textConfig'
import leafImg from '@/assets/images/img/leaf_gold.png'
import { useState, useRef } from 'react'

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

const renderContent = (content: string | { text: string; bold?: string; text2?: string }) => {
    if (typeof content === 'string') return content
    return <>
        {content.text}
        {content.bold && <strong>{content.bold}</strong>}
        {content.text2}
    </>
}

export const MobIntroductionIndex = () => {
    const [activeYear, setActiveYear] = useState('2024')
    const trackRef = useRef<HTMLDivElement>(null)
    const yearRefs = useRef<Record<string, HTMLDivElement | null>>({})
    const years = ['2024', '2025', '2026']

    let currentYear = ''
    const timelineItems = infoList.map(item => {
        const isYearStart = !!item.title
        if (item.title) currentYear = item.title
        return { ...item, year: currentYear, isYearStart }
    })

    const scrollToYear = (year: string) => {
        setActiveYear(year)
        const el = yearRefs.current[year]
        if (el && trackRef.current) {
            trackRef.current.scrollTo({ left: el.offsetLeft - 16, behavior: 'smooth' })
        }
    }

    return (
        <div className='mob-intro-page'>
            {/* Banner */}
            <div className='mob-intro-banner'>
                <h1 className='mob-intro-banner-title'>公司介绍</h1>
                <span className='mob-intro-banner-sub'>P r o f i l e</span>
            </div>

            {/* 趋境科技 */}
            <div className='mob-intro-block'>
                <h2 className='mob-intro-block-title'>趋境科技</h2>
                <div className='mob-intro-card'>
                    {introductionList.companyContent.map((content, index) => (
                        <p key={index}>{renderContent(content)}</p>
                    ))}
                </div>
                <div className='mob-leaf-rows'>
                    {leafItems.map((item, i) => (
                        <div className='mob-leaf-item' key={i}>
                            <div className='mob-leaf-wrap'>
                                <img src={leafImg} alt="" className='mob-leaf-icon' />
                                <div className='mob-leaf-text'>
                                    <span className='mob-leaf-big'>首个</span>
                                    <span className='mob-leaf-small'>{item}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 文化价值 */}
            <div className='mob-intro-block'>
                <h2 className='mob-intro-block-title'>文化价值</h2>
                <div className='mob-intro-values'>
                    {[
                        { label: '使命', en: 'Mission', desc: '算力更高效，智能更普惠' },
                        { label: '愿景', en: 'Vision', desc: '领航全球AI推理技术创新与产业升级，赋能企业AI能力高效构建' },
                        { label: '定位', en: 'Positioning', desc: '全球领先的高效能AI Token生产服务商' },
                        { label: '价值', en: 'Value', desc: '以用户价值为导向，以技术突破为驱动，以开放生态为路径，以产业落地为目标' },
                    ].map((item, i) => (
                        <div className='mob-intro-value-card' key={i}>
                            <h3 className='mob-intro-value-title'>{item.label}</h3>
                            <span className='mob-intro-value-en'>{item.en}</span>
                            <p className='mob-intro-value-desc'>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 发展历程 */}
            <div className='mob-intro-block'>
                <h2 className='mob-intro-block-title'>发展历程</h2>
                <div className='mob-tl-tabs'>
                    {years.map(y => (
                        <span key={y} className={`mob-tl-tab ${activeYear === y ? 'active' : ''}`} onClick={() => scrollToYear(y)}>{y}</span>
                    ))}
                </div>
                <div className='mob-tl-track' ref={trackRef}>
                    <div className='mob-tl-rail'>
                        {timelineItems.map((item, i) => (
                            <div className='mob-tl-item' key={i} ref={el => { if (item.isYearStart) yearRefs.current[item.year] = el }}>
                                <div className='mob-tl-year-label'>{item.isYearStart ? item.year : ''}</div>
                                <div className='mob-tl-dot'></div>
                                <div className='mob-tl-month'>{item.date}</div>
                                <div className='mob-tl-desc'>
                                    {item.desc.map((d, j) => <p key={j}>{d}</p>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

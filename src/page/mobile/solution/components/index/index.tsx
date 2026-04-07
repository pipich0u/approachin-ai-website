import './index.css'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { initialLoadProps, scrollInViewOnceProps } from '@/utils/motionConfig'
import { solutionTextConfig } from '@/page/pc/solution/textConfig'
import { useNavigate } from 'react-router-dom'
import { trackButtonClick } from '@/utils/umami'
import { MobSolutionLogos } from '@/page/mobile/common/MobSolutionLogos'

export const MobSolutionIndex = () => {
    const navigate = useNavigate()
    const { index, tabList } = solutionTextConfig
    const [activeCase, setActiveCase] = useState<typeof tabList[0] | null>(null)

    return <>
        <div className='mob-solution-banner'>
            <div className='mob-solution-banner-inner'>
                <motion.div {...initialLoadProps} className='mob-solution-banner-title'>{index.title}</motion.div>
                <motion.p {...initialLoadProps} className='mob-solution-banner-desc'>{index.desc}</motion.p>
                <motion.button {...initialLoadProps} className='mob-solution-banner-btn' onClick={() => {
                    trackButtonClick(index.buttonText, '移动端Solution首屏');
                    navigate('/contact');
                }}>
                    {index.buttonText}
                </motion.button>
            </div>
        </div>

        <MobSolutionLogos />

        <div className='mob-solution-cases'>
            <div className='mob-solution-case-list'>
                {tabList.map((item) => (
                    <motion.div
                        {...scrollInViewOnceProps}
                        className='mob-solution-case-card'
                        key={item.id}
                        onClick={() => setActiveCase(item)}
                    >
                        <div className='mob-solution-case-title-row'>
                            <div className='mob-solution-case-title'>{item.title}</div>
                            <span className='mob-solution-case-tag'>{item.label.split('-')[0]}</span>
                        </div>
                        <div className='mob-solution-case-desc'>{item.desc}</div>
                        <div className='mob-solution-case-arrow'>查看详情 →</div>
                    </motion.div>
                ))}
            </div>
        </div>

        <AnimatePresence>
            {activeCase && (
                <motion.div
                    className='mob-solution-detail-overlay'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <motion.div
                        className='mob-solution-detail'
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <div className='mob-solution-detail-header'>
                            <div className='mob-solution-detail-close' onClick={() => setActiveCase(null)}>
                                ← 返回
                            </div>
                        </div>
                        <div className='mob-solution-detail-body'>
                            <div className='mob-solution-detail-label'>{activeCase.label}</div>
                            <h1 className='mob-solution-detail-title'>{activeCase.title}</h1>
                            <p className='mob-solution-detail-summary'>{activeCase.desc}</p>
                            <div className='mob-solution-detail-content'>
                                {activeCase.list.map((section, idx) => (
                                    <div className='mob-solution-detail-section' key={idx}>
                                        <h2 className='mob-solution-detail-section-title'>{section.title}</h2>
                                        {Array.isArray(section.desc)
                                            ? section.desc.map((p, i) => (
                                                <p className='mob-solution-detail-section-text' key={i}>{p}</p>
                                            ))
                                            : <p className='mob-solution-detail-section-text'>{section.desc}</p>
                                        }
                                        {(section as any).list && (
                                            <ul className='mob-solution-detail-section-list'>
                                                {(section as any).list.map((li: string, i: number) => (
                                                    <li key={i}>{li}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    </>
}

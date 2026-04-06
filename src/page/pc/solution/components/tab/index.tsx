import { motion } from 'motion/react'
import './index.css'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import { useEffect, useState, useRef } from 'react'
import { solutionTextConfig } from '../../textConfig'
import { IconFont } from '@/utils/antdUtils'
import { trackEvent } from '@/utils/umami'
import moreIcon from '@/assets/svg/silder-icon.svg'

export const SolutionTab = () => {
    const { tabList } = solutionTextConfig

    const [activeTab, setActiveTab] = useState(0)
    const [showHint, setShowHint] = useState(true)
    const scrollRef = useRef<HTMLDivElement | null>(null)

    const List = tabList

    useEffect(() => {
        scrollRef.current?.scrollTo(0, 0)
        setShowHint(true)
    }, [activeTab])

    useEffect(() => {
        const el = scrollRef.current
        if (!el) return

        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = el
            const isBottom = scrollTop + clientHeight >= scrollHeight - 2
            setShowHint(!isBottom)
        }

        el.addEventListener('scroll', handleScroll)
        return () => {
            el.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <div className='solution-tab-container'>
            <div className='solution-tab-content'>
                {/* Tab Nav */}
                <div className='solution-tabnav'>
                    {List.map((item, idx) => (
                        <div key={idx} className={`solution-tabnav-item ${activeTab === idx ? 'solution-item-active' : ''
                            }`}
                            onClick={() => {
                                setActiveTab(idx)

                                scrollRef.current?.scrollTo({
                                    top: 0,
                                    behavior: 'auto',
                                })

                                trackEvent('tab-switch', {
                                    tabName: item.label,
                                    tabId: idx,
                                    location: 'Solution解决方案',
                                })
                            }}
                        >
                            <span className='solution-tabnav-text'>{item.label}</span>
                        </div>
                    ))}
                </div>

                <div className='solution-tabpanel relative'>
                    <motion.div
                        key={`top-${activeTab}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.3,
                            ease: 'linear',
                        }}
                    >
                        <div className='solution-tabpanel-top'>
                            <div className='solution-tabpanel-title'>
                                {List[activeTab]?.title}
                            </div>
                            <div className='solution-tabpanel-desc'>
                                {List[activeTab]?.desc}
                            </div>
                        </div>
                    </motion.div>

                    <div className='solution-tabpanel-bottom' ref={scrollRef}>
                        {List[activeTab]?.list?.map((items, index) => (
                            <motion.div
                                key={`${activeTab}-${index}`}
                                className='solution-tabpanel-box'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.3,
                                    ease: 'linear',
                                    delay: index * 0.06,
                                }}
                            >
                                <div className='solution-tabpanel-box-title'>
                                    {items.title}
                                </div>

                                <div className='solution-tabpanel-box-desc'>
                                    {items.desc.map((descItem, descIdx) => (
                                        <p
                                            key={descIdx}
                                            className={`solution-tabpanel-box-desc-item${items.desc.length > 1 && descIdx > 0 ? ' has-bullet' : ''}`}
                                        >
                                            {descItem}
                                        </p>
                                    ))}
                                </div>

                                {items.list && (
                                    <ol className='solution-tabpanel-box-list'>
                                        {items.list.map((listItem, listIdx) => (
                                            <li key={listIdx}>{listItem}</li>
                                        ))}
                                    </ol>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

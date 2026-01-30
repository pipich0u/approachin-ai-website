import { motion } from 'motion/react'
import './index.css'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import { useEffect, useState } from 'react'
import { solutionTextConfig } from '../../textConfig'
import { IconFont } from '@/utils/antdUtils'
import { trackEvent } from '@/utils/umami'
import { useRef } from 'react'
export const SolutionTab = () => {

    const { tabList, labelList } = solutionTextConfig;
    const [openSelectIdx, setOpenSelectIdx] = useState<boolean>(false)
    const [activeTab, setActiveTab] = useState(0)
    const [title, setTitle] = useState('')
    const scrollRef = useRef<HTMLDivElement | null>(null)
    const handleSelectToggle = () => {
        setOpenSelectIdx(!openSelectIdx)
        setActiveTab(0)

    }

    const List = openSelectIdx ? labelList : tabList

    useEffect(() => {
        scrollRef.current?.scrollTo(0, 0)
    }, [activeTab])

    return <div className='solution-tab-container'>
        <div className='solution-tab-content'>
            <motion.div className='solution-tabnav' {...scrollInViewOnceProps}>
                {openSelectIdx && <div className='w-full flex items-center justify-center cursor-pointer' onClick={() => handleSelectToggle()}>
                    <IconFont type='icon-down-s' className='rotate-90 mr-2' />
                    <div>{title}</div>
                </div>}
                {
                    List.map((item, idx) => {
                        return <div className={`solution-tabnav-item ${activeTab === idx ? 'solution-item-active' : ''}`}
                            key={idx}
                            onClick={() => {
                                setActiveTab(idx)

                                scrollRef.current?.scrollTo({
                                    top: 0,
                                    behavior: 'auto',
                                })

                                trackEvent('tab-switch', {
                                    tabName: item.label,
                                    tabId: idx,
                                    location: 'Solution解决方案'
                                });

                                if (item.child) {
                                    handleSelectToggle()
                                    setTitle(item.label)
                                }
                            }}>
                            {item.label}
                            {item.child && <IconFont type='icon-up-s' className='rotate-90' />}
                        </div>
                    })
                }
            </motion.div>
            <motion.div className='solution-tabpanel' {...scrollInViewOnceProps}>
                <div className='solution-tabpanel-top'>
                    <div className='solution-tabpanel-title'>{List[activeTab]?.title}</div>
                    <div className='solution-tabpanel-desc'>
                        {List[activeTab]?.desc}
                    </div>
                </div>
                <div
                    className='solution-tabpanel-bottom'
                    data-lenis-prevent
                    ref={scrollRef}
                >
                    {
                        List[activeTab]?.list?.map((items, index) => {
                            return <div className='solution-tabpanel-box' key={index}>
                                <div className='solution-tabpanel-box-title'>{items.title}</div>
                                <div className='solution-tabpanel-box-desc'>
                                    {
                                        items.desc.map((descItem, descIdx) => (
                                            <p className='solution-tabpanel-box-desc-item' key={descIdx}>{descItem}</p>
                                        ))
                                    }
                                </div>
                                {
                                    items.list && <ol className='solution-tabpanel-box-list'>
                                        {
                                            items.list.map((listItem, listIdx) => (
                                                <li key={listIdx}>
                                                    {listItem}
                                                </li>
                                            ))
                                        }
                                    </ol>
                                }
                            </div>
                        })
                    }
                </div>
            </motion.div>
        </div>
    </div>
}
import { motion } from 'motion/react'
import { IconFont } from '@/utils/antdUtils'
import './index.css'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import { PageTabList } from '@/page/textConfig'
import { useState } from 'react'
import { solutionTextConfig } from '../../textConfig'

export const SolutionTab = () => {
    const { tab } = solutionTextConfig;
    const [activeTab, setActiveTab] = useState(0)
    return <div className='solution-tab-container'>
        <div className='solution-tab-content'>
            <motion.div className='solution-tabnav' {...scrollInViewOnceProps}>
                {
                    PageTabList.tablist.map((item, idx) => (
                        <div className={`solution-tabnav-item ${activeTab === idx ? 'solution-item-active' : ''}`} key={idx} onClick={() => setActiveTab(idx)}>
                            {item.name}
                        </div>
                    ))
                }
            </motion.div>
            <motion.div className='solution-tabpanel' {...scrollInViewOnceProps}>
                <div className='solution-tabpanel-top'>
                    <div className='solution-tabpanel-title'>{tab.caseTitle}</div>
                    <div className='solution-tabpanel-desc'>
                        {PageTabList.tablist[activeTab].desc}
                    </div>
                </div>
                <div className='solution-tabpanel-bottom'>
                    {
                        PageTabList.tablist[activeTab].info.map((items, index) => {
                            return <div className='solution-tabpanel-box' key={index}>
                                <div className='solution-tabpanel-box-title'>{items.title}</div>
                                <div className='solution-tabpanel-box-list'>
                                    {
                                        PageTabList.tablist[activeTab].info[index].content.map((contentItem, contentIdx) => {
                                            return <div className='solution-tabpanel-box-list-item'>
                                                <IconFont type={items.icon} style={{ fontSize: '20px', color: '#333' }} className="mr-1"></IconFont>
                                                <div className="solution-tabpanel-box-list-item-text">{contentItem}</div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        })
                    }
                </div>
            </motion.div>
        </div>
    </div>
}
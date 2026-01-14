import { IconFont } from '@/utils/antdUtils'
import './index.css'
import { PageTabList } from '@/page/textConfig'
import { useState } from 'react'
export const SolutionTab = () => {

    const tabs = ['低门槛启动', '高并发高吞吐', '资源精细化管理', 'ISV联合共创', '超低TTFT', 'AI开发环境一体交付']
    const [activeTab, setActiveTab] = useState(0)
    return <div className='solution-tab-container'>
        <div className='solution-tab-content'>
            <div className='solution-tabnav'>
                {
                    PageTabList.tablist.map((item, idx) => (
                        <div className={`solution-tabnav-item ${activeTab === idx ? 'solution-item-active' : ''}`} key={idx} onClick={() => setActiveTab(idx)}>
                            {item.name}
                        </div>
                    ))
                }
            </div>
            <div className='solution-tabpanel'>
                <div className='solution-tabpanel-top'>
                    <div className='solution-tabpanel-title'>某海外投资机构</div>
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
            </div>
        </div>
    </div>
}
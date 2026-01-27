import './index.css'
import { motion } from 'motion/react'
import { scrollInViewSpringOnceProps } from '@/utils/motionConfig'
import { useState } from 'react'
import img from '@/assets/images/img/scene_rig.png'
import { machineTextConfig } from '@/page/pc/product/machine/textConfig'
import { trackEvent } from '@/utils/umami'

export const MobMachineScene = () => {
    const { scene } = machineTextConfig;
    const tabItems = scene.tabItems;
    const [activeTab, setActiveTab] = useState(tabItems[0].id)
    const currentTab = tabItems.find(item => item.id === activeTab)

    const handleTabClick = (id: typeof activeTab) => {
        setActiveTab(id);
        const tab = tabItems.find(item => item.id === id);
        if (tab) {
            trackEvent('tab-switch', {
                tabName: tab.label,
                tabId: id,
                location: 'Machine应用场景'
            });
        }
    }

    return <div className='mob-scene-container'>
        <div className='mob-scene-content'>
            <motion.div {...scrollInViewSpringOnceProps} className="mob-scene-title">{scene.title}</motion.div>
            <div className="mob-scene-tab-box">
                <motion.div {...scrollInViewSpringOnceProps} className="mob-scene-tab-nav">
                    {tabItems.map((item) => (
                        <div
                            key={item.id}
                            className={`mob-scene-tab-item ${activeTab === item.id ? 'active' : ''}`}
                            onClick={() => handleTabClick(item.id)}
                        >
                            {activeTab === item.id && (
                                <motion.div
                                    className="mob-scene-tab-bg"
                                    layoutId="activeTab"
                                    transition={{
                                        type: 'spring',
                                        stiffness: 500,
                                        damping: 35,
                                    }}
                                />
                            )}
                            <span className="mob-scene-tab-label">{item.label}</span>
                        </div>
                    ))}
                </motion.div>
                <div className="mob-scene-tab-content">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="mob-scene-tab-panel"
                    >
                        <div className='mob-scene-panel-left'>
                            <div className="mob-scene-panel-title">{currentTab?.label}</div>
                            <div className="mob-scene-panel-description">{currentTab?.desc}</div>
                            <div className="mob-scene-panel-features">
                                {currentTab?.features.map((feature, index) => (
                                    <li key={index} className="mob-scene-feature-item">
                                        {feature}
                                    </li>
                                ))}
                            </div>
                        </div>
                        <div className='mob-scene-panel-rig'>
                            <img src={img} alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
}
import './index.css'
import { motion } from 'motion/react'
import { scrollInViewSpringOnceProps } from '@/utils/motionConfig'
import { useState } from 'react'
import img from '@/assets/images/img/scene_rig.png'
const tabItems = [
    {
        id: 'tab1',
        label: '企业自建AI算力场景',
        desc: '在企业自建AI算力基础设施场景，性能、成本、稳定性、弹性扩缩容等能力同时重要。',
        features: ['自研全球TOP推理引擎，顶尖团队技术兜底', '软硬生态携手深度优化，最大程度发挥算力性能', '大参数门槛最低成本起步', 'PD分离，随业务增量弹性扩容']
    },
    {
        id: 'tab2',
        label: 'ISV合作场景',
        desc: '在企业自建AI算力基础设施场景，性能、成本、稳定性、弹性扩缩容等能力同时重要。',
        features: ['自研全球TOP推理引擎，顶尖团队技术兜底', '软硬生态携手深度优化，最大程度发挥算力性能', '大参数门槛最低成本起步', 'PD分离，随业务增量弹性扩容']
    },
    {
        id: 'tab3',
        label: '研发环境极速搭建场景',
        desc: '在企业自建AI算力基础设施场景，性能、成本、稳定性、弹性扩缩容等能力同时重要。',
        features: ['自研全球TOP推理引擎，顶尖团队技术兜底', '软硬生态携手深度优化，最大程度发挥算力性能', '大参数门槛最低成本起步', 'PD分离，随业务增量弹性扩容']
    },
]

export const MachineScene = () => {
    const [activeTab, setActiveTab] = useState(tabItems[0].id)
    const currentTab = tabItems.find(item => item.id === activeTab)

    return <div className='scene-container'>
        <div className='scene-content'>
            <motion.div {...scrollInViewSpringOnceProps} className="scene-title">应用场景</motion.div>
            <div className="scene-tab-box">
                <motion.div {...scrollInViewSpringOnceProps} className="scene-tab-nav">
                    {tabItems.map((item) => (
                        <div
                            key={item.id}
                            className={`scene-tab-item ${activeTab === item.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(item.id)}
                        >
                            {activeTab === item.id && (
                                <motion.div
                                    className="scene-tab-bg"
                                    layoutId="activeTab"
                                    transition={{
                                        type: 'spring',
                                        stiffness: 500,
                                        damping: 30,
                                    }}
                                />
                            )}
                            <span className="scene-tab-label">{item.label}</span>
                        </div>
                    ))}
                </motion.div>
                <div className="scene-tab-content">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="scene-tab-panel"
                    >
                        <div className='scene-panel-left'>
                            <div className="scene-panel-title">{currentTab?.label}</div>
                            <div className="scene-panel-description">{currentTab?.desc}</div>
                            <div className="scene-panel-features">
                                {currentTab?.features.map((feature, index) => (
                                    <li key={index} className="scene-feature-item">
                                        {feature}
                                    </li>
                                ))}
                            </div>
                            <motion.button {...scrollInViewSpringOnceProps} className='scene-panel-btn'>
                                <span className="text-white font-[380] bt-text">立即体验</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className='arr-1' viewBox="0 0 24 24" >
                                    <path d="M2.00014 13.0001L2 11.0002H18.1719L14.2222 7.05044L15.6364 5.63623L22.0004 12.0002L15.6364 18.3642L14.2222 16.9499L18.172 13.0002L2.00014 13.0001Z" fill="white" />
                                </svg>
                            </motion.button>
                        </div>
                        <div className='scene-panel-rig'>
                            <img src={img} alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
}
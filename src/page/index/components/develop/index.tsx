import { useState } from 'react';
import './index.css'
import { IconFont } from '@/utils/antdUtils';

import { motion } from "motion/react"
import { scrollInViewSpringProps } from '../../../../utils/motionConfig'
export default function DevelopPage() {
    const [activeIndex, setActiveIndex] = useState(0);

    const depList = [
        {
            name: '顶尖技术团队\n筑牢核心壁垒',
            desc: '核心技术团队源自清华大学计算机系高性能计算所，十余名博士骨干，沉淀十余年高性能优化技术经验，构建起国际顶尖的技术实力。',
            icon: 'icon-dep_tap1',
        },
        {
            name: '创新方案理念\n引领行业变革',
            desc: '区别于传统以 token 为核心的算力解决方案，趋境科技首创 “业务 SLO 为导向的模型价值即服务” 核心理念。',
            icon: 'icon-dep_tab2',
        },
        {
            name: '繁荣软硬生态\n释放协同价值',
            desc: '依托 KTransformers 与 Mooncake 两大开源社区，趋境与国内外主流硬件厂商、大模型厂商及推理优化技术社区建立密切的的合作生态。',
            icon: 'icon-dep_tap3',
        },
    ]

    return (
        <div className='develop-box'>
            <div className='dep-container'>
                <motion.div className="dep-title" {...scrollInViewSpringProps}>为什么选择趋境科技</motion.div>
                <div className='dep-tabbox' onMouseLeave={() => setActiveIndex(0)} >
                    {
                        depList.map((item, index) =>
                            <motion.div
                                key={index}
                                {...scrollInViewSpringProps}
                                className={`dep-tab-items ${activeIndex === index ? 'dep-active' : ''}`}
                                onMouseEnter={() => setActiveIndex(index)}
                            >
                                <div className='dep-tab-item-icon'>
                                    <IconFont type={item.icon} />
                                </div>
                                <div className='dep-tab-item-content'>
                                    <div className="dep-tab-item-title">{item.name}</div>
                                    <div className="dep-tab-item-desc">{item.desc}</div>
                                </div>
                                {<div className={`more w-24 h-[33px] text-[14px] font-[380] ${activeIndex === index ? 'hidden!' : 'flex'}`} >了解更多</div>}
                            </motion.div>
                        )
                    }
                </div >
            </div >
        </div >
    );
}

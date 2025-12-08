import { useState } from 'react';
import './index.css'
import { IconFont } from '@/utils/antdUtils';
export default function DevelopPage() {
    const [activeIndex, setActiveIndex] = useState(0);

    const depList = [
        {
            name: '顶尖技术团队 \n筑牢核心壁垒',
            desc: '核心技术团队源自清华大学计算机系高性能计算所，十余名博士骨干，沉淀十余年高性能优化技术经验，构建起国际顶尖的技术实力。',
            icon: 'icon-dep_tap1',
        },
        {
            name: '创新方案理念\n引领行业变革',
            desc: '区别于传统以 token 为核心的算力解决方案，趋境科技首创 "业务 SLO 为导向的模型价值即服务" 核心理念。以更贴合实际业务需求的优化逻辑，为客户创造差异化价值。',
            icon: 'icon-dep_tab2',
        },
        {
            name: '繁荣软硬生态\n 释放协同价值',
            desc: '依托 KTransformers 与 Mooncake 两大开源社区，趋境与国内外主流硬件厂商、大模型厂商及推理优化技术社区建立密切的的合作生态，第一时间将行业前沿技术转化为客户可感知的技术红利。',
            icon: 'icon-dep_tap3',
        },

    ]

    return (
        <div className='develop-box'>
            <div className='dep-container'>
                <div className="dep-title">为什么选择趋境科技</div>
                <div className='dep-tabbox' onMouseLeave={() => setActiveIndex(0)}>
                    {
                        depList.map((item, index) =>
                            <div
                                key={index}
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
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
}

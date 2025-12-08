import { useEffect, useRef } from 'react';
import './index.css'
import { IconFont } from '@/utils/antdUtils';
export default function DevelopPage() {


    return (
        <div className='develop-box'>
            <div className='dep-container'>
                <div className="dep-title">为什么选择趋境科技</div>
                <div className='dep-tabbox'>
                    <div className='dep-tab-items'>
                        <div className='dep-tab-item-icon'>
                            <IconFont type='' />
                        </div>
                        <div className='dep-tab-item-content'>
                            <div className="dep-tab-item-title">顶尖技术团队 <br />筑牢核心壁垒</div>
                            <div className="dep-tab-item-desc">核心技术团队源自清华大学计算机系高性能计算所，十余名博士骨干，沉淀十余年高性能优化技术经验，构建起国际顶尖的技术实力。</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

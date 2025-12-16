
import './index.css'
import { motion } from 'motion/react';
import { initialLoadProps } from '@/utils/motionConfig';
export default function PageIndex() {

    return (
        <div className="mob-index">
            <div className="mob-title">
                <motion.div {...initialLoadProps} className='mob-title-top'>全栈智算引擎·普惠 <div className='mob-title-top-color'>高效AI</div> </motion.div>
                <motion.div {...initialLoadProps} className='mob-title-center'>为企业级用户的 AI 落地提供<br />
                    从算力破局到价值交付的全链路解决方案</motion.div>
                <motion.button {...initialLoadProps} className='mob-title-btn'>
                    <span>立即咨询</span>
                </motion.button>
                <motion.div {...initialLoadProps} className='mob-index-bottom'>
                    <div className='mob-index-bottom-item'>
                        <div className='mob-index-bottom-number'>10倍</div>
                        <div className='mob-index-bottom-text'>
                            <div>顶尖模型</div> <div>门槛降低</div>
                        </div>
                    </div>
                    <div className='mob-index-bottom-item'>
                        <div className='mob-index-bottom-number'>150%</div>
                        <div className='mob-index-bottom-text'>
                            <div>模型推理</div><div>性能提升</div>
                        </div>
                    </div>
                    <div className='mob-index-bottom-item'>
                        <div className='mob-index-bottom-number'>小时级</div>
                        <div className='mob-index-bottom-text'>
                            <div>开箱插电</div> <div>应用上线</div>
                        </div>
                    </div>
                    <div className='mob-index-bottom-item'>
                        <div className='mob-index-bottom-number'>80%</div>
                        <div className='mob-index-bottom-text'>
                            <div>算力资源</div> <div>利用力达</div>
                        </div>
                    </div>
                    <div className='mob-index-bottom-item'>
                        <div className='mob-index-bottom-number'>80%</div>
                        <div className='mob-index-bottom-text'>
                            <div>AI应用Task</div> <div>成本降低</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div >
    );
}
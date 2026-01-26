import { motion } from 'motion/react'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import './index.css'
import { useNavigate } from 'react-router-dom';
import { trackButtonClick } from '@/utils/umami';

export const KllmService = () => {
    const navigate = useNavigate();
    return <div className='kllm-service-container'>
        <div className='kllm-service-content'>
            <motion.div {...scrollInViewOnceProps} className='kllm-service-title'>多种服务模式</motion.div>
            <div className='kllm-service-content-box'>
                <motion.div {...scrollInViewOnceProps} className='kllm-service-content-item'>
                    <div className='kllm-service-content-title'>软件售卖</div>
                    <div className='kllm-service-content-desc'>独立引擎或搭配趋境科技AMaaS、MVaaS平台提供引擎能力</div>
                    <motion.button
                        {...scrollInViewOnceProps}
                        className='animated-button w-[124px] rounded-lg bg-[#806BFF] p-0! h-9!'
                        onClick={() => {
                            trackButtonClick('联系我们', 'KLLM服务模式-软件售卖');
                            navigate('/contact');
                        }}
                    >
                        <span className="text-white font-[380] bt-text">联系我们</span>
                    </motion.button>
                </motion.div>
                <motion.div {...scrollInViewOnceProps} className='kllm-service-content-item'>
                    <div className='kllm-service-content-title'>推理优化服务</div>
                    <div className='kllm-service-content-desc'>根据企业真实AI应用场景和硬件情况，提供定制推理优化服务</div>
                    <motion.button
                        {...scrollInViewOnceProps}
                        onClick={() => {
                            trackButtonClick('联系我们', 'KLLM服务模式-推理优化服务');
                            navigate('/contact');
                        }}
                        className='animated-button w-[124px] rounded-lg bg-[#806BFF] p-0! h-9!'
                    >
                        <span className="text-white font-[380] bt-text">联系我们</span>
                    </motion.button>
                </motion.div>
            </div>
        </div>
    </div>
}
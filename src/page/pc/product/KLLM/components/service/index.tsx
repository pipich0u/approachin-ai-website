import { motion } from 'motion/react'
import './index.css'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
export const KllmService = () => {
    return <div className='kllm-service-container'>
        <div className='kllm-service-content'>
            <div className='kllm-service-title'>多种服务模式</div>
            <div className='kllm-service-content-box'>
                <div className='kllm-service-content-item'>
                    <div className='kllm-service-content-title'>软件售卖</div>
                    <div className='kllm-service-content-desc'>独立引擎或搭配趋境科技AMaaS、MVaaS平台提供引擎能力</div>
                    <motion.button
                        {...scrollInViewOnceProps}
                        className='animated-button w-[124px] rounded-lg bg-[#806BFF] p-0! h-9!'
                        // onClick={() => trackButtonClick(index.buttonText, 'AMaaS第1屏', { slideIndex: 0 })}
                    >
                        <span className="text-white font-[380] bt-text">联系我们</span>
                    </motion.button>
                </div>
                <div className='kllm-service-content-item'>
                    <div className='kllm-service-content-title'>推理优化服务</div>
                    <div className='kllm-service-content-desc'>根据企业真实AI应用场景和硬件情况，提供定制推理优化服务</div>
                    <motion.button
                        {...scrollInViewOnceProps}
                        className='animated-button w-[124px] rounded-lg bg-[#806BFF] p-0! h-9!'
                        // onClick={() => trackButtonClick(index.buttonText, 'AMaaS第1屏', { slideIndex: 0 })}
                    >
                        <span className="text-white font-[380] bt-text">联系我们</span>
                    </motion.button>
                </div>
            </div>
        </div>
    </div>
}
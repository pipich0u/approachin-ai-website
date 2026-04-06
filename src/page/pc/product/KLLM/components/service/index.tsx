import { motion } from 'motion/react'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import './index.css'
import { useNavigate } from 'react-router-dom';
import { trackButtonClick } from '@/utils/umami';

const serviceList = [
    {
        title: '软件售卖',
        desc: '独立引擎或搭配趋境科技 AMaaS、ATaaS 平台提供引擎能力，灵活适配企业需求。',
        trackLabel: 'KLLM服务模式-软件售卖',
    },
    {
        title: '推理优化服务',
        desc: '根据企业真实 AI 应用场景和硬件情况，提供定制推理优化服务，最大化算力利用率。',
        trackLabel: 'KLLM服务模式-推理优化服务',
    },
]

export const KllmService = () => {
    const navigate = useNavigate();
    return <div className='kllm-svc-container'>
        <div className='kllm-svc-content'>
            <motion.div {...scrollInViewOnceProps} className='kllm-svc-title'>服务模式</motion.div>
            <motion.div {...scrollInViewOnceProps} className='kllm-svc-cards'>
                {serviceList.map((item, index) => (
                    <div className='kllm-svc-card' key={index}>
                        <h4 className='kllm-svc-card-title'>{item.title}</h4>
                        <p className='kllm-svc-card-desc'>{item.desc}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    </div>
}

import './index.css'
new Image().src = '/images/kllm_banner.webp'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'
import { overviewText } from '../../textConfig'
import { useNavigate } from 'react-router-dom'
import { trackButtonClick } from '@/utils/umami'

export const KllmIndex = () => {
    const navigate = useNavigate()
    return <div className='kllm-banner'>
        <div className='kllm-banner-inner'>
            <motion.h2 {...initialLoadProps} className='kllm-banner-name'>{overviewText.name}</motion.h2>
            <motion.h3 {...initialLoadProps} className='kllm-banner-title'>{overviewText.title}</motion.h3>
            <motion.p {...initialLoadProps} className='kllm-banner-desc'>
                基于 Mooncake 与 KTransformers 双技术底座，提供全球领先的大模型推理性能，覆盖单机到百节点集群的全场景部署。
            </motion.p>
            <motion.button {...initialLoadProps} className='hero-btn hero-btn-primary' onClick={() => {
                trackButtonClick('联系我们', 'KLLM首屏');
                navigate('/contact');
            }}>
                联系我们
            </motion.button>
        </div>
    </div>
}

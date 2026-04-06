import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'
import { overviewText } from '@/page/pc/product/KLLM/textConfig'
import { useNavigate } from 'react-router-dom'
import { trackButtonClick } from '@/utils/umami'

export const MobKllmIndex = () => {
    const navigate = useNavigate()
    return <div className='mob-kllm-banner'>
        <div className='mob-kllm-banner-inner'>
            <motion.div {...initialLoadProps} className='mob-kllm-banner-name'>{overviewText.name}</motion.div>
            <motion.div {...initialLoadProps} className='mob-kllm-banner-title'>{overviewText.title}</motion.div>
            <motion.p {...initialLoadProps} className='mob-kllm-banner-desc'>
                基于 Mooncake 与 KTransformers 双技术底座，提供全球领先的大模型推理性能，覆盖单机到百节点集群的全场景部署。
            </motion.p>
            <motion.button {...initialLoadProps} className='mob-kllm-banner-btn' onClick={() => {
                trackButtonClick('联系我们', '移动端KLLM首屏');
                navigate('/contact');
            }}>
                联系我们
            </motion.button>
        </div>
    </div>
}

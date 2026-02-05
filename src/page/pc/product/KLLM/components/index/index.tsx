import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'
import { overviewText } from '../../textConfig'

export const KllmIndex = () => {
    return <div className='kllm-index-container'>
        <div className='kllm-index-content'>
            <motion.div {...initialLoadProps} className='kllm-index-title'>{overviewText.title}</motion.div>
            <motion.div {...initialLoadProps} className='kllm-index-desc'>{overviewText.desc}</motion.div>
            <motion.div {...initialLoadProps} className='kllm-index-list'>
                大模型部署成本&nbsp;&nbsp;|&nbsp;&nbsp;万亿模型微调成本&nbsp;&nbsp;|&nbsp;&nbsp;智算资源利用率&nbsp;&nbsp;|&nbsp;&nbsp;集群吞吐
            </motion.div>
        </div>
    </div>
}
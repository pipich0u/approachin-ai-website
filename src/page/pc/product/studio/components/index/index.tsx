import { motion } from 'motion/react'
import './index.css'
import { initialLoadProps } from '@/utils/motionConfig'

export const StudioIndex = () => {

    return <div className='studio-index-container'>
        <div className='studio-index-content'>
            <div className='studio-index-title'>AI-Studio</div>
            <div className='studio-index-desc'>一站式机器学习 / 深度学习 / 大模型 AI 平台，以 K8s 为底座，覆盖数据接入、Notebook 开发、拖拽式任务流编排、分布式训练、超参搜索、大模型微调与推理、LLMOps、模型应用商店等全链路能力。</div>
            <div className='studio-index-btnbox'>
                <motion.button {...initialLoadProps}
                    className='animated-button w-[150px] rounded-lg bg-[#806BFF]'
                // onClick={() => trackButtonClick(index.buttonText, 'AMaaS第1屏', { slideIndex: 0 })}
                >
                    <span className="text-white font-[380] bt-text">立即咨询</span>
                </motion.button>
                <motion.button {...initialLoadProps}
                    className='animated-button studio-btn w-[150px] rounded-lg bg-[#333]'
                // onClick={() => trackButtonClick(index.buttonText, 'AMaaS第1屏', { slideIndex: 0 })}
                >
                    <span className="text-white font-[380] bt-text">产品文档</span>
                </motion.button>
            </div>
        </div>
    </div>
}
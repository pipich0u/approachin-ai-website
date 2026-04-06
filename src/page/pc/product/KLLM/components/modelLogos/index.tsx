import './index.css'

import zhipu from '@/assets/images/model-logos/zhipu.svg'
import deepseek from '@/assets/images/model-logos/deepseek.svg'
import kimik2 from '@/assets/images/model-logos/kimik2.svg'

import openai from '@/assets/images/model-logos/openai.svg'
import qwen from '@/assets/images/model-logos/qwen.png'
import minimax from '@/assets/images/model-logos/minimax.png'
import meta from '@/assets/images/model-logos/meta.svg'
import gemma from '@/assets/images/model-logos/gemma.svg'

const logos = [
    { name: '智谱 AI', src: zhipu },
    { name: 'OpenAI', src: openai },
    { name: 'Qwen', src: qwen },
    { name: 'deepseek', src: deepseek },
    { name: 'Llama', src: meta },
    { name: 'Gemma', src: gemma },
    { name: 'KimiK2', src: kimik2 },
    { name: 'MiniMax', src: minimax },
    { name: '智谱 AI', src: zhipu },
    { name: 'OpenAI', src: openai },
    { name: 'Qwen', src: qwen },
    { name: 'deepseek', src: deepseek },
    { name: 'Llama', src: meta },
    { name: 'Gemma', src: gemma },
    { name: 'KimiK2', src: kimik2 },
    { name: 'MiniMax', src: minimax },
]

export const KllmModelLogos = () => {
    return (
        <div className="kllm-logos-container">
            <div className="kllm-logos-track">
                {[...logos, ...logos].map((item, index) => (
                    <div className="kllm-logos-item" key={index}>
                        <img src={item.src} alt={item.name} className="kllm-logos-icon" />
                        <span className="kllm-logos-name">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
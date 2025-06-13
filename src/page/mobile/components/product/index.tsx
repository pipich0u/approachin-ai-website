import './index.css'
import line from '@/assets/images/line.png'
import productImg from '@/assets/images/productImg-mob.png'
import useAnimate from '@/common/useAnimate'
import { useRef } from 'react';
interface indexProps {
    id: string
}
const productFeatures = [
    {
        title: '自研推理引擎 KLLM，首创以存换算、全系统推理架构',
        texts: ['大模型本地部署门槛降低 10 倍；', '支持主流大模型，Qwen3 235b，QwQ 30b、DeepSeek 671B 及蒸馏模型全系列、Qwen 72b、32b 等全系列。', '支持多模态模型、Embedding&Rerank 模型、OCR 模型等，支持多模型混推']
    },
    {
        title: '软硬一体交付 开箱即用',
        texts: ['AMaaS 模型运维平台：图形化界面操作，硬件资源分配自动化，内置数十个大模型，一键启停']
    },
    {
        title: '兼容国产 生态闭环 ',
        texts: ['整合昇腾、沐曦、摩尔线程等多种国产芯片，从指令集到应用层的全栈优化']
    },
    {
        title: '覆盖推理全场景的产品矩阵',
        texts: ['从个人场景到大型团队，满足各层级私有化大模型部署需求，提供高性能推理方案。']
    },

];

export default function PageProduct({ id }: indexProps) {
    const elementRef = useRef<HTMLImageElement>(null)
    //@ts-ignore
    useAnimate({ elementRef, direction: 'right' });


    return (
        <div className="mob-product" id={id}>
            <div className='mob-center-shadow'></div>
            <div className='mob-product-box'>
                <div className='mob-product-box-left'>
                    <div className='mob-product-box-left-title'>
                        AI大模型推理软硬一体机<br />
                        企业级私有化部署新范式
                    </div>
                    <div className='mob-line-pro'> <img src={line} alt="" /> </div>
                    <div className='mob-product-box-left-content'>
                        {productFeatures.map((feature, index) => (
                            <div key={index + ''} className='mob-product-content-item'>
                                <div className='mob-product-content-item-title'>
                                    {feature.title}
                                </div>
                                {feature.texts.map((text, textIndex) => (
                                    <li key={textIndex + ''} className='mob-product-content-item-text'>
                                        {text}
                                    </li>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='mob-product-box-right'>
                    <img src={productImg} alt="" />
                </div>
            </div>
        </div>
    );
}
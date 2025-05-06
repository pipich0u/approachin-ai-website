import './index.css'
import line from '@/assets/images/line.png'
import productImg from '@/assets/images/mb-pro.png'
import useAnimate from '@/common/useAnimate'
import { RefObject, useRef } from 'react';
interface indexProps {
    id: string
}
const productFeatures = [
    {
        title: '首创以存换算全系统推理架构',
        texts: ['大模型本地部署门槛降低 10 倍', '支持主流大模型，DeepSeek 671B 及蒸馏模型全系列、Qwen 72b、32b 等全系列，最多可同时运行三个大模型，最高支持百人团队使用']
    },
    {
        title: '软硬一体交付 开箱即用',
        texts: ['液冷无噪工作站、风冷服务器多种选择', 'kLLM 平台提供简易运维，硬件资源轻松分配，0 基础启停切换大模型','智问平台提供简易办公套件，内置AI搜索、对话大模型、知识库等功能模块提供丰富的API接口，支持上层应用调用']
    },
    {
        title: '兼容国产 生态闭环 ',
        texts: ['整合昇腾、沐曦、摩尔线程等多种国产芯片，从指令集到应用层的全栈优化']
    },

];

export default function PageProduct({id}:indexProps) {
    const elementRef = useRef<HTMLImageElement>(null)
    useAnimate({ elementRef, direction: 'right' });


    return (
        <div className="mob-product" id={id}>
            <div className='mob-center-shadow'></div>
            <div className='mob-product-box'>
                <div className='mob-product-box-left'>
                    <div className='mob-product-box-left-title'>
                        大模型知识<span>推理一体机</span><br />
                        提供企业专属推理平台
                    </div>
                    <div className='mob-line-pro'> <img src={line} alt="" /> </div>
                    <div className='mob-product-box-left-content'>
                        {productFeatures.map((feature, index) => (
                            <div key={index + ''} className='mob-product-content-item'>
                                <div className='mob-product-content-item-title'>
                                    {feature.title}
                                </div>
                                {feature.texts.map((text, textIndex) => (
                                    <div key={textIndex + ''} className='mob-product-content-item-text'>
                                        {text}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='mob-product-box-right'>
                    <img src={productImg} alt="" ref={elementRef} />
                </div>
            </div>
        </div>
    );
}
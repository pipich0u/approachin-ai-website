import './index.css'
import line from '@/assets/images/line.png'
import productImg from '@/assets/images/product.png'
import useAnimate from '@/common/useAnimate'
import { Children, RefObject, useRef } from 'react';

const productFeatures = [
    {
        title: '首创以存换算全系统推理架构',
        texts: ['大模型本地部署门槛降低 10 倍', '支持主流大模型，DeepSeek 671B 及蒸馏模型全系列、Qwen 72b、32b 等全系列，最多可同时运行三个大模型，最高支持百人团队使用']
    },
    {
        title: '软硬一体交付 开箱即用',
        texts: ['液冷无噪工作站、风冷服务器多种选择', 'kLLM 平台提供简易运维，硬件资源轻松分配，0 基础启停切换大模型', '智问平台提供简易办公套件，内置AI搜索、对话大模型、知识库等功能模块提供丰富的API接口，支持上层应用调用']
    },
    {
        title: '兼容国产 生态闭环 ',
        texts: ['整合昇腾、沐曦、摩尔线程等多种国产芯片，从指令集到应用层的全栈优化']
    },

];

export default function PageProduct() {
    const elementRef = useRef<HTMLImageElement>(null)
    useAnimate({ elementRef, direction: 'right' });


    return (
        <div className="section section-2">
            <div className='product-box-container-max'>
                <div className='center-shadow'></div>
                <div className='product-box'>
                    <div className='product-box-left'>
                        <div className='product-box-left-title'>
                            AI大模型推理软硬一体机<br />
                            企业级私有化部署新范式
                        </div>
                        <div className='line-pro'> <img src={line} alt="" /> </div>
                        <div className='product-box-left-content'>
                            {productFeatures.map((feature, index) => (
                                <div key={index + ''} className='product-content-item'>
                                    <div className='product-content-item-title'>
                                        {feature.title}
                                    </div>
                                    {feature.texts.map((text, textIndex) => (
                                        <div key={textIndex + ''} className='product-content-item-text'>
                                            {text}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='product-box-right'>
                        <div className='product-box-right-img'>
                            <img src={productImg} alt="" ref={elementRef} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
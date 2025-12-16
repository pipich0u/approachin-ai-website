import './index.css'
import line from '@/assets/images/line.png'
import productImg from '@/assets/images/productImg-mob.png'
import useAnimate from '@/common/useAnimate'
import { useRef } from 'react';
import { productFeatures } from '@/page/textConfig';
import { motion } from 'motion/react';
import { scrollInViewSpringProps } from '@/utils/motionConfig';
// const productFeatures = [
//     {
//         title: '自研推理引擎 KLLM，首创以存换算、全系统推理架构',
//         texts: ['大模型本地部署门槛降低 10 倍；', '支持主流大模型，Qwen3 235b，QwQ 30b、DeepSeek 671B 及蒸馏模型全系列、Qwen 72b、32b 等全系列。', '支持多模态模型、Embedding&Rerank 模型、OCR 模型等，支持多模型混推']
//     },
//     {
//         title: '软硬一体交付 开箱即用',
//         texts: ['AMaaS 模型运维平台：图形化界面操作，硬件资源分配自动化，内置数十个大模型，一键启停']
//     },
//     {
//         title: '兼容国产 生态闭环 ',
//         texts: ['整合昇腾、沐曦、摩尔线程等多种国产芯片，从指令集到应用层的全栈优化']
//     },
//     {
//         title: '覆盖推理全场景的产品矩阵',
//         texts: ['从个人场景到大型团队，满足各层级私有化大模型部署需求，提供高性能推理方案。']
//     },

// ];

export default function PageProduct() {
    const elementRef = useRef<HTMLImageElement>(null)
    //@ts-ignore
    useAnimate({ elementRef, direction: 'right' });
    const infoIcon = (path?: string) => {
        return (
            <div className='mob-product-more'>了解更多</div>
        )
    }

    return (
        <div className="mob-product">
            <motion.div {...scrollInViewSpringProps} className='mob-product-title'>模型价值即服务的产品理念</motion.div>
            <div className='mob-product-box'>
                <motion.div {...scrollInViewSpringProps} className='mob-product-items mob-product-1'>
                    <div className='mob-product-items-content'>
                        <div className='mob-product-tags'>
                            {
                                productFeatures[0].tag.map((tag, index) => (
                                    <div key={index} className='mob-product-items-tag mob-tag1'>{tag}</div>
                                ))
                            }
                        </div>
                        <div className='mob-product-items-title'>{productFeatures[0].title}</div>
                        <div className='mob-product-items-desc'>{productFeatures[0].desc}</div>
                        <div className='mob-product-more-wrapper'>
                            {infoIcon()}
                        </div>
                    </div>
                </motion.div>
                <motion.div {...scrollInViewSpringProps} className='mob-product-items mob-product-2'>
                    <div className='mob-product-items-content'>
                        <div className='mob-product-tags'>
                            {
                                productFeatures[1].tag.map((tag, index) => (
                                    <div key={index} className='mob-product-items-tag mob-tag2'>{tag}</div>
                                ))
                            }
                        </div>
                        <div className='mob-product-items-title'>{productFeatures[1].title}</div>
                        <div className='mob-product-items-desc'>{productFeatures[1].desc}</div>
                        <div className='mob-product-more-wrapper'>
                            {infoIcon()}
                        </div>
                    </div>
                </motion.div>
                <motion.div className='mob-product-items mob-product-3'>
                    <div className='mob-product-tags'>
                        {
                            productFeatures[2].tag.map((tag, index) => (
                                <div key={index} className='mob-product-items-tag mob-tag2'>{tag}</div>
                            ))
                        }
                    </div>
                    <div className='mob-product-3-content'>
                        <div className='mob-product-items-title'>{productFeatures[2].title}</div>
                        <div className='mob-product-items-desc mob-product-desc-half'>{productFeatures[2].desc}</div>
                        <div className='mob-product-more-wrapper-small'>
                            {infoIcon()}
                        </div>
                    </div>
                </motion.div>
                <motion.div className='mob-product-items mob-product-3'>
                    <div className='mob-product-tags'>
                        {
                            productFeatures[3].tag.map((tag, index) => (
                                <div key={index} className='mob-product-items-tag mob-tag2'>{tag}</div>
                            ))
                        }
                    </div>
                    <div className='mob-product-3-content'>
                        <div className='mob-product-items-title'>{productFeatures[3].title}</div>
                        <div className='mob-product-items-desc mob-product-desc-half'>{productFeatures[3].desc}</div>
                        <div className='mob-product-more-wrapper-small'>
                            {infoIcon()}
                        </div>
                    </div>
                </motion.div>
                <motion.div {...scrollInViewSpringProps} className='mob-product-items mob-product-4'>
                    <div className='mob-product-tags-4'>
                        <div className='mob-product-items-tag mob-tag3'>KLLM</div>
                        {
                            productFeatures[4].tag.map((tag, index) => (
                                <div key={index} className='mob-product-items-tag mob-tag1'>{tag}</div>
                            ))
                        }
                    </div>
                    <div className='mob-product-4-content'>
                        <div className='mob-product-items-title'>{productFeatures[4].title}</div>
                        <div className='mob-product-items-desc mob-product-desc-60'>{productFeatures[4].desc}</div>
                        <div className='mob-product-more-wrapper'>
                            {infoIcon()}
                        </div>
                    </div>
                </motion.div>
                <motion.div {...scrollInViewSpringProps} className='mob-product-items mob-product-4'>
                    <div className='mob-product-tags-4'>
                        <div className='mob-product-items-tag mob-tag3'>KLLM</div>
                        {
                            productFeatures[5].tag.map((tag, index) => (
                                <div key={index} className='mob-product-items-tag mob-tag1'>{tag}</div>
                            ))
                        }
                    </div>
                    <div className='mob-product-4-content'>
                        <div className='mob-product-items-title'>{productFeatures[5].title}</div>
                        <div className='mob-product-items-desc mob-product-desc-60'>{productFeatures[5].desc}</div>
                        <div className='mob-product-more-wrapper'>
                            {infoIcon()}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
import './index.css'
import productImg from '@/assets/images/img/product_kllm.png'
import { motion } from 'motion/react';
import { scrollInViewSpringProps } from '../../motionConfig'

const productFeatures = [
    {
        title: 'A·Spark 便携工作站',
        desc: '内置趋境 KLLM 推理引擎，覆盖桌面级工作站、企业级一体机和大型分布式集群等型态'
    },
    {
        title: '全可视化的“AI开发平台”',
        desc: 'AI Studio：覆盖从数据处理、模型开发训练到推理部署的全链路 AI 研发流程。'
    },
    {
        title: '自主决策的“算力规划大脑”',
        desc: '将算力资源指标与业务 SLO对齐，实时感知业务变化，并动态调度算力资源'
    },
    {
        title: '开箱即用的“模型服务平台”',
        desc: '预置数十种主流模型，集成丰富的硬件、模型、推理引擎等算力资源可视化能力'
    },
    {
        title: 'KTransformers',
        desc: 'CPU+GPU降低MOE大参数模型本地部署门槛，提升硬件资源利用率'
    },
    {
        title: 'Mooncake ',
        desc: 'GPU+CPU+内存+磁盘，以 KVCache 为核心大服提升算力集群并发、吞吐（小提炼：PD 分离、以存换算）'
    },
];

export default function PageProduct() {

    const infoIcon = (path?: string) => {
        return (
            <div className='more w-20 h-5 text-[#333] text-[14px] font-[380]' >了解更多</div>
        )
    }

    return (
        <div className="product-container h-[1030px] bg-white flex flex-col items-center pt-[90px] pb-5 px-[100px]">
            <motion.div {...scrollInViewSpringProps} className='text-[#1B1D22] font-[540] text-[40px] leading-[150%] tracking-[2%] text-center'>模型价值即服务的产品理念</motion.div>
            <div className='flex items-center gap-5 mt-[60px]'>
                <motion.div {...scrollInViewSpringProps} className='product-items product-1 w-[400px] h-[500px] rounded-[20px] '>
                    <div className='mt-80 px-10'>
                        <div className='text-[#333] font-[520] text-[18px] leading-[150%]'>{productFeatures[0].title}</div>
                        <div className='text-[14px] text-[#666] font-[330] leading-[150%]'>{productFeatures[0].desc}</div>
                        <div className='mt-[53px]'>
                            {infoIcon()}
                        </div>
                    </div>
                </motion.div>
                <motion.div {...scrollInViewSpringProps} className='product-items product-2 w-[400px] h-[500px] rounded-[20px] '>
                    <div className='mt-80  px-10'>
                        <div className='text-[#333] font-[520] text-[18px] leading-[150%]'>{productFeatures[1].title}</div>
                        <div className='text-[14px] text-[#666] font-[330] leading-[150%]'>{productFeatures[1].desc}</div>
                        <div className='mt-[53px]'>
                            {infoIcon()}
                        </div>
                    </div>
                </motion.div>
                <motion.div className='flex flex-col gap-5 items-center ' {...scrollInViewSpringProps}>
                    <motion.div  className='product-items product-3 p-[30px] w-[400px] h-60 rounded-[20px] '>
                        <div className='mt-2.5'>
                            <div className='text-[#333] font-[520] text-[18px] leading-[150%]'>{productFeatures[2].title}</div>
                            <div className='text-[14px] text-[#666] font-[330] leading-[150%] w-[50%]'>{productFeatures[2].desc}</div>
                            <div className='mt-[53px]'>
                                {infoIcon()}
                            </div>
                        </div>
                    </motion.div>
                    <motion.div  className='product-items product-3 p-[30px] w-[400px] h-60 rounded-[20px] '>
                        <div className='mt-2.5'>
                            <div className='text-[#333] font-[520] text-[18px] leading-[150%]'>{productFeatures[3].title}</div>
                            <div className='text-[14px] text-[#666] font-[330] leading-[150%] w-[50%]'>{productFeatures[3].desc}</div>
                            <div className='mt-[53px]'>
                                {infoIcon()}
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
            <motion.div {...scrollInViewSpringProps} className='flex items-center mt-2.5 w-[1240px] h-[260px] p-[30px] rounded-[20px]  border border-solid border-[#F2F2F2]'>
                <div className='flex flex-col items-start justify-between w-36 h-full mr-12'>
                    <motion.img src={productImg} alt=""  {...scrollInViewSpringProps} />
                    <motion.div className='text-[#333] text-[24px] font-[520] leading-[150%]'>
                        <div>KLLM</div>
                        <div>引擎技术底座</div>
                    </motion.div>
                </div>
                <div className='flex gap-2.5'>
                    <motion.div {...scrollInViewSpringProps} className='product-items product-4 p-[30px] w-[480px] h-[200px] rounded-[20px] '>
                        <div className='ml-2.5'>
                            <div className='text-[#333] font-[520] text-[18px] leading-[150%]'>{productFeatures[4].title}</div>
                            <div className='text-[14px] text-[#666] font-[330] leading-[150%] w-[60%]'>{productFeatures[4].desc}</div>
                            <div className='mt-[43px]'>
                                {infoIcon()}
                            </div>
                        </div>
                    </motion.div>
                    <motion.div {...scrollInViewSpringProps} className='product-items product-4 p-[30px] w-[480px] h-[200px] rounded-[20px] '>
                        <div className='ml-2.5'>
                            <div className='text-[#333] font-[520] text-[18px] leading-[150%]'>{productFeatures[5].title}</div>
                            <div className='text-[14px] text-[#666] font-[330] leading-[150%] w-[60%]'>{productFeatures[5].desc}</div>
                            <div className='mt-[26px]'>
                                {infoIcon()}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

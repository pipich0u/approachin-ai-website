import './index.css'
import { motion } from 'motion/react';
import { scrollInViewSpringProps } from '@/utils/motionConfig'
import { productFeatures, productTitle } from '@/page/textConfig';
import { useEffect } from 'react';
import { trackPageView, trackProductClick } from '@/utils/umami';
import { useExposureTracking } from '@/hooks/useExposureTracking';
import { useNavigate } from 'react-router-dom';

export default function PageProduct() {
    // 曝光埋点
    const exposureRef = useExposureTracking('产品展示区域', '首页', { section: 'products' });
    const navigate = useNavigate()
    // 跟踪页面浏览
    useEffect(() => {
        trackPageView('产品页面', { section: 'products' });
    }, []);

    const navigateFunction = (link: string) => {
        if (link.startsWith('/')) {
            navigate(link)
        } else {
            window.open(link, '_blank')
        }

    }

    const infoIcon = (productName: string, productType: string, link: string) => {
        return (
            <div
                className='more w-24 h-[33px] text-[14px] font-[380] cursor-pointer'
                onClick={() => { trackProductClick(productName, productType); navigateFunction(link); }}
            >
                了解详情
            </div>
        )
    }

    return (
        <div ref={exposureRef} className="product-container h-[1030px] bg-[#FAFAFA] flex flex-col items-center pt-[90px] pb-5 px-[100px]">
            <motion.div {...scrollInViewSpringProps} className='text-[#1B1D22] font-[540] text-[38px] leading-[150%] tracking-[2%] text-center'>{productTitle}</motion.div>
            <div className='flex items-center gap-5 mt-[60px]'>
                <motion.div {...scrollInViewSpringProps} className='product-items product-1 w-[400px] h-[500px] rounded-[20px] '>
                    <div className='mt-72 px-10'>
                        <div className='flex items-center gap-1'>
                            {
                                productFeatures[0].tag.map((tag, index) => (
                                    <div key={index} className='product-items-tag tag1 text-[#6133CC]'>{tag}</div>
                                ))
                            }
                        </div>
                        <div className='text-[#333] font-[520] mt-4 text-[18px] leading-[150%]'>{productFeatures[0].title}</div>
                        <div className='text-[14px] text-[#666] font-[330] leading-[150%]'>{productFeatures[0].desc}</div>
                        <div className='mt-10'>
                            {infoIcon(productFeatures[0].title, productFeatures[0].tag.join(','), productFeatures[0].link)}
                        </div>
                    </div>
                </motion.div>
                <motion.div {...scrollInViewSpringProps} className='product-items product-2 w-[400px] h-[500px] rounded-[20px] '>
                    <div className='mt-72  px-10'>
                        <div className='flex items-center gap-1'>
                            {
                                productFeatures[1].tag.map((tag, index) => (
                                    <div key={index} className='product-items-tag tag2 text-[#334FCC]'>{tag}</div>
                                ))
                            }
                        </div>
                        <div className='text-[#333] font-[520] mt-4 text-[18px] leading-[150%]'>{productFeatures[1].title}</div>
                        <div className='text-[14px] text-[#666] font-[330] leading-[150%]'>{productFeatures[1].desc}</div>
                        <div className='mt-10'>
                            {infoIcon(productFeatures[1].title, productFeatures[1].tag.join(','), productFeatures[1].link)}
                        </div>
                    </div>
                </motion.div>
                <motion.div className='flex flex-col gap-5 items-center ' {...scrollInViewSpringProps}>
                    <motion.div className='product-items product-3 p-[30px] w-[400px] h-60 rounded-[20px] '>
                        <div className='flex items-center gap-1'>
                            {
                                productFeatures[2].tag.map((tag, index) => (
                                    <div key={index} className='product-items-tag tag2 text-[#334FCC]'>{tag}</div>
                                ))
                            }
                        </div>
                        <div className='mt-4'>
                            <div className='text-[#333] font-[520] text-[18px] leading-[150%]'>{productFeatures[2].title}</div>
                            <div className='text-[14px] text-[#666] font-[330] leading-[150%] w-[50%]'>{productFeatures[2].desc}</div>
                            {/* <div className='mt-5'>
                                {infoIcon(productFeatures[2].title, productFeatures[2].tag.join(','), productFeatures[2].link)}
                            </div> */}
                        </div>
                    </motion.div>
                    <motion.div className='product-items product-3-1 p-[30px] w-[400px] h-60 rounded-[20px] '>
                        <div className='flex items-center gap-1'>
                            {
                                productFeatures[3].tag.map((tag, index) => (
                                    <div key={index} className='product-items-tag tag2 text-[#334FCC]'>{tag}</div>
                                ))
                            }
                        </div>
                        <div className='mt-4'>
                            <div className='text-[#333] font-[520] text-[18px] leading-[150%]'>{productFeatures[3].title}</div>
                            <div className='text-[14px] text-[#666] font-[330] leading-[150%] w-[50%]'>{productFeatures[3].desc}</div>
                            <div className='mt-5'>
                                {infoIcon(productFeatures[3].title, productFeatures[3].tag.join(','), productFeatures[3].link)}
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
            <motion.div {...scrollInViewSpringProps} className='flex items-center mt-5 w-[1240px] rounded-[20px]'>
                {/* <div className='flex flex-col items-start justify-between w-36 h-full mr-12'>
                    <motion.img src={productImg} alt=""  {...scrollInViewSpringProps} />
                    <motion.div className='text-[#333] text-[24px] font-[520] leading-[150%]'>
                        <div>KLLM</div>
                        <div>引擎技术底座</div>
                    </motion.div>
                </div> */}
                <div className='flex gap-5'>
                    <motion.div {...scrollInViewSpringProps} className='product-items product-4-kt p-[30px] w-[610px] h-[260px] rounded-[20px] '>
                        <div className='flex items-center gap-1 mt-5'>
                            <div className='product-items-tag tag3 text-white ml-2'>KLLM</div>
                            {
                                productFeatures[4].tag.map((tag, index) => (
                                    <div key={index} className='product-items-tag tag1 text-[#6133CC]'>{tag}</div>
                                ))
                            }
                        </div>
                        <div className='ml-2.5 mt-[15px]'>
                            <div className='text-[#333] font-[520] text-[18px] leading-[150%]'>{productFeatures[4].title}</div>
                            <div className='text-[14px] text-[#666] font-[330] leading-[150%] w-[60%]'>{productFeatures[4].desc}</div>
                            <div className='mt-10'>
                                {infoIcon(productFeatures[4].title, 'KLLM,' + productFeatures[4].tag.join(','), productFeatures[4].link)}
                            </div>
                        </div>
                    </motion.div>
                    <motion.div {...scrollInViewSpringProps} className='product-items product-4-moon p-[30px] w-[610px] h-[260px] rounded-[20px] '>
                        <div className='flex items-center gap-1 mt-5'>
                            <div className='product-items-tag tag3 text-white ml-2'>KLLM</div>
                            {
                                productFeatures[5].tag.map((tag, index) => (
                                    <div key={index} className='product-items-tag tag1 text-[#6133CC]'>{tag}</div>
                                ))
                            }
                        </div>
                        <div className='ml-2.5 mt-[15px]'>
                            <div className='text-[#333] font-[520] text-[18px] leading-[150%]'>{productFeatures[5].title}</div>
                            <div className='text-[14px] text-[#666] font-[330] leading-[150%] w-[60%]'>{productFeatures[5].desc}</div>
                            <div className='mt-10'>
                                {infoIcon(productFeatures[5].title, 'KLLM,' + productFeatures[5].tag.join(','), productFeatures[5].link)}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

import './index.css'
import { motion } from 'motion/react';
import { scrollInViewSpringProps } from '@/utils/motionConfig'
import { productFeatures, productTitle } from '@/page/pc/index/textConfig';
import { useEffect } from 'react';
import { trackPageView, trackProductClick } from '@/utils/umami';
import { useExposureTracking } from '@/hooks/useExposureTracking';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

export default function PageProduct() {
    // 曝光埋点
    const exposureRef = useExposureTracking('产品展示区域', '首页', { section: 'products' });
    const navigate = useNavigate()
    // 跟踪页面浏览
    useEffect(() => {
        trackPageView('产品页面', { section: 'products' });
    }, []);

    const navigateFunction = (link: string) => {
        if (!link) {
            message.info('敬请期待');
            return;
        }
        if (link.startsWith('/')) {
            navigate(link)
        } else {
            window.open(link, '_blank')
        }

    }

    const infoIcon = (productName: string, productType: string, link: string) => {
        return (
            <button
                className='hero-btn hero-btn-default'
                style={{ padding: '0.5rem 1.5rem', fontSize: '0.875rem' }}
                onClick={() => { trackProductClick(productName, productType); navigateFunction(link); }}
            >
                了解详情
            </button>
        )
    }

    return (
        <div className="w-full bg-white">
            <div ref={exposureRef} className="product-container flex flex-col items-center pt-[120px] pb-0 px-[2rem] max-w-[120rem] mx-auto w-full">
            <motion.div {...scrollInViewSpringProps} className='text-[#1D2129] font-medium text-[36px] leading-[44px] text-center'>{productTitle}</motion.div>
            <div className='flex items-center gap-5 mt-[56px] w-full'>
                <motion.div {...scrollInViewSpringProps} className='product-items product-1 flex-1 min-w-0 h-[500px] rounded-[12px] '>
                    <div className='mt-72 px-10'>
                        <div className='flex items-center gap-1'>
                            {
                                productFeatures[0].tag.map((tag, index) => (
                                    <div key={index} className='product-items-tag tag1 text-[#6133CC]'>{tag}</div>
                                ))
                            }
                        </div>
                        <div className='text-[#1D2129] font-medium mt-3 text-[18px] leading-[26px]'>{productFeatures[0].title}</div>
                        <div className='text-[14px] text-[#4E5969] leading-[22px]'>{productFeatures[0].desc}</div>
                        <div className='mt-8'>
                            {infoIcon(productFeatures[0].title, productFeatures[0].tag.join(','), productFeatures[0].link)}
                        </div>
                    </div>
                </motion.div>
                <motion.div {...scrollInViewSpringProps} className='product-items product-2 flex-1 min-w-0 h-[500px] rounded-[12px] '>
                    <div className='mt-72  px-10'>
                        <div className='flex items-center gap-1'>
                            {
                                productFeatures[1].tag.map((tag, index) => (
                                    <div key={index} className='product-items-tag tag2 text-[#334FCC]'>{tag}</div>
                                ))
                            }
                        </div>
                        <div className='text-[#1D2129] font-medium mt-3 text-[18px] leading-[26px]'>{productFeatures[1].title}</div>
                        <div className='text-[14px] text-[#4E5969] leading-[22px]'>{productFeatures[1].desc}</div>
                        <div className='mt-8'>
                            {infoIcon(productFeatures[1].title, productFeatures[1].tag.join(','), productFeatures[1].link)}
                        </div>
                    </div>
                </motion.div>
                <motion.div className='flex flex-col gap-5 items-center ' {...scrollInViewSpringProps}>
                    <motion.div className='product-items product-3 p-[30px] w-full h-60 rounded-[12px] '>
                        <div className='flex items-center gap-1'>
                            {
                                productFeatures[2].tag.map((tag, index) => (
                                    <div key={index} className='product-items-tag tag2 text-[#334FCC]'>{tag}</div>
                                ))
                            }
                        </div>
                        <div className='mt-3'>
                            <div className='text-[#1D2129] font-medium text-[18px] leading-[26px]'>{productFeatures[2].title}</div>
                            <div className='text-[14px] text-[#4E5969] leading-[22px] w-[50%]'>{productFeatures[2].desc}</div>
                        </div>
                    </motion.div>
                    <motion.div className='product-items product-3-1 p-[30px] w-full h-60 rounded-[12px] '>
                        <div className='flex items-center gap-1'>
                            {
                                productFeatures[3].tag.map((tag, index) => (
                                    <div key={index} className='product-items-tag tag2 text-[#334FCC]'>{tag}</div>
                                ))
                            }
                        </div>
                        <div className='mt-3'>
                            <div className='text-[#1D2129] font-medium text-[18px] leading-[26px]'>{productFeatures[3].title}</div>
                            <div className='text-[14px] text-[#4E5969] leading-[22px] w-[50%]'>{productFeatures[3].desc}</div>
                            <div className='mt-5'>
                                {infoIcon(productFeatures[3].title, productFeatures[3].tag.join(','), productFeatures[3].link)}
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </div>
        </div>
    );
}

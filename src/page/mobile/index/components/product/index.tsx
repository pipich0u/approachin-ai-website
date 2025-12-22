import './index.css'
import useAnimate from '@/common/useAnimate'
import { useRef } from 'react';
import { productFeatures, productTitle } from '@/page/textConfig';
import { motion } from 'motion/react';
import { initialLoadProps, scrollInViewSpringOnceProps } from '@/utils/motionConfig';

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
            <motion.div {...initialLoadProps} className='mob-product-title'>{productTitle}</motion.div>
            <div className='mob-product-box'>
                <motion.div {...initialLoadProps} className='mob-product-items mob-product-1'>
                    <div className='mob-product-items-content'>
                        <div>
                            <div className='mob-product-tags'>
                                {
                                    productFeatures[0].tag.map((tag, index) => (
                                        <div key={index} className='mob-product-items-tag mob-tag1'>{tag}</div>
                                    ))
                                }
                            </div>
                            <div className='mob-product-items-title'>{productFeatures[0].title}</div>
                            <div className='mob-product-items-desc'>{productFeatures[0].desc}</div>
                        </div>
                        <div className='mob-product-more-wrapper'>
                            {infoIcon()}
                        </div>
                    </div>
                </motion.div>
                <motion.div {...scrollInViewSpringOnceProps} className='mob-product-items mob-product-2'>
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
                    <div className='mob-product-3-content'>
                        <div className='mob-product-tags'>
                            {
                                productFeatures[2].tag.map((tag, index) => (
                                    <div key={index} className='mob-product-items-tag mob-tag2'>{tag}</div>
                                ))
                            }
                        </div>
                        <div className='mob-product-items-title'>{productFeatures[2].title}</div>
                        <div className='mob-product-items-desc  mob-product-desc-60'>{productFeatures[2].desc}</div>
                        <div className='mob-product-more-wrapper-small'>
                            {infoIcon()}
                        </div>
                    </div>
                </motion.div>
                <motion.div className='mob-product-items mob-product-3'>
                    <div className='mob-product-3-content'>
                        <div>
                            <div className='mob-product-tags'>
                                {
                                    productFeatures[3].tag.map((tag, index) => (
                                        <div key={index} className='mob-product-items-tag mob-tag2'>{tag}</div>
                                    ))
                                }
                            </div>
                            <div className='mob-product-items-title'>{productFeatures[3].title}</div>
                            <div className='mob-product-items-desc  mob-product-desc-60'>{productFeatures[3].desc}</div>
                        </div>
                        <div className='mob-product-more-wrapper-small'>
                            {infoIcon()}
                        </div>
                    </div>
                </motion.div>
                <motion.div {...scrollInViewSpringOnceProps} className='mob-product-items mob-product-4'>
                    <div className='mob-product-3-content'>
                        <div>
                            <div className='mob-product-tags'>
                                <div className='mob-product-items-tag mob-tag3'>KLLM</div>
                                {
                                    productFeatures[4].tag.map((tag, index) => (
                                        <div key={index} className='mob-product-items-tag mob-tag1'>{tag}</div>
                                    ))
                                }
                            </div>
                            <div className='mob-product-items-title'>{productFeatures[4].title}</div>
                            <div className='mob-product-items-desc mob-product-desc-60'>{productFeatures[4].desc}</div>
                        </div>
                        <div className='mob-product-more-wrapper-small'>
                            {infoIcon()}
                        </div>
                    </div>
                </motion.div>
                <motion.div {...scrollInViewSpringOnceProps} className='mob-product-items mob-product-4'>
                    <div className='mob-product-3-content'>
                        <div>
                            <div className='mob-product-tags'>
                                <div className='mob-product-items-tag mob-tag3'>KLLM</div>
                                {
                                    productFeatures[5].tag.map((tag, index) => (
                                        <div key={index} className='mob-product-items-tag mob-tag1'>{tag}</div>
                                    ))
                                }
                            </div>
                            <div className='mob-product-items-title'>{productFeatures[5].title}</div>
                            <div className='mob-product-items-desc mob-product-desc-60'>{productFeatures[5].desc}</div>
                        </div>
                        <div className='mob-product-more-wrapper'>
                            {infoIcon()}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
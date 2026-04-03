import './index.css'
import { motion } from 'motion/react';
import { scrollInViewSpringProps } from '@/utils/motionConfig'
import { productFeatures } from '@/page/pc/index/textConfig';
import { useNavigate } from 'react-router-dom';
import { trackProductClick } from '@/utils/umami';

export default function PageStrips() {
    const navigate = useNavigate();

    const navigateTo = (link: string, title: string) => {
        trackProductClick(title, 'strips');
        if (link.startsWith('http')) {
            window.open(link, '_blank');
        } else {
            navigate(link);
        }
    };

    return (
        <div className="strips-section">
            <motion.div {...scrollInViewSpringProps} className="strips-title">以高效能Token为核心的产品布局</motion.div>
            <div className="strips-inner">
                {/* 第1条：大模型推理一体机 */}
                <motion.div
                    {...scrollInViewSpringProps}
                    className="strip-item strip-bg-1"
                    onClick={() => navigateTo(productFeatures[0].link, productFeatures[0].title)}
                >
                    <div className="strip-text">
                        <div className="strip-tags">
                            {productFeatures[0].tag.map((tag, i) => (
                                <span key={i} className="product-items-tag tag1 text-[#6133CC]">{tag}</span>
                            ))}
                        </div>
                        <div className="strip-title">{productFeatures[0].title}</div>
                        <div className="strip-desc">{productFeatures[0].desc}</div>
                        <div className="strip-btns">
                            <button
                                className="hero-btn hero-btn-primary strip-btn"
                                onClick={(e) => { e.stopPropagation(); navigateTo('/contact', '立即体验'); }}
                            >立即体验</button>
                            <button
                                className="hero-btn hero-btn-default strip-btn"
                                onClick={(e) => { e.stopPropagation(); navigateTo(productFeatures[0].link, productFeatures[0].title); }}
                            >了解详情</button>
                        </div>
                    </div>
                </motion.div>

                {/* 第2条：全可视化的AI开发平台 */}
                <motion.div
                    {...scrollInViewSpringProps}
                    className="strip-item strip-bg-2"
                    onClick={() => navigateTo(productFeatures[1].link, productFeatures[1].title)}
                >
                    <div className="strip-text">
                        <div className="strip-tags">
                            {productFeatures[1].tag.map((tag, i) => (
                                <span key={i} className="product-items-tag tag2 text-[#334FCC]">{tag}</span>
                            ))}
                        </div>
                        <div className="strip-title">{productFeatures[1].title}</div>
                        <div className="strip-desc">{productFeatures[1].desc}</div>
                        <div className="strip-btns">
                            <button
                                className="hero-btn hero-btn-primary strip-btn"
                                onClick={(e) => { e.stopPropagation(); navigateTo('/contact', '立即体验'); }}
                            >立即体验</button>
                            <button
                                className="hero-btn hero-btn-default strip-btn"
                                onClick={(e) => { e.stopPropagation(); navigateTo(productFeatures[1].link, productFeatures[1].title); }}
                            >了解详情</button>
                        </div>
                    </div>
                </motion.div>

                {/* 第3条：自主决策的算力规划大脑 */}
                <motion.div
                    {...scrollInViewSpringProps}
                    className="strip-item strip-bg-3"
                    onClick={() => navigateTo(productFeatures[2].link, productFeatures[2].title)}
                >
                    <div className="strip-text">
                        <div className="strip-tags">
                            {productFeatures[2].tag.map((tag, i) => (
                                <span key={i} className="product-items-tag tag2 text-[#334FCC]">{tag}</span>
                            ))}
                        </div>
                        <div className="strip-title">{productFeatures[2].title}</div>
                        <div className="strip-desc">{productFeatures[2].desc}</div>
                        <div className="strip-btns">
                            <button
                                className="hero-btn hero-btn-primary strip-btn"
                                onClick={(e) => { e.stopPropagation(); navigateTo('/contact', '立即体验'); }}
                            >立即体验</button>
                            <button
                                className="hero-btn hero-btn-default strip-btn"
                                onClick={(e) => { e.stopPropagation(); navigateTo(productFeatures[2].link, productFeatures[2].title); }}
                            >了解详情</button>
                        </div>
                    </div>
                </motion.div>

                {/* 第4条：开箱即用的模型服务平台 */}
                <motion.div
                    {...scrollInViewSpringProps}
                    className="strip-item strip-bg-4"
                    onClick={() => navigateTo(productFeatures[3].link, productFeatures[3].title)}
                >
                    <div className="strip-text">
                        <div className="strip-tags">
                            {productFeatures[3].tag.map((tag, i) => (
                                <span key={i} className="product-items-tag tag2 text-[#334FCC]">{tag}</span>
                            ))}
                        </div>
                        <div className="strip-title">{productFeatures[3].title}</div>
                        <div className="strip-desc">{productFeatures[3].desc}</div>
                        <div className="strip-btns">
                            <button
                                className="hero-btn hero-btn-primary strip-btn"
                                onClick={(e) => { e.stopPropagation(); navigateTo('/contact', '立即体验'); }}
                            >立即体验</button>
                            <button
                                className="hero-btn hero-btn-default strip-btn"
                                onClick={(e) => { e.stopPropagation(); navigateTo(productFeatures[3].link, productFeatures[3].title); }}
                            >了解详情</button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

import { motion } from 'motion/react';
import './index.css'
import SourceImg1 from '@/assets/images/img/soucre1.webp'
import SourceImg2 from '@/assets/images/img/soucre2.webp'
import { sourceList } from '@/page/pc/index/textConfig';
import { scrollInViewSpringProps } from "@/utils/motionConfig";
import { useNavigate } from 'react-router-dom';
import { trackButtonClick } from '@/utils/umami';
import { useExposureTracking } from '@/hooks/useExposureTracking';

const SourcePage = () => {
    const navigator = useNavigate();

    // 曝光埋点 - 首页开源社区区域
    const sourceExposureRef = useExposureTracking('开源社区区域', '首页', { section: 'source' });

    return <>
        <div className='source-box' ref={sourceExposureRef}>
            <div className="source-container">
                <motion.div {...scrollInViewSpringProps} className="source-title">{sourceList.title}</motion.div>
                <div className="source-content">
                    <div className='source-cont-item source-cont-left'>
                        <motion.div {...scrollInViewSpringProps} className='source-cont-item-top'>
                            <div className="sou-cont-title">{sourceList.list[0].title}</div>
                            <div className="sou-cont-desc">{sourceList.list[0].desc}</div>
                        </motion.div>
                        <div className='source-cont-left-bot'>
                            <motion.button onClick={() => {
                                trackButtonClick('开源社区-KTransformers', '首页开源社区区域', { url: sourceList.list[0].link });
                                window.open(sourceList.list[0].link, '_blank');
                            }} className='hero-btn hero-btn-default' {...scrollInViewSpringProps}>
                                {sourceList.list[0].btn}
                            </motion.button>
                            <motion.img src={SourceImg1} alt="" className='source_img1' />
                        </div>
                    </div>
                    <div className='source-cont-item source-cont-rig'>
                        <motion.div {...scrollInViewSpringProps} className='source-cont-item-top'>
                            <div className="sou-cont-title">{sourceList.list[1].title}</div>
                            <div className="sou-cont-desc">{sourceList.list[1].desc}</div>
                        </motion.div>
                        <div className='source-cont-left-bot'>
                            <motion.button onClick={() => {
                                trackButtonClick('开源社区-Mooncake', '首页开源社区区域', { href: sourceList.list[1].link });
                                navigator(sourceList.list[1].link);
                            }} {...scrollInViewSpringProps} className='hero-btn hero-btn-default'>
                                {sourceList.list[1].btn}
                            </motion.button>
                            <motion.img {...scrollInViewSpringProps} src={SourceImg2} alt="" className='source_img2' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default SourcePage;
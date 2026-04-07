import { motion } from 'motion/react';
import './index.css'
import SourceImg1 from '@/assets/images/img/soucre1.webp'
import SourceImg2 from '@/assets/images/img/soucre2.webp'
import { sourceList } from '@/page/pc/index/textConfig';
import { scrollInViewSpringOnceProps } from "@/utils/motionConfig";
import { useNavigate } from 'react-router-dom';

const SourcePage = () => {
    const navigator = useNavigate();
    return <>
        <div className='mob-source-box'>
            <div className="mob-source-container">
                <motion.div {...scrollInViewSpringOnceProps} className="mob-source-title">{sourceList.title}</motion.div>
                <div className="mob-source-content">
                    <div className='mob-source-cont-item mob-source-cont-left'>
                        <motion.div {...scrollInViewSpringOnceProps} className='mob-source-cont-item-top'>
                            <div className="mob-sou-cont-title">{sourceList.list[0].title}</div>
                            <div className="mob-sou-cont-desc">{sourceList.list[0].desc}</div>
                        </motion.div>
                        <div className='mob-source-cont-bot'>
                            <button className='mob-source-cont-btn mob-source-cont-btn1' onClick={() => window.open(sourceList.list[0].link, '_blank')}>
                                <span className="mob-source-bt-text">{sourceList.list[0].btn}</span>
                            </button>
                            <motion.img src={SourceImg1} alt="" className='mob-source_img1' />
                        </div>
                    </div>
                    <div className='mob-source-cont-item mob-source-cont-rig'>
                        <motion.div {...scrollInViewSpringOnceProps} className='mob-source-cont-item-top'>
                            <div className="mob-sou-cont-title">{sourceList.list[1].title}</div>
                            <div className="mob-sou-cont-desc">{sourceList.list[1].desc}</div>
                        </motion.div>
                        <div className='mob-source-cont-bot'>
                            <button className='mob-source-cont-btn2 mob-source-cont-btn'
                                onClick={() => navigator(sourceList.list[1].link)}>
                                <span className="mob-source-bt-text">{sourceList.list[1].btn}</span>
                            </button>
                            <img src={SourceImg2} alt="" className='mob-source_img2' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default SourcePage;
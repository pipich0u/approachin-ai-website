import { motion } from 'motion/react';
import './index.css'
import SourceImg1 from '@/assets/images/img/soucre1.png'
import SourceImg2 from '@/assets/images/img/soucre2.png'
import { sourceList } from '@/page/textConfig';
import { scrollInViewSpringProps } from "@/utils/motionConfig";

const SourcePage = () => {
    return <>
        <div className='mob-source-box'>
            <div className="mob-source-container">
                <motion.div {...scrollInViewSpringProps} className="mob-source-title">{sourceList.title}</motion.div>
                <div className="mob-source-content">
                    <div className='mob-source-cont-item mob-source-cont-left'>
                        <motion.div {...scrollInViewSpringProps} className='mob-source-cont-item-top'>
                            <div className="mob-sou-cont-title">{sourceList.list[0].title}</div>
                            <div className="mob-sou-cont-desc">{sourceList.list[0].desc}</div>
                        </motion.div>
                        <div className='mob-source-cont-bot'>
                            <motion.button className='mob-source-cont-btn border border-[#008FE1] border-solid' {...scrollInViewSpringProps}>
                                <span className="text-[#008FE1] font-[380] mob-source-bt-text">{sourceList.list[0].btn}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="mob-arr-1" viewBox="0 0 24 24" fill='#008FE1'>
                                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" ></path>
                                </svg>
                            </motion.button>
                            <motion.img src={SourceImg1} alt="" className='mob-source_img1' />
                        </div>
                    </div>
                    <div className='mob-source-cont-item mob-source-cont-rig'>
                        <motion.div {...scrollInViewSpringProps} className='mob-source-cont-item-top'>
                            <div className="mob-sou-cont-title">{sourceList.list[1].title}</div>
                            <div className="mob-sou-cont-desc">{sourceList.list[1].desc}</div>
                        </motion.div>
                        <div className='mob-source-cont-bot'>
                            <motion.button {...scrollInViewSpringProps} className='mob-source-cont-btn border border-[#6951FF] border-solid'>
                                <span className="text-[#6951FF] font-[380] mob-source-bt-text">{sourceList.list[1].btn}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="mob-arr-1" viewBox="0 0 24 24" fill='#6951FF'>
                                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" ></path>
                                </svg>
                            </motion.button>
                            <motion.img {...scrollInViewSpringProps} src={SourceImg2} alt="" className='mob-source_img2' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default SourcePage;
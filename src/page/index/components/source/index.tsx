import { motion } from 'motion/react';
import './index.css'
import SourceImg1 from '@/assets/images/img/soucre1.png'
import SourceImg2 from '@/assets/images/img/soucre2.png'
import { scrollInViewSpringProps } from "../../motionConfig";
const SourcePage = () => {
    return <>
        <div className='source-box'>
            <div className="source-container">
                <motion.div {...scrollInViewSpringProps} className="source-title">繁荣的趋境开源社区</motion.div>
                <div className="source-content">
                    <div className='source-cont-item source-cont-left'>
                        <motion.div {...scrollInViewSpringProps} className='source-cont-item-top'>
                            <div className="sou-cont-title">开发者社区</div>
                            <div className="sou-cont-desc">描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本</div>
                        </motion.div>
                        <div className='source-cont-left-bot'>
                            <motion.button className='source-cont-btn border border-[#008FE1] border-solid' {...scrollInViewSpringProps}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24" fill='#008FE1'>
                                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" ></path>
                                </svg>
                                <span className="text-[#008FE1] font-[380] bt-text">了解详情</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24" fill='#008FE1'>
                                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" ></path>
                                </svg>
                            </motion.button>
                            <motion.img {...scrollInViewSpringProps} src={SourceImg1} alt="" className='source_img1' />
                        </div>
                    </div>
                    <div className='source-cont-item source-cont-rig'>
                        <motion.div {...scrollInViewSpringProps} className='source-cont-item-top'>
                            <div className="sou-cont-title">合作伙伴</div>
                            <div className="sou-cont-desc">描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本</div>
                        </motion.div>
                        <div className='source-cont-left-bot'>
                            <motion.button {...scrollInViewSpringProps} className='source-cont-btn border border-[#6951FF] border-solid'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24" fill='#6951FF'>
                                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" ></path>
                                </svg>
                                <span className="text-[#6951FF] font-[380] bt-text">了解详情</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24" fill='#6951FF'>
                                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" ></path>
                                </svg>
                            </motion.button>
                            <motion.img {...scrollInViewSpringProps} src={SourceImg2} alt="" className='source_img2' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='models'>
            <div className='models-container'>
                <div className='models-center'>
                    <div className="models-title">
                        一键解锁 AI 管理与集成新范式！
                    </div>
                    <motion.button {...scrollInViewSpringProps} className='models-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24" fill='#fff'>
                            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" ></path>
                        </svg>
                        <span className="text-white font-[380] bt-text">前往模型仓库</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24" fill='#fff'>
                            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" ></path>
                        </svg>
                    </motion.button>
                </div>
            </div>
        </div>
    </>
}
export default SourcePage;
import './index.css'
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import icon from '@/assets/images/img/step-icon.svg'
import step1 from '@/assets/images/img/step1.png'
import step2 from '@/assets/images/img/step2.png'
import step3 from '@/assets/images/img/step3.png'
import step4 from '@/assets/images/img/step4.png'
import step5 from '@/assets/images/img/step5.png'
import { scrollInViewSpringProps } from '@/utils/motionConfig';
export default function CooperateStep() {

    return (
        <div className='step-container'>
            <div className='step-content'>
                <motion.div className='step-title' {...scrollInViewSpringProps}>共赴产业智能化的星辰大海</motion.div>
                <motion.div className='step-box' {...scrollInViewSpringProps}>
                    <div className="step-items">
                        <div className="step-icon">
                            <img src={step1} alt="" />
                        </div>
                        <div className='step-desc'>
                            <div>第一步</div>
                            <div>选择伙伴类型或合作计划</div>
                        </div>
                        <div className='step-linebox'>
                            <div className='step-line'>
                                <img src={icon} alt="" className='step-icon-line' />
                            </div>
                        </div>
                    </div>
                    <div className="step-items">
                        <div className="step-icon">
                            <img src={step2} alt="" />
                        </div>
                        <div className='step-desc'>
                            <div>第二步</div>
                            <div>填写和提交申请</div>
                        </div>
                        <div className='step-linebox'>
                            <div className='step-line'>
                                <img src={icon} alt="" className='step-icon-line' />
                            </div>
                        </div>
                    </div>
                    <div className="step-items">
                        <div className="step-icon">
                            <img src={step3} alt="" />
                        </div>
                        <div className='step-desc'>
                            <div>第三步</div>
                            <div>合作沟通与资质审核等</div>
                        </div>
                        <div className='step-linebox'>
                            <div className='step-line'>
                                <img src={icon} alt="" className='step-icon-line' />
                            </div>
                        </div>
                    </div>
                    <div className="step-items">
                        <div className="step-icon">
                            <img src={step4} alt="" />
                        </div>
                        <div className='step-desc'>
                            <div>第四步</div>
                            <div>签署协议，成为合作伙伴</div>
                        </div>
                        <div className='step-linebox'>
                            <div className='step-line'>
                                <img src={icon} alt="" className='step-icon-line' />
                            </div>
                        </div>
                    </div>
                    <div className="step-items">
                        <div className="step-icon">
                            <img src={step5} alt="" />
                        </div>
                        <div className='step-desc'>
                            <div>第五步</div>
                            <div>合作达成后，<br />
                                通过联合推广资源提升曝光，
                                助力快速增长</div>
                        </div>
                    </div>
                </motion.div>
                <motion.button className='step-btn' {...scrollInViewSpringProps}>
                    <span className="step-btn-text">加入合作</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" ></path>
                    </svg>
                </motion.button>
            </div>
        </div>
    );
} 
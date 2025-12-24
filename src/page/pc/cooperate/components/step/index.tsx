import './index.css'
import { motion } from 'motion/react';
import icon from '@/assets/images/img/step-icon.svg'
import step1 from '@/assets/images/img/step1.png'
import step2 from '@/assets/images/img/step2.png'
import step3 from '@/assets/images/img/step3.png'
import step4 from '@/assets/images/img/step4.png'
import step5 from '@/assets/images/img/step5.png'
import { scrollInViewSpringProps } from '@/utils/motionConfig';
import { stepList } from '../../textConfig';

export default function CooperateStep() {

    return (
        <div className='step-container'>
            <div className='step-content'>
                <motion.div className='step-title' {...scrollInViewSpringProps}>{stepList.title}</motion.div>
                <motion.div className='step-box' {...scrollInViewSpringProps}>
                    <div className="step-items">
                        <div className="step-icon">
                            <img src={step1} alt="" />
                        </div>
                        <div className='step-desc'>
                            <div>{stepList.steps[0].step}</div>
                            <div>{stepList.steps[0].desc}</div>
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
                            <div>{stepList.steps[1].step}</div>
                            <div>{stepList.steps[1].desc}</div>
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
                            <div>{stepList.steps[2].step}</div>
                            <div>{stepList.steps[2].desc}</div>
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
                            <div>{stepList.steps[3].step}</div>
                            <div>{stepList.steps[3].desc}</div>
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
                            <div>{stepList.steps[4].step}</div>
                            <div>{stepList.steps[4].desc}</div>
                        </div>
                    </div>
                </motion.div>
                <motion.button className='step-btn' {...scrollInViewSpringProps}>
                    <span className="step-btn-text">{stepList.btnText}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" ></path>
                    </svg>
                </motion.button>
            </div>
        </div>
    );
} 
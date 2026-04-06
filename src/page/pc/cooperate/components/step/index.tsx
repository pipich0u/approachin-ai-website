import './index.css'
import { motion } from 'motion/react';
import icon from '@/assets/svg/step-icon.svg'
import step1 from '@/assets/images/img/step1.png'
import step2 from '@/assets/images/img/step2.png'
import step3 from '@/assets/images/img/step3.png'
import step4 from '@/assets/images/img/step4.png'
import step5 from '@/assets/images/img/step5.png'
import { scrollInViewSpringProps } from '@/utils/motionConfig';
import { stepList } from '../../textConfig';
import { trackButtonClick } from '@/utils/umami';
import { useNavigate } from 'react-router-dom';

export default function CooperateStep() {
    const navigate = useNavigate()
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
                <motion.button className='hero-btn hero-btn-primary' {...scrollInViewSpringProps} onClick={() =>{trackButtonClick(stepList.btnText, 'Cooperate合作流程'); navigate('/contact');} }>
                    {stepList.btnText}
                </motion.button>
            </div>
        </div>
    );
} 
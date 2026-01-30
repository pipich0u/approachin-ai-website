
import { useNavigate } from 'react-router-dom';
import './index.css'
import { motion } from "motion/react"
import { scrollInViewSpringOnceProps } from '@/utils/motionConfig'
import circleOut1 from '@/assets/images/img/circle_out1.png'
import circleOut2 from '@/assets/images/img/circle_out2.png'
import circleOut3 from '@/assets/images/img/circle_out3.png'
import circleOut4 from '@/assets/images/img/circle_out4.png'
import circleOut5 from '@/assets/images/img/circle_out5.png'
import circleOut6 from '@/assets/images/img/circle_out6.png'
import circleOut7 from '@/assets/images/img/circle_out7.png'
import circleOut8 from '@/assets/images/img/circle_out8.png'
import circleOut9 from '@/assets/images/img/circle_out9.png'
import circleOut10 from '@/assets/images/img/circle_out10.png'
import circleOut11 from '@/assets/images/img/circle_out11.png'
import circleOut12 from '@/assets/images/img/circle_out12.png'

import circleIn1 from '@/assets/images/img/circle_in1.png'
import circleIn2 from '@/assets/images/img/circle_in2.png'
import circleIn3 from '@/assets/images/img/circle_in3.png'
import circleIn4 from '@/assets/images/img/circle_in4.png'
import circleIn5 from '@/assets/images/img/circle_in5.png'
import circleIn6 from '@/assets/images/img/circle_in6.png'
import circleIn7 from '@/assets/images/img/circle_in7.png'
import { cooperateList } from '@/page/textConfig';

export default function PageCooperate() {
    const navgitor = useNavigate()

    const outerImages = [
        circleOut1, circleOut2, circleOut3, circleOut4, circleOut5, circleOut6,
        circleOut7, circleOut8, circleOut9, circleOut10, circleOut11, circleOut12
    ]

    const innerImages = [
        circleIn1, circleIn2, circleIn3, circleIn4, circleIn5, circleIn6, circleIn7
    ]

    return (
        <div className='mob-cpa-box'>
            <div className="mob-cpa-container">
                <motion.div className='mob-cpa-title' {...scrollInViewSpringOnceProps}>
                    {cooperateList.mbTitle}
                </motion.div>
                <div className='mob-cpa-content'>
                    <div className='mob-cpa-content-circle' >
                        <div className='mob-circle-container'>
                            <div className='mob-circle-out'>
                                {outerImages.map((img, index) => (
                                    <div
                                        key={`out-${index}`}
                                        className='mob-circle-item-wrapper mob-circle-item-outer'
                                    >
                                        <img src={img} alt={`outer-${index}`} className='mob-circle-item' />
                                    </div>
                                ))}
                            </div>
                            <div className='mob-circle-in'>
                                {innerImages.map((img, index) => (
                                    <div
                                        key={`in-${index}`}
                                        className='mob-circle-item-wrapper mob-circle-item-inner mob-big'
                                    >
                                        <img src={img} alt={`inner-${index}`} className='mob-circle-item mob-big' />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='mob-cpa-content-bottom' >
                        <motion.div  {...scrollInViewSpringOnceProps} className='mob-cpa-ct-bt-desc'>
                          {cooperateList.mbDesc}
                        </motion.div>

                        <motion.button {...scrollInViewSpringOnceProps} className='mob-cpa-ct-bt-btn' onClick={()=>navgitor('/contact')}> 
                            <span className="mob-bt-text">{cooperateList.btn}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="mob-arr-1" viewBox="0 0 24 24">
                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" ></path>
                            </svg>
                        </motion.button>
                    </div>

                </div>
            </div>
        </div>
    );
}

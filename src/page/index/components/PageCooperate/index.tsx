
import { useNavigate } from 'react-router-dom';
import './index.css'
import { motion } from "motion/react"
import { scrollInViewSpringProps } from '../../../../utils/motionConfig'
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

export default function PageCooperate() {
    const navgitor = useNavigate()

    const outerImages = [
        circleOut1, circleOut2, circleOut3, circleOut4, circleOut5, circleOut6,
        circleOut7, circleOut8, circleOut9, circleOut10, circleOut11, circleOut12
    ]

    const innerImages = [
        circleIn1, circleIn2, circleIn3, circleIn4, circleIn5, circleIn6, circleIn7
    ]

    const getCirclePosition = (index: number, total: number, radius: number) => {
        const angle = (index / total) * 2 * Math.PI
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        return { x, y, angleDeg: (index / total) * 360 }
    }

    return (
        <div className='cpa-box'>
            <div className="cpa-container">
                <motion.div className='cpa-title' {...scrollInViewSpringProps}>
                    开放兼容的软硬件合作生态
                </motion.div>
                <div className='cpa-content'>
                    <div className='cpa-content-left' >
                        <motion.div  {...scrollInViewSpringProps} className='cpa-ct-left-title'>
                            标题XXXX
                        </motion.div>
                        <motion.div  {...scrollInViewSpringProps} className='cpa-ct-left-desc'>
                            正在布局云、边、端上的全领域大模型推理集群和推理加速，助力提升大模型应用在各行业中
                            的经济效益。AMD 中国与无问芯穹达成战略合作，未来双方将密切合作推动商用AI应用的性能
                            提高，并推进相关生态系统建设。
                        </motion.div>

                        <motion.button {...scrollInViewSpringProps} className='cpa-ct-left-btn w-[184px] mt-8 h-11 rounded-lg bg-[#806BFF] '>
                            <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" ></path>
                            </svg>
                            <span className="text-white font-[380] bt-text">成为合作伙伴</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" ></path>
                            </svg>
                        </motion.button>
                    </div>
                    <div className='cpa-content-rig' >
                        <div className='circle-container'>
                            <div className='circle-out'>
                                {outerImages.map((img, index) => {
                                    const pos = getCirclePosition(index, outerImages.length, 200)
                                    return (
                                        <div
                                            key={`out-${index}`}
                                            className='circle-item-wrapper circle-item-outer'
                                            style={{
                                                left: `calc(50% + ${pos.x}px)`,
                                                top: `calc(50% + ${pos.y}px)`,
                                                '--angle': `${pos.angleDeg}deg`
                                            } as React.CSSProperties}
                                        >
                                            <img src={img} alt={`outer-${index}`} className='circle-item' />
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='circle-in'>
                                {innerImages.map((img, index) => {
                                    const pos = getCirclePosition(index, innerImages.length, 119)
                                    return (
                                        <div
                                            key={`in-${index}`}
                                            className='circle-item-wrapper circle-item-inner big'
                                            style={{
                                                left: `calc(50% + ${pos.x}px)`,
                                                top: `calc(50% + ${pos.y}px)`,
                                                '--angle': `${pos.angleDeg}deg`
                                            } as React.CSSProperties}
                                        >
                                            <img src={img} alt={`inner-${index}`} className='circle-item big' />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
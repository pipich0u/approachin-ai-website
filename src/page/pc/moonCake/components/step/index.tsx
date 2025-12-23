import './index.css'
import { motion } from 'motion/react'
import { scrollInViewSpringOnceProps } from '@/utils/motionConfig'
import step1 from '@/assets/images/img/moon-step1.png'
import step2 from '@/assets/images/img/moon-step2.png'
import step3 from '@/assets/images/img/moon-step3.png'
import step4 from '@/assets/images/img/moon-step4.png'
import stepLine from '@/assets/images/img/step-line.png'

export const MoonStep = () => {
    const stepList = [
        {
            title: 'Feb 25, 2025',
            desc: '荣获 FAST 2025 Best Paper Award',
            img: step1
        },
        {
            title: 'Nov 28, 2024',
            desc: 'Transfer Engine 正式开源',
            img: step2
        },
        {
            title: 'Jul 20, 2025',
            desc: '支持Kimi K2在128×H200部署',
            img: step3
        },
        {
            title: 'Sept 10, 2025',
            desc: 'SGLang HiCache集成发布',
            img: step4
        },
    ]

    // 计算每个圆点的透明度，从100%逐渐降低到30%
    const getCircleOpacity = (index: number) => {
        const opacities = [1, 0.8, 0.6, 0.4, 0.3]
        return opacities[index] || 0.3
    }

    return <div className='moon-step-container'>
        <div className='moon-step-content'>
            {stepList.map((item, index) => (
                <motion.div
                    key={index}
                    {...scrollInViewSpringOnceProps}
                    className='moon-step-items'
                >
                    <div className='moon-step-items-left'>
                        <div className='moon-step-icon-line-wrapper'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="12" fill="#3D00CC" opacity={getCircleOpacity(index)} />
                            </svg>
                            {index < stepList.length - 1 && (
                                <img src={stepLine} alt="step line" className='moon-step-line' />
                            )}
                        </div>
                        <div className='moon-step-text-wrapper'>
                            <div className='moon-step-items-title'>
                                <div className='moon-step-items-title-text'>{item.title}</div>
                            </div>
                            <div className='moon-step-items-desc'>{item.desc}</div>
                        </div>
                    </div>
                    <div className='moon-step-items-right'>
                        <img src={item.img} alt={item.desc} />
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
}
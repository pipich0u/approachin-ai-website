import './index.css'
import { motion } from 'motion/react'
import { scrollInViewSpringOnceProps } from '@/utils/motionConfig'
import stepLine from '@/assets/images/img/step-line.png'
import { MoonStepList } from '../../textConfig'

export const MoonStep = () => {


    // 计算每个圆点的透明度，从100%逐渐降低到30%
    const getCircleOpacity = (index: number) => {
        const opacities = [1, 0.8, 0.6, 0.4, 0.3]
        return opacities[index] || 0.3
    }

    return <div className='moon-step-container'>
        <div className='moon-step-content'>
            {MoonStepList.map((item, index) => (
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
                            {index < MoonStepList.length - 1 && (
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
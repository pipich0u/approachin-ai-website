import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'

export const IntroductionIndex = () => {

    return <div className='introduction-index-container'>
        <div className='in-idx-content'>
            <div className="in-idx-content-title">
                全栈智算引擎·普惠<div>高效AI</div>
            </div>
            <div className="in-idx-content-btn">
                <motion.button {...initialLoadProps} className='animated-button '>
                    <span className="text-white font-[380] bt-text">联系我们</span>
                </motion.button>
            </div>
        </div>
        <div className='in-idx-company'>
            <div className="in-idx-company-content">

            </div>
        </div>
    </div>
}
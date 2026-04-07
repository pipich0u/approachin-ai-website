import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'

export const MobInformationIndex = () => {
    return <div className='mob-information-index-container'>
        <div className='mob-in-idx-content'>
            <motion.h1 {...initialLoadProps} className="mob-in-idx-content-title">趋境资讯</motion.h1>
            <motion.span {...initialLoadProps} className="mob-in-idx-content-sub">N e w s</motion.span>
        </div>
    </div>
}

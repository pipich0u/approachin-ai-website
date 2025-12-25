import './index.css'
import { motion } from 'motion/react'
import { scrollInViewSpringOnceProps } from '@/utils/motionConfig'
import { MachinList } from '../../textConfig'
export const MachineIndex = () => {
    return <div className='machin-index-container'>
        <div className='mc-in-content'>
            <div className="mc-in-top-box">
                <div className="mc-in-title"></div>
                <div className="mc-in-desc"></div>
                <div className="mc-in-btn"></div>
            </div>
            <div className="mc-in-bottom-box"></div>
        </div>
    </div>
}
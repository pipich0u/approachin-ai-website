
import { IconFont } from '@/utils/antdUtils'
import './index.css'
import { motion } from 'motion/react'
import { scrollInViewSpringOnceProps } from '@/utils/motionConfig'

export const MoonInfluence = () => {
    return <div className="moon-influence-container">
        <motion.div {...scrollInViewSpringOnceProps} className='mo-in-title'>
            Mooncake 技术影响力 
        </motion.div >
    </div>
}
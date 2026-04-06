import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'
import { InformationBannerList } from '../../textConfig'
export const InformationIndex = () => {
    return <div className='information-index-container'>
        <div className='in-idx-content'>
            <motion.div {...initialLoadProps} className="in-idx-content-title">
                {InformationBannerList.title}
            </motion.div>
            <motion.div {...initialLoadProps} className="in-idx-content-subtitle">
                NEWS & UPDATES
            </motion.div>
        </div>
    </div>
}

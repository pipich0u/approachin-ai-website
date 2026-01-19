import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'
import { introductionList } from '../../textConfig'
export const InformationIndex = () => {
    return <div className='information-index-container'>
        <div className='in-idx-content'>
            <motion.div {...initialLoadProps} className="in-idx-content-title">
                企业资讯
            </motion.div>
            <motion.button {...initialLoadProps} className='in-idx-content-btn  animated-button'>
                <span className="text-white font-[380] bt-text">联系我们</span>
            </motion.button>
        </div>
    </div>
}
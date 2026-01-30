import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'
import { useNavigate } from 'react-router-dom'
import { trackButtonClick } from '@/utils/umami'

export const MobInformationIndex = () => {
    const navigate = useNavigate();
    return <div className='mob-information-index-container'>
        <div className='mob-in-idx-content'>
            <motion.div {...initialLoadProps} className="mob-in-idx-content-title">
                企业资讯
            </motion.div>
            <motion.button {...initialLoadProps} className='animated-button mob-in-idx-content-btn  ' onClick={() => {
                trackButtonClick('联系我们', 'Information首屏');
                navigate('/contact');
            }}>
                联系我们
            </motion.button>
        </div>
    </div>
}
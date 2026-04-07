import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'
import { useNavigate } from 'react-router-dom'
import { trackButtonClick } from '@/utils/umami'
import { InformationBannerList } from '@/page/pc/Information/textConfig'

export const MobInformationIndex = () => {
    const navigate = useNavigate();
    return <div className='mob-information-index-container'>
        <div className='mob-in-idx-content'>
            <motion.div {...initialLoadProps} className="mob-in-idx-content-title">
                {InformationBannerList.title}
            </motion.div>
        </div>
    </div>
}
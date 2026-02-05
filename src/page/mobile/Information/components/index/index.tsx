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
            <motion.button {...initialLoadProps} className='animated-button mob-in-idx-content-btn  ' onClick={() => {
                trackButtonClick(InformationBannerList.btn, 'Information首屏');
                navigate('/contact');
            }}>
                {InformationBannerList.btn}
            </motion.button>
        </div>
    </div>
}
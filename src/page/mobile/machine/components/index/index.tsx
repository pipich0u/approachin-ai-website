import '@/page/mobile/common/mob-banner.css'
import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'
import { MachinList } from '@/page/pc/product/machine/textConfig'
import { useNavigate } from 'react-router-dom'
import { trackButtonClick } from '@/utils/umami'

export const MobMachineIndex = () => {
    const navigate = useNavigate();
    return <>
        <div className='mob-banner mob-machine-bg'>
            <div className='mob-banner-content'>
                <div className='mob-banner-left'>
                    <motion.div {...initialLoadProps} className='mob-banner-name'>{MachinList.title}</motion.div>
                    <motion.div {...initialLoadProps} className='mob-banner-title'>{MachinList.title2}</motion.div>
                    <motion.p {...initialLoadProps} className='mob-banner-desc'>{MachinList.desc}</motion.p>
                    <motion.button {...initialLoadProps} className='mob-banner-btn' onClick={() => {
                        trackButtonClick(MachinList.btn, '移动端Machine首屏');
                        navigate('/contact');
                    }}>
                        {MachinList.btn}
                    </motion.button>
                </div>
            </div>
        </div>
        <div className="mob-mc-in-bottom-box">
            {MachinList.bottomList.map((item, index) => {
                return <motion.div {...initialLoadProps} className="mob-mc-in-item" key={index}>
                    <div className="mob-mc-in-item-title">{item.title}<div className='mob-mc-in-item-title-color'>{item.color}</div></div>
                </motion.div>
            })}
        </div>
    </>
}

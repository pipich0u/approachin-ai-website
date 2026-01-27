import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'
import { MachinList } from '@/page/pc/product/machine/textConfig'
import { useNavigate } from 'react-router-dom'
import { trackButtonClick } from '@/utils/umami'

export const MobMachineIndex = () => {
    const navigate = useNavigate();
    return <>
        <div className='mob-machin-index-container'>
            <div className='mob-mc-in-content'>
                <div className="mob-mc-in-top-box">
                    <motion.div {...initialLoadProps} className="mob-mc-in-title">{MachinList.title}</motion.div>
                    <motion.div {...initialLoadProps} className="mob-mc-in-desc">{MachinList.desc}</motion.div>
                    <motion.button {...initialLoadProps} className='mob-mc-in-btn' onClick={() => {
                        trackButtonClick(MachinList.btn, '移动端Machine首屏');
                        navigate('/contact');
                    }}>
                        <span className="mob-mc-bt-text">{MachinList.btn}</span>
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
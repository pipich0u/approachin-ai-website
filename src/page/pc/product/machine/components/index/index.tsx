import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'
import { MachinList } from '../../textConfig'
import { useNavigate } from 'react-router-dom'
import { trackButtonClick } from '@/utils/umami'

export const MachineIndex = () => {
    const navigate = useNavigate();
    return <>
        <div className='machin-index-container'>
            <div className='mc-in-content'>
                <div className="mc-in-top-box">
                    <motion.div {...initialLoadProps} className="mc-in-title">{MachinList.title}</motion.div>
                    <motion.div {...initialLoadProps} className="mc-in-desc">{MachinList.desc}</motion.div>
                    <motion.button {...initialLoadProps} className='mc-in-btn' onClick={() => {
                        trackButtonClick(MachinList.btn, 'Machine首屏');
                        navigate('/contact');
                    }}>
                        <span className="mc-bt-text">{MachinList.btn}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" ></path>
                        </svg>
                    </motion.button>
                </div>
            </div>
        </div>
        <div className="mc-in-bottom-box">
            {MachinList.bottomList.map((item, index) => {
                return <motion.div {...initialLoadProps} className="mc-in-item" key={index}>
                    <div className="mc-in-item-title">{item.title}<div className='mc-in-item-title-color'>{item.color}</div></div>
                    <div className="mc-in-item-desc">{item.desc}</div>
                </motion.div>
            })}
        </div>
    </>
}
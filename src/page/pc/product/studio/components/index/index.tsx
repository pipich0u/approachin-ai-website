import './index.css'
import { studioTextConfig } from '../../textConfig'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'

export const StudioIndex = () => {

    return <div className='studio-index-container'>
        <div className='studio-index-content'>
            <motion.div {...initialLoadProps} className='studio-index-title'>{studioTextConfig.index.title}</motion.div>
            <motion.div {...initialLoadProps} className='studio-index-desc'>{studioTextConfig.index.desc}</motion.div>
            <div className='studio-index-btnbox'>
                {/* <motion.button {...initialLoadProps}
                    className='animated-button w-[150px] rounded-lg bg-[#806BFF]'
                // onClick={() => trackButtonClick(index.buttonText, 'AMaaS第1屏', { slideIndex: 0 })}
                >
                    <span className="text-white font-[380] bt-text">{studioTextConfig.index.buttons[0].text}</span>
                </motion.button> */}
                {/* <motion.button {...initialLoadProps}
                    className='animated-button studio-btn w-[150px] rounded-lg bg-[#333]'
                // onClick={() => trackButtonClick(index.buttonText, 'AMaaS第1屏', { slideIndex: 0 })}
                >
                    <span className="text-white font-[380] bt-text">{studioTextConfig.index.buttons[1].text}</span>
                </motion.button> */}
            </div>
        </div>
    </div>
}
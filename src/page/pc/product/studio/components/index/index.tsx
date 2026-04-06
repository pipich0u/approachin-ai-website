import './index.css'
new Image().src = '/images/studio_banner_new.webp'
import { studioTextConfig } from '../../textConfig'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'

export const StudioIndex = () => {

    return <div className='st-banner'>
        <div className='st-banner-inner'>
            <motion.h2 {...initialLoadProps} className='st-banner-name'>{studioTextConfig.index.name}</motion.h2>
            <motion.h3 {...initialLoadProps} className='st-banner-title'>{studioTextConfig.index.title}</motion.h3>
            <motion.p {...initialLoadProps} className='st-banner-desc'>{studioTextConfig.index.desc}</motion.p>
            <div className='st-banner-btnbox'>
                {/* <motion.button {...initialLoadProps}
                    className='animated-button w-[150px] rounded-lg bg-gradient-to-r from-[#7B2FFF] via-[#5550FF] to-[#3D6DFC]'
                >
                    <span className="text-white font-[380] bt-text">{studioTextConfig.index.buttons[0].text}</span>
                </motion.button> */}
            </div>
        </div>
    </div>
}
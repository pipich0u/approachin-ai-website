import { motion } from 'motion/react'
import './index.css'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import imgtop from '@/assets/images/img/mvaas_cahtbot1.png'
import imgbottom from '@/assets/images/img/mvaas_cahtbot2.webp'
import { mvaasTextConfig } from '../../textConfig'

export const MVaaSChatBot = () => {
    const { chatBot } = mvaasTextConfig;

    return <div className='mvaas-chatbot-container'>
        <div className='mvaas-chatbot-content'>
            <motion.div className='mvaas-chatbot-box' {...scrollInViewOnceProps}>
                <div className='mvaas-chatbot-topnav'>
                    <div className='mvaas-chatbot-title'>{chatBot.topSection.title}</div>
                    <div className='mvaas-chatbot-desc'>{chatBot.topSection.desc}</div>
                </div>
                <img src={imgtop} alt="" className='mvaas-chatbot-topnav-topimg selectNone' />
            </motion.div>
            <motion.div className='mvaas-chatbot-box mt-4' {...scrollInViewOnceProps}>
                <img src={imgbottom} alt="" className='mvaas-chatbot-bottom-img selectNone' />
                <div className='mvaas-chatbot-bottom'>
                    <div className='mvaas-chatbot-title'>{chatBot.bottomSection.title}</div>
                    <div className='mvaas-chatbot-desc mvaas-bottom-desc'>
                        {chatBot.bottomSection.desc.split('\n').map((line, idx) => (
                            <span key={idx}>
                                {line}
                                {idx < chatBot.bottomSection.desc.split('\n').length - 1 && <br />}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
}
import { motion } from 'motion/react'
import './index.css'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import imgtop from '@/assets/images/img/mvaas_cahtbot1.png'
import imgbottom from '@/assets/images/img/mvaas_cahtbot2.png'

export const MVaaSChatBot = () => {

    return <div className='mvaas-chatbot-container'>
        <div className='mvaas-chatbot-content'>
            <motion.div className='mvaas-chatbot-box' {...scrollInViewOnceProps}>
                <div className='mvaas-chatbot-topnav'>
                    <div className='mvaas-chatbot-title'>以CahtBot为主的AI应用</div>
                    <div className='mvaas-chatbot-desc'>SLO需求单一且稳定，将GPU堆至某一水平线即可满足需求</div>
                </div>
                <img src={imgtop} alt="" className='mvaas-chatbot-topnav-topimg selectNone' />
            </motion.div>
            <motion.div className='mvaas-chatbot-box mt-4' {...scrollInViewOnceProps}>
                <img src={imgbottom} alt="" className='mvaas-chatbot-bottom-img selectNone' />
                <div className='mvaas-chatbot-bottom'>
                    <div className='mvaas-chatbot-title'>多智能体协作的真实AI业务</div>
                    <div className='mvaas-chatbot-desc mvaas-bottom-desc'>
                        多Agent有多样的SLO需求，<br />算力方案需硬件、模型、推理优化技术的精细化组合
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
}
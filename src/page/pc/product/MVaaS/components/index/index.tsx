import { motion } from 'motion/react'
import './index.css'
import mvaas from '@/assets/images/img/mvaas_index.png'
import { initialLoadProps } from '@/utils/motionConfig'

export const MVaaSIndex = () => {

    return <div className='mvaas-index-container'>
        <div className='mvaas-index-content'>
            <div className='mvaas-index-left'>
                <motion.div {...initialLoadProps} className='mvaas-index-title'>MVaaS</motion.div>
                <motion.div {...initialLoadProps} className='mvaas-index-nav'>模型价值即服务平台</motion.div>
                <motion.div {...initialLoadProps} className='mvaas-index-desc'>
                    <div className='mvaas-index-desc-items'>业务SLO对齐</div>
                    <div className='mvaas-index-desc-items'>|</div>
                    <div className='mvaas-index-desc-items'>AI性能保障</div>
                    <div className='mvaas-index-desc-items'>|</div>
                    <div className='mvaas-index-desc-items'>算力极致ROI</div>
                    <div className='mvaas-index-desc-items'>|</div>
                    <div className='mvaas-index-desc-items'>模型实例自动扩缩容</div>
                </motion.div>
                <motion.button {...initialLoadProps}
                    className='animated-button w-[150px] rounded-lg mvaas-index-btn'
                // onClick={() => trackButtonClick(index.buttonText, 'AMaaS第1屏', { slideIndex: 0 })}
                >
                    <span className="text-white font-[380] bt-text">立即下载</span>
                </motion.button>
            </div>
            <motion.div {...initialLoadProps} className='mvaas-index-right'>
                <img src={mvaas} alt="" className='selectNone' />
            </motion.div>
        </div>
    </div>
}
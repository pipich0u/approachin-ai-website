import { motion } from 'motion/react'
import './index.css'
import mvaas from '@/assets/images/img/mvaas_index.webp'
import { initialLoadProps } from '@/utils/motionConfig'
import { mvaasTextConfig } from '../../textConfig'
import { trackButtonClick } from '@/utils/umami'

export const MVaaSIndex = () => {
    const { index } = mvaasTextConfig;

    return <div className='mvaas-index-container'>
        <div className='mvaas-index-content'>
            <div className='mvaas-index-left'>
                <motion.div {...initialLoadProps} className='mvaas-index-title'>{index.title}</motion.div>
                <motion.div {...initialLoadProps} className='mvaas-index-nav'>{index.subtitle}</motion.div>
                <motion.div {...initialLoadProps} className='mvaas-index-desc'>
                    {index.features.map((feature, idx) => (
                        <div key={idx} style={{ display: 'contents' }}>
                            <div className='mvaas-index-desc-items'>{feature}</div>
                            {idx < index.features.length - 1 && <div className='mvaas-index-desc-items'>|</div>}
                        </div>
                    ))}
                </motion.div>
                <motion.button {...initialLoadProps}
                    className='animated-button w-[150px] rounded-lg mvaas-index-btn'
                    onClick={() => trackButtonClick(index.buttonText, 'MVaaS首屏')}
                >
                    <span className="text-white font-[380] bt-text">{index.buttonText}</span>
                </motion.button>
            </div>
            <motion.div {...initialLoadProps} className='mvaas-index-right'>
                <img src={mvaas} alt="" className='selectNone' />
            </motion.div>
        </div>
    </div>
}
import { motion } from 'motion/react'
import './index.css'
import { initialLoadProps } from '@/utils/motionConfig'
import { trackButtonClick } from '@/utils/umami';
import { amaasTextConfig } from '../../textConfig';
import { useNavigate } from 'react-router-dom';
export const MobAMaaSIndex = () => {
    const { index } = amaasTextConfig;
    const navigate = useNavigate()
    return <div className='mob-amaas-index-container'>
        <div className='mob-amaas-index-content'>
            <motion.div className='mob-amaas-index-title' {...initialLoadProps}>
                {index.title} {index.subtitle}
            </motion.div>
            <motion.div className='mob-amaas-index-desc'  {...initialLoadProps}>
                {index.features.map((feature, idx) => (
                    <div key={idx} style={{ display: 'contents' }}>
                        <div className='mob-amaas-index-desc-text'>{feature}</div>
                        {idx < index.features.length - 1 && <div className="mob-amaas-index-desc-line">|</div>}
                    </div>
                ))}
            </motion.div>
        </div>
            <div className='mob-amaas-index-box'>
                <motion.button
                    {...initialLoadProps}
                    className='animated-button mob-amaas-index-box-btn rounded-lg bg-[#806BFF] '
                    onClick={() => { trackButtonClick(index.buttonText, 'AMaaS第1屏', { slideIndex: 0 }); navigate('/contact') }}
                >
                    <span className="text-white font-[380] bt-text">{index.buttonText}</span>
                </motion.button>

            </div>
    </div>
}
import './index.css'
new Image().src = '/images/machine_banner.webp'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'
import { MachinList } from '../../textConfig'
import { useNavigate } from 'react-router-dom'
import { trackButtonClick } from '@/utils/umami'
import { KllmModelLogos } from '../../../KLLM/components/modelLogos'

export const MachineIndex = () => {
    const navigate = useNavigate();
    return <>
        <div className='mc-banner'>
            <div className='mc-banner-inner'>
                <motion.h2 {...initialLoadProps} className='mc-banner-name'>{MachinList.title}</motion.h2>
                <motion.h3 {...initialLoadProps} className='mc-banner-title'>{MachinList.title2}</motion.h3>
                <motion.p {...initialLoadProps} className='mc-banner-desc'>{MachinList.desc}</motion.p>
                <motion.button {...initialLoadProps} className='hero-btn hero-btn-primary' onClick={() => {
                    trackButtonClick(MachinList.btn, 'Machine首屏');
                    navigate('/contact');
                }}>
                    {MachinList.btn}
                </motion.button>
            </div>
        </div>
        <KllmModelLogos />
    </>
}

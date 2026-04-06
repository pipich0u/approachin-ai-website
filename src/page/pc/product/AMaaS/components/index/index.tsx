import { motion } from 'motion/react'
import './index.css'
new Image().src = '/images/amaas_banner.webp'
import { initialLoadProps } from '@/utils/motionConfig'
import { trackButtonClick } from '@/utils/umami';
import { amaasTextConfig } from '../../textConfig';
import { useNavigate } from 'react-router-dom';

export const AMaaSIndex = () => {
    const { index } = amaasTextConfig;
    const navigate = useNavigate()
    return <div className='amaas-banner'>
        <div className='amaas-banner-inner'>
            <motion.h2 {...initialLoadProps} className='amaas-banner-name'>{index.title}</motion.h2>
            <motion.h3 {...initialLoadProps} className='amaas-banner-title'>{index.subtitle}</motion.h3>
            <motion.p {...initialLoadProps} className='amaas-banner-desc'>
                {index.features.join('  |  ')}
            </motion.p>
            <motion.button
                {...initialLoadProps}
                className='hero-btn hero-btn-primary'
                onClick={() => { trackButtonClick(index.buttonText, 'AMaaS第1屏'); navigate('/contact') }}
            >
                {index.buttonText}
            </motion.button>
        </div>
    </div>
}

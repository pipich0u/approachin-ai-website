import './index.css'
import { motion } from 'motion/react';
import { initialLoadProps } from '@/utils/motionConfig'

import { bannerText } from '../../textConfig'
import { useNavigate } from 'react-router-dom';
import { trackButtonClick } from '@/utils/umami';

export default function CooperateBanner() {
    const navigate = useNavigate();
    return <>
        <div className='cp-banner'>
            <div className='cp-banner-inner'>
                <motion.h2 {...initialLoadProps} className='cp-banner-name'>{bannerText.title}</motion.h2>
                <motion.h3 {...initialLoadProps} className='cp-banner-title'>{bannerText.title2}</motion.h3>
                <motion.p {...initialLoadProps} className='cp-banner-desc'>{bannerText.desc}</motion.p>
                <motion.button {...initialLoadProps} className='hero-btn hero-btn-primary' onClick={() => {
                    trackButtonClick(bannerText.btnText, 'Cooperate首屏');
                    navigate('/contact');
                }}>
                    {bannerText.btnText}
                </motion.button>
            </div>
        </div>
    </>
}
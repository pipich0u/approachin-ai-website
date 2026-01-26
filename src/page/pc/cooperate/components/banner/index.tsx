import './index.css'
import { motion } from 'motion/react';
import { initialLoadProps } from '@/utils/motionConfig'
// import banner from '@/assets/images/img/banner_bg.png'

import { bannerText } from '../../textConfig'
import { useNavigate } from 'react-router-dom';
import { trackButtonClick } from '@/utils/umami';

export default function CooperateBanner() {
    const navigate = useNavigate();
    return <>
        <div className='banner-container'>
            <div className='banner-box'>
                <motion.div {...initialLoadProps} className='banner-left-content'>
                    <div className='banner-title'>{bannerText.title}</div>
                    <div className='banner-desc'>{bannerText.desc}</div>
                    <button className='banner-btn' onClick={() => {
                        trackButtonClick(bannerText.btnText, 'Cooperate首屏');
                        navigate('/contact');
                    }}>
                        <span className="text-white font-[380] banner-btn-text">{bannerText.btnText}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" ></path>
                        </svg>
                    </button>
                </motion.div>
                {/* <motion.img src={banner} className='banner-right-img' {...initialLoadProps} /> */}
            </div>
        </div>
    </>
} 
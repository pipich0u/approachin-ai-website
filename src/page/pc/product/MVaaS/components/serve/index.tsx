import { motion } from 'motion/react'
import './index.css'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import { mvaasTextConfig } from '../../textConfig'

export const MVaaSServe = () => {
    const { serve } = mvaasTextConfig;
    const icon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M10.0104 2.10377C8.60886 1.65006 7.08523 2.28116 6.41498 3.59306L5.6092 5.17023C5.51346 5.35763 5.36105 5.51004 5.17365 5.60578L3.59648 6.41156C2.28458 7.08181 1.65348 8.60544 2.10719 10.007L2.65265 11.692C2.71746 11.8922 2.71746 12.1078 2.65265 12.308L2.10719 13.993C1.65348 15.3946 2.28458 16.9182 3.59648 17.5885L5.17365 18.3942C5.36105 18.49 5.51346 18.6424 5.6092 18.8298L6.41498 20.407C7.08523 21.7189 8.60886 22.35 10.0104 21.8963L11.6954 21.3508C11.8956 21.286 12.1112 21.286 12.3114 21.3508L13.9964 21.8963C15.398 22.35 16.9216 21.7189 17.5919 20.407L18.3976 18.8298C18.4934 18.6424 18.6458 18.49 18.8332 18.3942L20.4104 17.5885C21.7223 16.9182 22.3534 15.3946 21.8997 13.993L21.3542 12.308C21.2894 12.1078 21.2894 11.8922 21.3542 11.692L21.8997 10.007C22.3534 8.60544 21.7223 7.08181 20.4104 6.41156L18.8332 5.60578C18.6458 5.51004 18.4934 5.35763 18.3976 5.17023L17.5919 3.59306C16.9216 2.28116 15.398 1.65006 13.9964 2.10377L12.3114 2.64923C12.1112 2.71403 11.8956 2.71404 11.6954 2.64923L10.0104 2.10377ZM6.76319 11.7573L8.17741 10.343L11.0058 13.1715L16.6627 7.51465L18.0769 8.92886L11.0058 15.9999L6.76319 11.7573Z" fill="url(#paint0_linear_12245_1587)" />
        <defs>
            <linearGradient id="paint0_linear_12245_1587" x1="4.00391" y1="5.50049" x2="19.5039" y2="20.0005" gradientUnits="userSpaceOnUse">
                <stop stop-color="#5072FF" />
                <stop offset="1" stop-color="#7E4AFF" />
            </linearGradient>
        </defs>
    </svg>
    return <div className='mvaas-serve-container'>
        <div className='mvaas-serve-content'>
            <motion.div {...scrollInViewOnceProps} className='mvaas-serve-title'>{serve.title}</motion.div>
            <div className='mvaas-serve-box'>
                <motion.div {...scrollInViewOnceProps} className='mvaas-serve-item mvaas-serve-left'>
                    <div className='mvaas-serve-top'>
                        <div className='mvaas-serve-top-title'>{serve.cooperation.title}</div>
                        <div className='mvaas-serve-top-desc'>{serve.cooperation.desc}</div>
                    </div>
                    <div className='mvaas-serve-bottom'>
                        {serve.cooperation.items.map((item, idx) => (
                            <div key={idx} className='mvaas-serve-bottom-items'>
                                <div className='mvaas-serve-bottom-items-icon'>{icon}</div>
                                <div className='mvaas-serve-bottom-items-title'>{item.title}</div>
                                <div className='mvaas-serve-bottom-items-desc'>{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <motion.div {...scrollInViewOnceProps} className='mvaas-serve-item mvaas-serve-right'>
                    {serve.privatization.map((item, idx) => (
                        <div key={idx} className='mvaas-serve-right-items'>
                            <div className='mvaas-serve-right-items-text'>
                                <div className='mvaas-serve-top-title'>{item.title}</div>
                                <div className='mvaas-serve-top-desc'>{item.desc}</div>
                            </div>
                            <button className='animated-button w-[124px] rounded-lg mvaas-serve-btn'>
                                <span className="text-white font-[380] bt-text">{item.buttonText}</span>
                            </button>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    </div>
}
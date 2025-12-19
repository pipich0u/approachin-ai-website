import './index.css'
import { motion } from 'motion/react';
import { scrollInViewSpringProps } from '@/utils/motionConfig'


export default function CooperateBuddy() {

    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    return <>
        <div className='buddy-content'>
            <div className="buddy-con-title">优秀伙伴展示</div>
            <div className='buddy-con-box'>
                <motion.div className='buddy-con-scroll' {...scrollInViewSpringProps}>
                    <div className='buddy-scroll-container'>
                        <div className='buddy-scroll-track'>
                            {images.map((item, index) => (
                                <div className='buddy-items'>

                                </div>
                            ))}
                        </div>
                        <div className='buddy-scroll-track buddy-backup'>
                            {images.map((item, index) => (
                                <div className='buddy-items'>

                                </div>
                            ))}
                        </div>
                        <div className='buddy-scroll-track'>
                            {images.map((item, index) => (
                                <div className='buddy-items'>

                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </>
} 
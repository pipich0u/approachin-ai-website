import './index.css'
import { motion } from 'motion/react';
import { scrollInViewSpringProps } from '@/utils/motionConfig'


export default function CooperateBuddy() {
    const row1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    const row2 = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    const row3 = [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]

    const renderRow = (list: number[], reverse = false) => (
        <div className={`buddy-scroll-track ${reverse ? 'buddy-backup' : ''}`}>
            {[...list, ...list, ...list].map((item, index) => (
                <div className="buddy-items" key={index}>
                    <img src={`/src/assets/images/logo/partner${item}.png`} />
                </div>
            ))}
        </div>
    )
    return <>
        <div className='buddy-content'>
            <div className="buddy-con-title">优秀伙伴展示</div>
            <div className='buddy-con-box'>
                <motion.div className="buddy-con-scroll" {...scrollInViewSpringProps}>
                    <div className="buddy-scroll-container">
                        {renderRow(row1)}
                        {renderRow(row2, true)}
                        {renderRow(row3)}
                    </div>
                </motion.div>
            </div >
        </div >
    </>
} 
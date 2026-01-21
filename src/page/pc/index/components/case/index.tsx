import './index.css'

import { motion } from "motion/react";
import { scrollInViewSpringProps } from "@/utils/motionConfig";
export default function PageCase() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
    return (
        <div className='case'>
            <motion.div {...scrollInViewSpringProps} className='case-title'>更多客户</motion.div>
            <motion.div className='case-content' {...scrollInViewSpringProps}>
                <div className='case-scroll-container'>
                    <div className='case-scroll-track'>
                        {
                            arr.map((item, index) => (
                                <div className="item-img" key={index}>
                                    <img src={`/src/assets/images/logo/partner${item}.png`} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='case-mask-left'></div>
                <div className='case-mask-right'></div>
            </motion.div>
        </div>
    );
}
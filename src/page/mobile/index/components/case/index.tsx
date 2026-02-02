import './index.css'

import { motion } from "motion/react";
import { scrollInViewSpringOnceProps } from "@/utils/motionConfig";
export default function PageCase() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
    const logos = import.meta.glob(
        '@/assets/images/logo/*.png',
        {
            eager: true,
            import: 'default'
        }
    ) as Record<string, string>
    const getLogo = (num: number) =>
        logos[`/src/assets/images/logo/partner${num}.png`]
    return (
        <div className='mob-case'>
            <motion.div {...scrollInViewSpringOnceProps} className='mob-case-title'>更多客户</motion.div>
            <motion.div className='mob-case-content' {...scrollInViewSpringOnceProps}>
                <div className='mob-case-scroll-container'>
                    <div className='mob-case-scroll-track'>
                        {
                            arr.map((item, index) => (
                                <div className="mob-item-img" key={index}>
                                    <img src={getLogo(item)} alt={`partner-${item}`} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='mob-case-mask-left'></div>
                <div className='mob-case-mask-right'></div>
            </motion.div>
        </div>
    );
}
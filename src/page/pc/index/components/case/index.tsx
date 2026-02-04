import './index.css'

import { motion } from "motion/react";
import { scrollInViewSpringProps } from "@/utils/motionConfig";
import { useExposureTracking } from '@/hooks/useExposureTracking';

export default function PageCase() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
    const list = [...arr, ...arr]
    // 曝光埋点 - 首页客户案例区域
    const exposureRef = useExposureTracking('客户案例区域', '首页', { section: 'case' });
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
        <div className='case' ref={exposureRef}>
            <motion.div {...scrollInViewSpringProps} className='case-title'>合作伙伴</motion.div>
            <motion.div className='case-content' {...scrollInViewSpringProps}>
                <div className='case-scroll-container'>
                    <div className='case-scroll-track'>
                        {
                            list.map((item, index) => (
                                <div className="item-img" key={index}>
                                    <img src={getLogo(item)} alt={`partner-${item}`} />
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
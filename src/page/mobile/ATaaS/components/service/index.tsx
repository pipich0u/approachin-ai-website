import '@/page/mobile/common/mob-product.css'
import { serviceText } from '@/page/pc/product/ATaaS/textConfig'
import { motion } from 'motion/react'
import { scrollInViewOnceProps } from '@/utils/motionConfig'

export const MobATaaSService = () => {
    return <div className='mob-product-service'>
        <motion.div {...scrollInViewOnceProps} className='mob-product-svc-title'>服务模式</motion.div>
        <div className='mob-product-svc-list'>
            {serviceText.list.map((item, index) => (
                <motion.div {...scrollInViewOnceProps} className='mob-product-svc-card' key={index}>
                    <div className='mob-product-svc-card-title'>{item.title}</div>
                    <div className='mob-product-svc-card-desc'>{item.desc}</div>
                </motion.div>
            ))}
        </div>
    </div>
}

import '@/page/mobile/common/mob-product.css'
import { carouselText } from '@/page/pc/product/KLLM/textConfig'
import { motion } from 'motion/react'
import { scrollInViewOnceProps } from '@/utils/motionConfig'

export const MobKllmScenes = () => {
    return <div className='mob-product-scenes'>
        <motion.div {...scrollInViewOnceProps} className='mob-product-scenes-title'>{carouselText.title}</motion.div>
        <div className='mob-product-scene-list'>
            {carouselText.data.map((item) => (
                <motion.div {...scrollInViewOnceProps} className='mob-product-scene-card' key={item.id}>
                    <img src={item.img} alt={item.title} />
                    <div className='mob-product-scene-card-body'>
                        <div className='mob-product-scene-card-title'>{item.title}</div>
                        <div className='mob-product-scene-card-desc'>{item.desc}</div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
}

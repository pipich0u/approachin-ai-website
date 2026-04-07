import './index.css'
import { carouselText } from '@/page/pc/product/KLLM/textConfig'
import { motion } from 'motion/react'
import { scrollInViewOnceProps } from '@/utils/motionConfig'

export const MobKllmScenes = () => {
    return <div className='mob-kllm-scenes'>
        <motion.div {...scrollInViewOnceProps} className='mob-kllm-scenes-title'>应用场景</motion.div>
        <div className='mob-kllm-scenes-list'>
            {carouselText.data.map((item) => (
                <motion.div {...scrollInViewOnceProps} className='mob-kllm-scene-card' key={item.id}>
                    <div className='mob-kllm-scene-card-body'>
                        <div className='mob-kllm-scene-card-title'>{item.title}</div>
                        <div className='mob-kllm-scene-card-desc'>{item.desc}</div>
                    </div>
                    <div className='mob-kllm-scene-card-img'>
                        <img src={item.img} alt={item.title} loading="lazy" />
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
}

import '@/page/mobile/common/mob-product.css'
import { advantagesText } from '@/page/pc/product/ATaaS/textConfig'
import { motion } from 'motion/react'
import { scrollInViewOnceProps } from '@/utils/motionConfig'

const padNum = (n: number) => String(n + 1).padStart(2, '0')

export const MobATaaSAdvantages = () => {
    return <div className='mob-product-advantages'>
        <motion.div {...scrollInViewOnceProps} className='mob-product-adv-title'>{advantagesText.title}</motion.div>
        <div className='mob-product-adv-list'>
            {advantagesText.advantagesList.map((item, index) => (
                <motion.div {...scrollInViewOnceProps} className='mob-product-adv-card' key={index}>
                    <div className='mob-product-adv-num'>{padNum(index)}</div>
                    <h3 className='mob-product-adv-card-title'>{item.title}</h3>
                    <div className='mob-product-adv-card-list'>
                        {item.items.map((li, i) => <p key={i}>{li}</p>)}
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
}

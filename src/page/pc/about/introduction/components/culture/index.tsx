import './index.css'
import { motion } from 'motion/react'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import { cultureList } from '../../textConfig'

export const CultureSection = () => {
    return (
        <div className='culture-section'>
            <div className='culture-bg' />
            <div className='culture-content'>
                <motion.h2 {...scrollInViewOnceProps} className='culture-title'>
                    {cultureList.title}
                </motion.h2>
                <div className='culture-items'>
                    {cultureList.items.map((item, index) => (
                        <motion.div
                            key={index}
                            {...scrollInViewOnceProps}
                            className='culture-item'
                        >
                            <strong className='culture-item-label'>{(item as any).icon || item.label[0]}</strong>
                            <div className='culture-item-divider' />
                            <p className='culture-item-value'>{item.value}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

import { motion } from 'motion/react'
import './index.css'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import { amaasTextConfig } from '../../textConfig'
import { IconFont } from '@/utils/antdUtils'

export const AMaasTestimony = () => {

    const { testimony } = amaasTextConfig;

    return <div className='amaas-testimony-container'>
        <div className='amaas-testimony-content'>
            <motion.div className='amaas-testimony-title' {...scrollInViewOnceProps}>{testimony.title}</motion.div>
            <motion.div className='amaas-testimony-desc' {...scrollInViewOnceProps}>{testimony.description}</motion.div>
            <motion.div className='amaas-testimony-scroll' {...scrollInViewOnceProps}>
                <div className='testimony-scroll-container'>
                    <div className='testimony-scroll-track'>
                        {testimony.list.map((item, index) => (
                            <div className='testimony-items' key={index}>
                                <div className='testimony-items-icon'>
                                    <img src={`/src/assets/images/logo/testimony${item.icon}.png`} alt="" />
                                </div>
                                <div className='testimony-items-desc'>{item.desc}</div>
                                <div className='testimony-items-link'>
                                    {item.btn}
                                    <IconFont type='icon-up-s' className='rotate-90 text-[26px]'/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
}
import { motion } from 'motion/react'
import './index.css'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import { amaasTextConfig } from '../../textConfig'
import { IconFont } from '@/utils/antdUtils'

export const AMaasTestimony = () => {

    const { testimony } = amaasTextConfig;

    return <div className='mob-amaas-testimony-container'>
        <div className='mob-amaas-testimony-content'>
            <motion.div className='mob-amaas-testimony-title' {...scrollInViewOnceProps}>{testimony.title}</motion.div>
            <motion.div className='mob-amaas-testimony-desc' {...scrollInViewOnceProps}>{testimony.description}</motion.div>
            <motion.div className='mob-amaas-testimony-scroll' {...scrollInViewOnceProps}>
                <div className='mob-testimony-scroll-container'>
                    <div className='mob-testimony-scroll-track'>
                        {testimony.list.map((item, index) => (
                            <div className='mob-testimony-items' key={index}>
                                <div className='mob-testimony-items-icon'>
                                    <img src={`/src/assets/images/logo/testimony${item.icon}.png`} alt="" />
                                </div>
                                <div className='mob-testimony-items-desc'>{item.desc}</div>
                                <div className='mob-testimony-items-link' onClick={()=>window.open(item.link)}>
                                    {item.btn}
                                    <IconFont type='icon-up-s' className='rotate-90 text-[26px]'/>
                                </div>
                            </div>
                        ))}
                        {testimony.list.map((item, index) => (
                            <div className='mob-testimony-items' key={index}>
                                <div className='mob-testimony-items-icon'>
                                    <img src={`/src/assets/images/logo/testimony${item.icon}.png`} alt="" />
                                </div>
                                <div className='mob-testimony-items-desc'>{item.desc}</div>
                                <div className='mob-testimony-items-link' onClick={()=>window.open(item.link)}>
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
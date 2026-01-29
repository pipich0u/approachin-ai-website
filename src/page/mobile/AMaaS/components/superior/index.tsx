import './index.css'
import { motion } from 'motion/react'
import amaas from '@/assets/images/img/amaas.png'
import { amaasTextConfig } from '../../textConfig'
import { scrollInViewSpringOnceProps } from '@/utils/motionConfig'

export const MobAMaasSuperior = () => {

    const { superior } = amaasTextConfig;
    const tabItems = superior.tabItems;
    return (
        <div className='mob-amaas-superior-container' >
            <div className='mob-amaas-sup-content'>
                <motion.div {...scrollInViewSpringOnceProps} className="mob-amaas-sup-title">{superior.title}</motion.div>
                <div className='mob-amaas-sup-box'>
                    {tabItems.map(item => (
                        <div key={item.id} className={`mob-amaas-sup-tab-items`} >
                            <div className='mob-amaas-sup-tab-title'>{item.label}</div>
                            <div className='mob-amaas-sup-tab-desc'>{item.desc}</div>
                        </div>
                    ))}
                </div>

                <motion.div {...scrollInViewSpringOnceProps} className='mob-amaas-sup-tab-info'>
                    <img src={amaas} alt="" />
                </motion.div>
            </div>
        </div >
    )
}

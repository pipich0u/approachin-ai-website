import './index.css'
import { motion } from 'motion/react'
import { scrollInViewSpringOnceProps } from '@/utils/motionConfig'
import { machineTextConfig } from '@/page/pc/product/machine/textConfig'

export const MobMachineScene = () => {
    const { scene } = machineTextConfig;
    const tabItems = scene.tabItems;

    return <div className='mob-scene-container'>
        <div className='mob-scene-content'>
            <motion.div {...scrollInViewSpringOnceProps} className="mob-scene-title">{scene.title}</motion.div>
            <div className='mob-scene-center'>
                {
                    tabItems.map((item, index) => {
                        return <>
                            <motion.div {...scrollInViewSpringOnceProps} className='mob-scene-items' key={index}>
                                <div className='mob-scene-items-title'>{item.label}</div>
                                <div className='mob-scene-items-desc'>{item.desc}</div>
                                <div className='mob-scene-items-list'>
                                    {
                                        item.features.map((feature, idx) => (
                                            <li className='mob-scene-items-li' key={idx}>
                                                {feature}
                                            </li>
                                        ))
                                    }
                                </div>
                            </motion.div>
                            {index !== 2 && <motion.div {...scrollInViewSpringOnceProps} className='mob-scene-items-line' />}
                        </>
                    })
                }
            </div>
        </div>
    </div>
}
import './index.css'
import { motion } from 'motion/react'
import { scrollInViewSpringOnceProps } from '@/utils/motionConfig'
import { machinAmaas } from '@/page/pc/product/machine/textConfig'
import img from '@/assets/images/img/machine-rig.png'
export const MobMachineAmaas = () => {
    return <div className='mob-amaas-container'>
        <div className='mob-amaas-content'>
            <motion.div className="mob-amaas-con-title" {...scrollInViewSpringOnceProps}>{machinAmaas.title}</motion.div>
            <div className='mob-amaas-con-box'>
                <div className="mob-amaas-con-box-left">
                    <motion.div className="mob-amaas-con-box-title" {...scrollInViewSpringOnceProps}>{machinAmaas.platform}</motion.div>
                    <motion.div className="mob-amaas-con-box-list" {...scrollInViewSpringOnceProps}>
                        {
                            machinAmaas.list.map((item, index) => {
                                return <div className='mob-amaas-items'>
                                    <li key={index}>{item.title}</li>
                                    <div className='mob-amaas-items-desc' key={index}>{item.desc}</div>
                                </div>
                            })
                        }
                    </motion.div>
                </div>
                <motion.div {...scrollInViewSpringOnceProps} className="mob-amaas-con-box-rig">
                    <img src={img} alt="" className='selectNone'/>
                </motion.div>
            </div>
        </div>
    </div>
}
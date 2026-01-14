import './index.css'
import { motion } from 'motion/react'
import { scrollInViewSpringOnceProps } from '@/utils/motionConfig'
import { machinAmaas } from '../../textConfig'
import img from '@/assets/images/img/amaas_rig.png'
export const MachineAmaas = () => {
    return <div className='amaas-container'>
        <div className='amaas-content'>
            <motion.div className="amaas-con-title" {...scrollInViewSpringOnceProps}>{machinAmaas.title}</motion.div>
            <div className='amaas-con-box'>
                <div className="amaas-con-box-left">
                    <motion.div className="amaas-con-box-title" {...scrollInViewSpringOnceProps}>{machinAmaas.amaas}</motion.div>
                    <motion.div className="amaas-con-box-list" {...scrollInViewSpringOnceProps}>
                        {
                            machinAmaas.list.map((item, index) => {
                                return <div className='amaas-items'>
                                    <li key={index}>{item.title}</li>
                                    <div className='amaas-items-desc' key={index}>{item.desc}</div>
                                </div>
                            })
                        }
                    </motion.div>
                </div>
                <motion.div {...scrollInViewSpringOnceProps} className="amaas-con-box-rig">
                    <img src={img} alt="" />
                </motion.div>
            </div>
        </div>
    </div>
}
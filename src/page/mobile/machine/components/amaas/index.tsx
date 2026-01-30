import './index.css'
import { motion } from 'motion/react'
import { scrollInViewSpringOnceProps } from '@/utils/motionConfig'
import { machinAmaas } from '@/page/pc/product/machine/textConfig'
import img1 from '@/assets/images/mob/mob-am1.png'
import img2 from '@/assets/images/mob/mob-am2.png'
import img3 from '@/assets/images/mob/mob-am3.png'
export const MobMachineAmaas = () => {
    return <div className='mob-amaas-container'>
        <div className='mob-amaas-content'>
            <motion.div className="mob-amaas-con-title" {...scrollInViewSpringOnceProps}>智能化运维 <br />大幅降低运维成本</motion.div>
            <motion.div className='mob-amaas-con-box' {...scrollInViewSpringOnceProps}>
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
                    <img src={img1} alt="" className='selectNone' />
                    <img src={img2} alt="" className='selectNone' />
                    <img src={img3} alt="" className='selectNone' />
                </motion.div>
            </motion.div>
        </div>
    </div>
}
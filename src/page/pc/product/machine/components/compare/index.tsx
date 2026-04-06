import './index.css'
import img from '@/assets/images/img/machine_compare.webp'
import { motion } from 'motion/react'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
export const MachineCompare = () => {

    return <div className='mac_compare_container'>
        <div className='mac_compare_content'>
            <motion.div {...scrollInViewOnceProps} className='mac_compare_title'>相比于基于开源引擎的一体机</motion.div>
            <div className='mac_compare_desc'>安全、稳定、高性能</div>
            <motion.img {...scrollInViewOnceProps} src={img} alt="" className='mac_compare_img'/>
        </div>
    </div>
}
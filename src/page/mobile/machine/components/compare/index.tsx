import './index.css'
import img from '@/assets/images/img/machine_compare.png'
import { motion } from 'motion/react'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
export const MobMachineCompare = () => {

    return <div className='mac_compare_container'>
        <div className='mac_compare_content'>
            <motion.div {...scrollInViewOnceProps} className='mac_compare_title'>相比自建数据库功能更丰富</motion.div>
            <motion.img {...scrollInViewOnceProps} src={img} alt="" className='mac_compare_img'/>
        </div>
    </div>
}
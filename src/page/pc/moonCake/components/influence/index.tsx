
import { IconFont } from '@/utils/antdUtils'
import './index.css'
import img_mo from '@/assets/images/img/mon_items.png'
import lun from '@/assets/images/img/mon_lunwen.png'
import { motion } from 'motion/react'
import { scrollInViewSpringOnceProps } from '@/utils/motionConfig'
import { MoonInfluenceList } from '../../textConfig'

export const MoonInfluence = () => {
    return <div className="moon-influence-container">
        <motion.div {...scrollInViewSpringOnceProps} className='mo-in-title'>
            {MoonInfluenceList.title}
        </motion.div >
        <div className='mo-in-content'>
            <motion.div {...scrollInViewSpringOnceProps} className='mo-in-con-item'>
                <div className='mo-in-con-item-text'>
                    <div className='mo-in-con-item-text-title'>{MoonInfluenceList.items[0].title}</div>
                    <div className='mo-in-con-item-text-desc'>{MoonInfluenceList.items[0].desc}</div>
                </div>
                <img src={img_mo} alt="" />
            </motion.div>
            <motion.div {...scrollInViewSpringOnceProps} className='mo-in-con-item'>
                <img src={img_mo} alt="" />
                <div className='mo-in-con-item-text reverse'>
                    <div className='mo-in-con-item-text-title'>{MoonInfluenceList.items[1].title}</div>
                    <div className='mo-in-con-item-text-desc reverse'>{MoonInfluenceList.items[1].desc}</div>
                </div>
            </motion.div>
            <motion.div {...scrollInViewSpringOnceProps} className='mo-in-con-item'>
                <div className='mo-in-con-item-text'>
                    <div className='mo-in-con-item-text-title'>{MoonInfluenceList.items[2].title}</div>
                    <div className='mo-in-con-item-text-desc'>{MoonInfluenceList.items[2].desc}</div>
                </div>
                <img src={lun} alt="" className='lun-img' />
            </motion.div>
        </div>
    </div>
}
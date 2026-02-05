import './index.css'
import { motion } from 'motion/react'
import {  scrollInViewSpringOnceProps } from '@/utils/motionConfig'
import { machinIntroduce } from '@/page/pc/product/machine/textConfig'

export const MobMachineIntroduce = () => {
    return <div className='mob-mc-introduce-container'>
        <div className='mob-mc-introduce-content'>
            <motion.div {...scrollInViewSpringOnceProps} className='mob-mc-introduce-title'>
                {machinIntroduce.title1}<br />{machinIntroduce.title2}
            </motion.div>
            <div className="mob-mc-introduce-box">
                {
                    machinIntroduce.list.map((item, index) => {
                        return <motion.div {...scrollInViewSpringOnceProps} className='mob-mc-introduce-box-item' key={index}>
                            <div className='mob-mc-introduce-box-item-left'>
                                <div className="mob-mc-introduce-box-item-title">{item.title}</div>
                                <div className="mob-mc-introduce-box-item-list">
                                    {
                                        item.items.map((it, idx) => {
                                            return <li key={idx + index}>{it}</li>
                                        })
                                    }
                                </div>
                            </div>
                            <div className='mob-mc-introduce-box-item-rig'>
                                <img src={item.img} alt="" />
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    </div>
}
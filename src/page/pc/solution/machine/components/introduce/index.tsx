import './index.css'
import { motion } from 'motion/react'
import { scrollInViewSpringOnceProps } from '@/utils/motionConfig'
import itemImg from '@/assets/images/img/mc_in_item1.png'
import { machinIntroduce } from '../../textConfig'

export const MachineIntroduce = () => {
    return <div className='mc-introduce-container'>
        <div className='mc-introduce-content'>
            <div className='mc-introduce-title'>
                {machinIntroduce.title1}<br />{machinIntroduce.title2}
            </div>
            <div className="mc-introduce-box">
                {
                    machinIntroduce.list.map((item, index) => {
                        return <div className='mc-introduce-box-item' key={index}>
                            <div className='mc-introduce-box-item-left'>
                                <div className="mc-introduce-box-item-title">{item.title}</div>
                                <div className="mc-introduce-box-item-list">
                                    {
                                        item.items.map((it, idx) => {
                                            return <li key={idx + index}>{it}</li>
                                        })
                                    }
                                </div>
                            </div>
                            <div className='mc-introduce-box-item-rig'>
                                <img src={itemImg} alt="" />
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}
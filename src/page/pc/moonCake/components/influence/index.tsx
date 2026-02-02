import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'
import { MoonInfluenceList } from '../../textConfig'

export const MoonInfluence = () => {
    return <div className="moon-influence-container">
        <motion.div {...initialLoadProps} className='mo-in-title'>
            {MoonInfluenceList.title}
        </motion.div >
        <div className='mo-in-content'>
            {
                MoonInfluenceList.items.map((item, index) => (
                    <motion.div  {...initialLoadProps} className='mo-in-content-items' key={index} style={{
                        background: `url(${item.bg})`
                    }} >
                        <div className='mo-in-content-img' >
                            <img src={item.img} alt="" />
                        </div>
                        <div className='mo-in-content-text'>
                            {item.desc}
                        </div>
                    </motion.div>
                ))
            }
        </div>
    </div>
}
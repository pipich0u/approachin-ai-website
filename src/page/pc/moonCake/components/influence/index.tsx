
import { IconFont } from '@/utils/antdUtils'
import './index.css'
import img_mo from '@/assets/images/img/mon_items.png'
import lun from '@/assets/images/img/mon_lunwen.png'
import { motion } from 'motion/react'
import { scrollInViewSpringOnceProps } from '@/utils/motionConfig'

export const MoonInfluence = () => {
    return <div className="moon-influence-container">
        <motion.div {...scrollInViewSpringOnceProps} className='mo-in-title'>
            Mooncake 技术影响力
        </motion.div >
        <div className='mo-in-content'>
            <motion.div {...scrollInViewSpringOnceProps} className='mo-in-con-item'>
                <div className='mo-in-con-item-text'>
                    <div className='mo-in-con-item-text-title'>业界分布式推理事实标准</div>
                    <div className='mo-in-con-item-text-desc'>和 vLLM、SGLang、NVIDIA Dynamo 等一同共建</div>
                </div>
                <img src={img_mo} alt="" />
            </motion.div>
            <motion.div {...scrollInViewSpringOnceProps} className='mo-in-con-item'>
                <img src={img_mo} alt="" />
                <div className='mo-in-con-item-text reverse'>
                    <div className='mo-in-con-item-text-title'>Kimi底座，并落地众多互联网公司</div>
                    <div className='mo-in-con-item-text-desc reverse'>Mooncake 作为 Kimi 底座平台，承载其近四千万的月活用户 提升 Kimi 吞吐 75% 以上。并在阿里云、美团、京东、蚂蚁集团、腾讯元宝、科大讯飞等多家头部互联网公司落地</div>
                </div>
            </motion.div>
            <motion.div {...scrollInViewSpringOnceProps} className='mo-in-con-item'>
                <div className='mo-in-con-item-text'>
                    <div className='mo-in-con-item-text-title'>全球唯二的顶会最佳论文</div>
                    <div className='mo-in-con-item-text-desc'>全球存储顶级会议 2025  USENIX FAST 最佳论文</div>
                </div>
                <img src={lun} alt="" className='lun-img' />
            </motion.div>
        </div>
    </div>
}
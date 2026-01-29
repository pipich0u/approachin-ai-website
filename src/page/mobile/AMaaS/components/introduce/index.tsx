import { motion } from 'motion/react'
import { IconFont } from '@/utils/antdUtils'
import './index.css'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import { amaasTextConfig } from '@/page/pc/product/AMaaS/textConfig'

export const MobAMaaSIntroduce = () => {
    const { introduce } = amaasTextConfig;

    return <div className='mob-amaas-introduce-container'>
        <div className="mob-amaas-in-content">
            <motion.div className="mob-amaas-in-title" {...scrollInViewOnceProps}>
                {introduce.title}
            </motion.div>
            <motion.div className="mob-amaas-in-desc" {...scrollInViewOnceProps}>
                云原生一站式机器学习<div className="mob-amaas-in-desc-line">｜</div>深度学习<div className="mob-amaas-in-desc-line">｜</div>大模型AI平台
            </motion.div>

            <div className="mob-amaas-in-box">
                {introduce.items.map((item, index) => (
                    <motion.div key={index} className="mob-amaas-in-item" {...scrollInViewOnceProps}>
                        <div className='mob-amaas-in-item-title'>
                            {item.title}
                        </div>
                        {/* <div className='mob-amaas-in-item-desc'>
                            {item.description}
                        </div> */}
                        <div className='mob-amaas-in-item-list'>
                            {item.features.map((feature, idx) => (
                                <div key={idx} className='mob-amaas-in-item-list-li'>
                                    <IconFont style={{ fontSize: '18px', color: '#02Dc52' }} type='icon-dui'></IconFont>
                                    <div>{feature}</div>
                                </div>
                            ))}
                        </div>
                        <div className='mob-amaas-in-item-img'>
                            <img src={item.img} alt="" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
}
import { IconFont } from '@/utils/antdUtils'
import { motion } from 'motion/react'
import './index.css'
import relationImg from '@/assets/images/img/amaas-relation.webp'
import { amaasTextConfig } from '@/page/pc/product/AMaaS/textConfig'
import { scrollInViewOnceProps } from '@/utils/motionConfig'

export const MobAMaaSRelation = () => {
    const { relation } = amaasTextConfig;

    return <div className='mob-amaas-relation-container'>
        <div className="mob-amaas-relation-content">
            <motion.div className='mob-amaas-relation-title' {...scrollInViewOnceProps}>
                {relation.title}
            </motion.div>
            <motion.div className='mob-amaas-relation-img-wrap' {...scrollInViewOnceProps}>
                <img src={relationImg} alt="大模型产品关系图" />
            </motion.div>
            <div className='mob-amaas-relation-box-right'>
                <motion.div {...scrollInViewOnceProps} className='mob-amaas-related-box'>
                    <div className='mob-amaas-rel-box-rig-title'>{relation.sidebar?.title}</div>
                    <div className='mob-amaas-rel-box-rig-desc'>{relation.sidebar?.description}</div>
                </motion.div>
                <motion.div {...scrollInViewOnceProps} className='mob-amaas-related-box'>
                    <div className='mob-amaas-rel-box-rig-title'>{relation.sidebar?.advantages?.title}</div>
                    <div className='mob-amaas-rel-box-rig-list'>
                        {relation.sidebar?.advantages?.items?.map((item, idx) => (
                            <div key={idx} className='mob-amaas-rel-li'>
                                <IconFont style={{ fontSize: '20px', color: '#6C3AE1' }} type='icon-dui'></IconFont>
                                <div className='mob-amaas-rel-li-text'>{item}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
} 
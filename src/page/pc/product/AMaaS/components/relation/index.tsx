import { IconFont } from '@/utils/antdUtils'
import { motion } from 'motion/react'
import './index.css'

import img from '@/assets/images/img/amaas-relation.webp'


import { amaasTextConfig } from '../../textConfig'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import { useNavigate } from 'react-router-dom'

export const AMaaSRelation = () => {
    const { relation } = amaasTextConfig;
    const navigate = useNavigate()
    return <div className='amaas-relation-container'>
        <div className="amaas-relation-content">
            <motion.div className='amaas-relation-title' {...scrollInViewOnceProps}>
                {relation.title}
            </motion.div>
            <motion.div className='amaas-relation-box' {...scrollInViewOnceProps}>
                <div className='amaas-relation-box-left'>
                    <div className='amaas-relation-box-left-content'>
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className='amaas-relation-box-right'>
                    <div className='amaas-related-box'>
                        <div className='amaas-rel-box-rig-title'>{relation.sidebar?.title}</div>
                        <div className='amaas-rel-box-rig-desc'>{relation.sidebar?.description}</div>
                    </div>
                    <div className='amaas-related-box'>
                        <div className='amaas-rel-box-rig-title'>{relation.sidebar?.advantages?.title}</div>
                        <div className='amaas-rel-box-rig-list'>
                            {relation.sidebar?.advantages?.items?.map((item, idx) => (
                                <div key={idx} className='amaas-rel-li'>
                                    <IconFont style={{ fontSize: '24px', color: '#6C3AE1' }} type='icon-dui'></IconFont>
                                    <div className='amaas-rel-li-text'>{item}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className='amaas-rel-box-rig-btn' onClick={() => navigate('/contact')}>{relation.sidebar?.buttonText}</button>
                    <div className='amaas-related-box'>
                        <div className='amaas-rel-box-rig-title'>{relation.sidebar?.relatedCapabilities?.title}</div>
                        <div className='amaas-related-list'>
                            {relation.sidebar?.relatedCapabilities?.items?.map((item, idx) => (
                                <div key={idx} className='amaas-related-li' onClick={() => navigate(item.link)}>{item.text}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
} 
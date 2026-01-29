import { IconFont } from '@/utils/antdUtils'
import { motion } from 'motion/react'
import './index.css'
import img1 from '@/assets/images/mob/mob-amaas-relation1.webp'
import img2 from '@/assets/images/mob/mob-amaas-relation2.webp'
import img3 from '@/assets/images/mob/mob-amaas-relation3.webp'
import { amaasTextConfig } from '@/page/pc/product/AMaaS/textConfig'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import { useNavigate } from 'react-router-dom'

export const MobAMaaSRelation = () => {
    const { relation } = amaasTextConfig;
    const navigate = useNavigate()

    return <div className='mob-amaas-relation-container'>
        <div className="mob-amaas-relation-content">
            <motion.div className='mob-amaas-relation-title' {...scrollInViewOnceProps}>
                {relation.title}
            </motion.div>
            <motion.div className='mob-amaas-relation-box' {...scrollInViewOnceProps}>
                {
                    relation.layers.map((layer, idx) => (
                        <div className='mob-amaas-relation-box-item'>
                            <div className='mob-amaas-relation-box-title'>
                                <div className='mob-amaas-relation-box-text'>{layer.name}</div>
                                <div className='mob-amaas-relation-box-desc'>———{layer.subtitle}</div>
                            </div>
                            <div className='mob-amaas-relation-box-item-content'>
                                <img src={idx === 0 ? img1 : idx === 1 ? img2 : img3} alt='' className='mob-amaas-relation-img' />
                            </div>
                        </div>
                    ))
                }
                <div className='mob-amaas-relation-box-right'>
                    <div className='mob-amaas-related-box'>
                        <div className='mob-amaas-rel-box-rig-title'>{relation.sidebar?.title}</div>
                        <div className='mob-amaas-rel-box-rig-desc'>{relation.sidebar?.description}</div>
                    </div>
                    <div className='mob-amaas-related-box'>
                        <div className='mob-amaas-rel-box-rig-title'>{relation.sidebar?.advantages?.title}</div>
                        <div className='mob-amaas-rel-box-rig-list'>
                            {relation.sidebar?.advantages?.items?.map((item, idx) => (
                                <div key={idx} className='mob-amaas-rel-li'>
                                    <IconFont style={{ fontSize: '20px', color: '#6C3AE1' }} type='icon-dui'></IconFont>
                                    <div className='mob-amaas-rel-li-text'>{item}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='mob-amaas-related-box'>
                        <div className='mob-amaas-rel-box-rig-title'>{relation.sidebar?.relatedCapabilities?.title}</div>
                        <div className='mob-amaas-related-list'>
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
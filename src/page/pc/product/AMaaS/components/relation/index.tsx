import { IconFont } from '@/utils/antdUtils'
import { motion } from 'motion/react'
import './index.css'
import sgl from '@/assets/images/img/sgl_logo.png'
import kt from '@/assets/images/img/kt_logo.png'
import vllm from '@/assets/images/img/vllm_logo.png'
import lmcache from '@/assets/images/img/lmcache_logo.png'
import moocake from '@/assets/images/img/mooncake_logo.png'
import nvidia from '@/assets/images/img/nvidia-logo.png'
import dynamo from '@/assets/images/img/dynamo_logo.png'
import ascend from '@/assets/images/img/ascend_logo.png'
import muxi from '@/assets/images/img/muxi_logo.png'
import tianshu from '@/assets/images/img/tianshu_logo.png'
import moer from '@/assets/images/img/moer_logo.png'
import intel from '@/assets/images/img/intel-logo.png'
import haiguang from '@/assets/images/img/haiguang_logo.png'
import kunlun from '@/assets/images/img/kunpeng_logo.png'
import adm from '@/assets/images/img/amd_logo.png'
import feiteng from '@/assets/images/img/feiteng_logo.png'

import { amaasTextConfig } from '../../textConfig'
import { scrollInViewOnceProps } from '@/utils/motionConfig'

export const AMaaSRelation = () => {
    const { relation } = amaasTextConfig;
    const inferenceEngines = [
        { src: sgl, alt: 'sgl' },
        { src: kt, alt: 'kt' },
        { src: vllm, alt: 'vllm' }
    ];
    const distributedFrameworks = [
        { src: lmcache, alt: 'lmcache' },
        { src: moocake, alt: 'mooncake' },
        { src: nvidia, alt: 'nvidia' },
        { src: dynamo, alt: 'dynamo' }
    ];
    const resourceLogos = [
        { src: nvidia, alt: 'nvidia' },
        { src: ascend, alt: 'ascend' },
        { src: muxi, alt: '沐曦' },
        { src: tianshu, alt: '天数' },
        { src: moer, alt: '摩尔' },
        { src: intel, alt: 'intel' },
        { src: haiguang, alt: '海光' },
        { src: kunlun, alt: '鲲鹏' },
        { src: adm, alt: 'amd' },
        { src: feiteng, alt: '飞腾' }
    ];

    return <div className='amaas-relation-container'>
        <div className="amaas-relation-content">
            <motion.div className='amaas-relation-title' {...scrollInViewOnceProps}>
                {relation.title}
            </motion.div>
            <motion.div className='amaas-relation-box' {...scrollInViewOnceProps}>
                <div className='amaas-relation-box-left'>
                    <div className='amaas-relation-box-left-content'>
                        <div className='amaas-left-item-title'>
                            <div className='amaas-left-item-title-left'>{relation.layers[0]?.name}</div>
                            <div className='amaas-left-item-title-rig'>——{relation.layers[0]?.subtitle}</div>
                        </div>
                        <div className="amaas-left-item-feater">
                            <div className='amaas-item-feater-box amaas-rel-feater-1'>
                                <div className='amaas-item-feater-title'>
                                    {relation.layers[0]?.features?.[0]?.title}
                                </div>
                                <div className='amaas-item-feater-info'>
                                    {relation.layers[0]?.features?.[0]?.items?.map((item, idx) => (
                                        <div key={idx} className='feater-info-li'>{item}</div>
                                    ))}
                                </div>
                            </div>
                            <div className='amaas-item-feater-box amaas-rel-feater-2'>
                                <div className='amaas-item-feater-title'>
                                    {relation.layers[0]?.features?.[1]?.title}
                                </div>
                                <div className='amaas-item-feater-info'>
                                    <div className='feater-info-li amaas-rel-full-width'>{relation.layers[0]?.features?.[1]?.items?.[0]}</div>
                                    <div className='amaas-rel-inline-items'>
                                        {relation.layers[0]?.features?.[1]?.items?.slice(1).map((item, idx) => (
                                            <div key={idx} className='feater-info-li amaas-rel-inline-item'>{item}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='amaas-item-feater-box amaas-rel-feater-3'>
                                <div className='amaas-item-feater-title'>
                                    {relation.layers[0]?.features?.[2]?.title}
                                </div>
                                <div className='amaas-item-feater-info amaas-rel-api-gap'>
                                    {relation.layers[0]?.features?.[2]?.items?.map((item, idx) => (
                                        <div key={idx} className='feater-info-li amaas-rel-api-item'>{item}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='amaas-left-item-title'>
                            <div className='amaas-left-item-title-left'>{relation.layers[1]?.name}</div>
                            <div className='amaas-left-item-title-rig'>——{relation.layers[1]?.subtitle}</div>
                        </div>
                        <div className="amaas-left-item-feater">
                            <div className='amaas-item-feater-imgbox'>
                                <div className='amaas-item-feater-title'>
                                    {relation.layers[1]?.sections?.[0]?.title}
                                </div>
                                <div className='amaas-item-feater-imgs'>
                                    {inferenceEngines.map((engine, idx) => (
                                        <img key={idx} src={engine.src} alt={engine.alt} />
                                    ))}
                                </div>
                            </div>
                            <div className='amaas-item-feater-imgbox'>
                                <div className='amaas-item-feater-title'>
                                    {relation.layers[1]?.sections?.[1]?.title}
                                </div>
                                <div className='amaas-item-feater-imgs'>
                                    {distributedFrameworks.map((framework, idx) => (
                                        <img key={idx} src={framework.src} alt={framework.alt} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='amaas-left-item-title'>
                            <div className='amaas-left-item-title-left'>{relation.layers[2]?.name}</div>
                            <div className='amaas-left-item-title-rig'>——{relation.layers[2]?.subtitle}</div>
                        </div>
                        <div className='amaas-resource-layer'>
                            {resourceLogos.map((logo, idx) => (
                                <img key={idx} src={logo.src} alt={logo.alt} />
                            ))}
                        </div>
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
                    <button className='amaas-rel-box-rig-btn'>{relation.sidebar?.buttonText}</button>
                    <div className='amaas-related-box'>
                        <div className='amaas-rel-box-rig-title'>{relation.sidebar?.relatedCapabilities?.title}</div>
                        <div className='amaas-related-list'>
                            {relation.sidebar?.relatedCapabilities?.items?.map((item, idx) => (
                                <div key={idx} className='amaas-related-li'>{item}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
} 
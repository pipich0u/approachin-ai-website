import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'
import { IconFont } from '@/utils/antdUtils';
import { depList } from '@/page/pc/index/textConfig';
import { motion } from "motion/react"
import { scrollInViewSpringProps } from '@/utils/motionConfig'
import { trackButtonClick, trackHover } from '@/utils/umami';
import { useExposureTracking } from '@/hooks/useExposureTracking';

export default function DevelopPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();

    const exposureRef = useExposureTracking('发展历程区域', '首页', { section: 'develop' });

    return (
        <div className='develop-box' ref={exposureRef}>
            <div className='dep-container'>
                <motion.div className="dep-title" {...scrollInViewSpringProps}>{depList.title}</motion.div>
                <motion.div {...scrollInViewSpringProps} className='dep-tabbox' onMouseLeave={() => setActiveIndex(0)}>
                    {depList.list.map((item, index) => (
                        <div
                            key={index}
                            className={`dep-card ${activeIndex === index ? 'dep-card-active' : ''}`}
                            data-index={index}
                            onMouseEnter={() => {
                                trackHover(`发展历程-${item.name}`, '首页发展历程区域');
                                setActiveIndex(index);
                            }}
                            onClick={() => {
                                trackButtonClick(`了解更多-${item.name}`, '首页发展历程区域', { href: '/introduction', itemName: item.name });
                                navigate('/introduction');
                            }}
                        >
                            <div className='dep-card-icon'>
                                <IconFont type={item.icon} className='text-[40px]!' />
                            </div>
                            <div className='dep-card-content'>
                                <div className="dep-card-title">{item.name}</div>
                                <div className="dep-card-desc">{item.desc}</div>
                                <div className="dep-card-btn">了解详情</div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

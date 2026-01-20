import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'
import { IconFont } from '@/utils/antdUtils';
import { depList } from '@/page/textConfig';
import { motion } from "motion/react"
import { scrollInViewSpringProps } from '@/utils/motionConfig'
export default function DevelopPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate()
    return (
        <div className='develop-box'>
            <div className='dep-container'>
                <motion.div className="dep-title" {...scrollInViewSpringProps}>{depList.title}</motion.div>
                <motion.div {...scrollInViewSpringProps} className='dep-tabbox' onMouseLeave={() => setActiveIndex(0)} >
                    {
                        depList.list.map((item, index) =>
                            <>
                                <motion.div key={index}
                                    className={`dep-tab-items ${activeIndex === index ? 'hidden!' : ''}`}
                                    onMouseEnter={() => setActiveIndex(index)}
                                >
                                    <div className='dep-tab-item-icon'>
                                        <IconFont type={item.icon} />
                                    </div>
                                    <div className='dep-tab-item-content'>
                                        <div className="dep-tab-item-title">{item.name}</div>
                                        <div className="dep-tab-item-desc">{item.desc}</div>
                                    </div>
                                    {/* {<div className={`dep-more w-24 h-[33px] text-[14px] font-[380] ${activeIndex === index ? 'more-active' : 'more-active-no'}`} >了解更多</div>} */}
                                </motion.div >
                                <motion.div key={`active-${index}`}
                                    // {...scrollInViewSpringProps}
                                    onClick={() => navigate('/introduction')}
                                    className={`dep-tab-items ${activeIndex === index ? 'dep-active' : 'hidden!'}`}
                                    onMouseEnter={() => setActiveIndex(index)}
                                >
                                    <div className='dep-tab-item-icon'>
                                        <IconFont type={item.icon} />
                                    </div>
                                    <div className='dep-tab-item-content'>
                                        <div className="dep-tab-item-title">{item.name}</div>
                                        <div className="dep-tab-item-desc">{item.desc}</div>
                                    </div>
                                    {/* {<div onClick={() => navigate('/introduction')} className={`dep-more w-24 h-[33px] text-[14px] font-[380] ${activeIndex === index ? 'more-active' : 'more-active-no'}`} >了解更多</div>} */}
                                </motion.div>
                            </>
                        )
                    }
                </motion.div >
            </div >
        </div >
    );
}

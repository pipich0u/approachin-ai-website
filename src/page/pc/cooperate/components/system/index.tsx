import './index.css'
import { motion } from 'motion/react';
import { scrollInViewSpringProps } from '@/utils/motionConfig'
import { systemText } from '../../textConfig';
import more from '@/assets/svg/more-g.svg'
import sys_img1 from '@/assets/images/img/sys_items1.png'
import sys_img2 from '@/assets/images/img/sys_items2.png'
import sys_img3 from '@/assets/images/img/sys_items3.png'
import sys_img4 from '@/assets/images/img/sys_items4.png'
import { useNavigate } from 'react-router-dom';
import { trackButtonClick } from '@/utils/umami';

export default function CooperateSystem() {
    const navigate = useNavigate();
    const list = [sys_img1, sys_img2, sys_img3, sys_img4]
    return <>
        <div className='sys-content'>
            <div className='sys-con-inner'>
                <motion.div className='sys-con-title' {...scrollInViewSpringProps}>{systemText.title}</motion.div>
                <div className='sys-con-list'>
                    {
                        systemText.list.map((item, index) => (
                            <motion.div className='sys-con-list-item' key={index} {...scrollInViewSpringProps}>
                                <div className='sys-list-item-icon'>
                                    <img src={list[index]} alt="" />
                                </div>
                                <div className='sys-list-item-text'>
                                    <div className='sys-list-item-title'>{item.title}</div>
                                    <div className='sys-list-item-desc'>{item.desc}</div>
                                </div>
                                <div className='sys-list-item-btn' onClick={() => {
                                    trackButtonClick(systemText.btn, `Cooperate系统-${item.title}`);
                                    navigate('/contact');
                                }}>
                                    <span className='sys-list-item-btn-text'>{systemText.btn}</span>
                                    <img src={more} alt="" className='sys-list-item-btn-icon' />
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
}
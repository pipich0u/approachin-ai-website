import { motion } from 'motion/react'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import './index.css'
import { useNavigate } from 'react-router-dom';
import { trackButtonClick } from '@/utils/umami';
import { serviceText } from '../../textConfig';

export const ATaaSService = () => {
    const navigate = useNavigate();
    return <div className='ataas-svc-container'>
        <div className='ataas-svc-content'>
            <motion.div {...scrollInViewOnceProps} className='ataas-svc-title'>服务模式</motion.div>
            <motion.div {...scrollInViewOnceProps} className='ataas-svc-cards'>
                {serviceText.list.map((item, index) => (
                    <div className='ataas-svc-card' key={index}>
                        <h4 className='ataas-svc-card-title'>{item.title}</h4>
                        <p className='ataas-svc-card-desc'>{item.desc}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    </div>
}

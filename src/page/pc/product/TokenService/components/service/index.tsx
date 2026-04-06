import { motion } from 'motion/react'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import './index.css'
import { useNavigate } from 'react-router-dom';
import { trackButtonClick } from '@/utils/umami';
import { serviceText } from '../../textConfig';

export const TokenServiceService = () => {
    const navigate = useNavigate();
    return <div className='ts-svc-container'>
        <div className='ts-svc-content'>
            <motion.div {...scrollInViewOnceProps} className='ts-svc-title'>服务模式</motion.div>
            <motion.div {...scrollInViewOnceProps} className='ts-svc-cards'>
                {serviceText.list.map((item, index) => (
                    <div className='ts-svc-card' key={index}>
                        <h4 className='ts-svc-card-title'>{item.title}</h4>
                        <p className='ts-svc-card-desc'>{item.desc}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    </div>
}

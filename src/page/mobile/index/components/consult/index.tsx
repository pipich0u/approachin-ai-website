
import './index.css'
import { motion } from "motion/react"
import { scrollInViewSpringOnceProps } from '@/utils/motionConfig'
import { consultList } from '@/page/pc/index/textConfig';
import { useNavigate } from 'react-router-dom';
export default function PageConsult() {
    const navigator = useNavigate();

    return (
        <div className='mob-consult-container'>
            <motion.div {...scrollInViewSpringOnceProps} className='mob-consult-title'>{consultList.title}</motion.div>
            <motion.div {...scrollInViewSpringOnceProps} className='mob-consult-desc'>{consultList.desc}</motion.div>
        </div>
    )
}
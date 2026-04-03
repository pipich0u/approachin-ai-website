
import './index.css'
import { motion } from "motion/react"
import { scrollInViewSpringProps } from '@/utils/motionConfig'
import { consultList } from '@/page/pc/index/textConfig'
import { useNavigate } from 'react-router-dom'
import { trackButtonClick } from '@/utils/umami';
import { useExposureTracking } from '@/hooks/useExposureTracking';

interface Props {
    name?: string
}

export default function PageConsult({ name }: Props) {
    const navigator = useNavigate();

    // 曝光埋点 - 咨询区域（根据name区分不同页面）
    const exposureRef = useExposureTracking('咨询区域', name || '首页', { section: 'consult', name });

    return (
        <div className={`consult-container ${name || ''}`} ref={exposureRef}>
            <motion.div {...scrollInViewSpringProps} className='consult-title'>{consultList.title}</motion.div>
            <motion.div {...scrollInViewSpringProps} className='consult-desc'>{consultList.desc}</motion.div>
            <motion.button {...scrollInViewSpringProps} className='hero-btn hero-btn-primary' style={{ marginTop: '24px' }} onClick={() => {
                trackButtonClick('立即咨询', `${name || '首页'}咨询区域`, { href: '/contact', from: name || '首页' });
                navigator('/contact');
            }}>
                {consultList.btn}
            </motion.button>
        </div>
    )
}

import './index.css'
import { motion } from "motion/react"
import { scrollInViewSpringProps } from '@/utils/motionConfig'
import { consultList } from '@/page/textConfig'
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
        <div className={`consult-container ${name}`} ref={exposureRef}>
            <motion.div {...scrollInViewSpringProps} className='consult-title'>{consultList.title}</motion.div>
            <motion.div {...scrollInViewSpringProps} className='consult-desc'>{consultList.desc}</motion.div>

            {/* <motion.button {...scrollInViewSpringProps} className="consult-button">
                <span className="consult-text">立即咨询</span>
                <span className="consult-svg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 5 15 15"
                        fill="none"
                    >
                        <path xmlns="http://www.w3.org/2000/svg" d="M2.00014 13.0001L2 11.0002H18.1719L14.2222 7.05044L15.6364 5.63623L22.0004 12.0002L15.6364 18.3642L14.2222 16.9499L18.172 13.0002L2.00014 13.0001Z" fill="#6C3AE1" />
                    </svg>
                </span>
            </motion.button> */}
            <motion.button {...scrollInViewSpringProps} className='consult-button' onClick={() => {
                trackButtonClick('立即咨询', `${name || '首页'}咨询区域`, { href: '/contact', from: name || '首页' });
                navigator('/contact');
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" ></path>
                </svg>
                <span className="text-[#6C3AE1] bt-text">{consultList.btn}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" ></path>
                </svg>
            </motion.button>
        </div>
    )
}
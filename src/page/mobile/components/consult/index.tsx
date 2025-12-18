
import './index.css'
import { motion } from "motion/react"
import { scrollInViewSpringOnceProps } from '@/utils/motionConfig'
import { consultList } from '@/page/textConfig';
export default function PageConsult() {

    return (
        <div className='mob-consult-container'>
            <motion.div {...scrollInViewSpringOnceProps} className='mob-consult-title'>{consultList.title}</motion.div>
            <motion.div {...scrollInViewSpringOnceProps} className='mob-consult-desc'>{consultList.desc}</motion.div>
            <motion.button {...scrollInViewSpringOnceProps} className='mob-consult-button'>
                <span className="mob-consult-text">{consultList.btn}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="mob-arr-1" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" ></path>
                </svg>
            </motion.button>
        </div>
    )
}
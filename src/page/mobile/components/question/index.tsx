
import './index.css'
import { motion } from "motion/react";
import { scrollInViewSpringOnceProps } from "@/utils/motionConfig";
import { pageQuestionList } from '@/page/textConfig';
export default function PageQuestion() {

    return (
        <div className='mob-qt-container'>
            <motion.div {...scrollInViewSpringOnceProps} className='mob-qt-content'>
                <div className='mob-qt-title'>{pageQuestionList.title}</div>
            </motion.div>
        </div>
    );
}
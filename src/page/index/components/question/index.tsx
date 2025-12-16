
import './index.css'
import { motion } from "motion/react";
import { scrollInViewSpringProps } from "@/utils/motionConfig";
import { pageQuestionList } from '@/page/textConfig';
export default function PageQuestion() {

    return (
        <div className='qt-container'>
            <motion.div {...scrollInViewSpringProps} className='qt-content'>
                <div className='qt-title'>{pageQuestionList.title}</div>
                {/* <video
                    className="video-bg"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={audio} type="video/mp4" />
                </video> */}
            </motion.div>
        </div>
    );
}
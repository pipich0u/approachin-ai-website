
import './index.css'
import { motion } from "motion/react";
import { scrollInViewSpringProps } from "@/utils/motionConfig";
import { pageQuestionList } from '@/page/textConfig';
import { useEffect } from 'react';
import { trackPageView } from '@/utils/umami';

export default function PageQuestion() {
    // 跟踪页面浏览
    useEffect(() => {
        trackPageView('问题页面', { section: 'question' });
    }, []);

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
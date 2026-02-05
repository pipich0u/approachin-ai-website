
import './index.css'
import { motion } from "motion/react";
import { scrollInViewSpringProps } from "@/utils/motionConfig";
import { pageQuestionList } from '@/page/pc/index/textConfig';
import { useEffect } from 'react';
import { trackPageView } from '@/utils/umami';
import { useExposureTracking } from '@/hooks/useExposureTracking';

export default function PageQuestion() {
    // 曝光埋点
    const exposureRef = useExposureTracking('问题展示区域', '首页', { section: 'question' });

    // 跟踪页面浏览
    useEffect(() => {
        trackPageView('问题页面', { section: 'question' });
    }, []);

    return (
        <div ref={exposureRef} className='qt-container'>
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
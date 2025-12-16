
import './index.css'
import { motion } from "motion/react";
import { scrollInViewSpringProps } from "../../../../utils/motionConfig";
export default function PageQuestion() {

    return (
        <div className='qt-container'>
            <motion.div {...scrollInViewSpringProps} className='qt-content'>
                <div className='qt-title'>
                    AI落地是否还在为此烦恼？
                </div>
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
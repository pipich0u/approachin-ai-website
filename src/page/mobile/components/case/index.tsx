import './index.css'
import image1 from '@/assets/images/image_1.png'
import image2 from '@/assets/images/image_2.png'
import image3 from '@/assets/images/image_3.png'
import image4 from '@/assets/images/image_4.png'
import image5 from '@/assets/images/image_5.png'
import image6 from '@/assets/images/image_6.png'
import image7 from '@/assets/images/image_7.png'
import image8 from '@/assets/images/image_8.png'
import image9 from '@/assets/images/image_9.png'
import image10 from '@/assets/images/image_10.png'
import image11 from '@/assets/images/image_11.png'
import image12 from '@/assets/images/image_12.png'
import { motion } from "motion/react";
import { scrollInViewSpringProps } from "@/utils/motionConfig";
export default function PageCase() {
    const images = [image1, image2, image3, image4, image6, image5, image7, image8, image9, image10, image11, image12]

    return (
        <div className='mob-case'>
            <motion.div {...scrollInViewSpringProps} className='mob-case-title'>更多客户</motion.div>
            <motion.div className='mob-case-content' {...scrollInViewSpringProps}>
                <div className='mob-case-scroll-container'>
                    <div className='mob-case-scroll-track'>
                        {images.map((item, index) => (
                            <img src={item} alt="" key={`mob-original-${index}`} className='mob-item-img' />
                        ))}
                        {images.map((item, index) => (
                            <img src={item} alt="" key={`mob-duplicate-${index}`} className='mob-item-img' />
                        ))}
                    </div>
                </div>
                <div className='mob-case-mask-left'></div> 
                <div className='mob-case-mask-right'></div>
            </motion.div>
        </div>
    );
}
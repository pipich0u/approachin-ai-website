
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
import { scrollInViewSpringProps } from "../../motionConfig";
export default function PageCase() {
    const images = [image1, image2, image3, image4, image6, image5, image7, image8, image9, image10, image11, image12]

    return (
        <div className='case'>
            <motion.div {...scrollInViewSpringProps} className='case-title'>更多客户</motion.div>
            <motion.div className='case-content' {...scrollInViewSpringProps}>
                <div className='case-scroll-container'>
                    <div className='case-scroll-track'>
                        {images.map((item, index) => (
                            <img src={item} alt="" key={`original-${index}`} className='item-img' />
                        ))}
                        {images.map((item, index) => (
                            <img src={item} alt="" key={`duplicate-${index}`} className='item-img' />
                        ))}
                    </div>
                </div>
                <div className='case-mask-left'></div>
                <div className='case-mask-right'></div>
            </motion.div>
        </div>
    );
}

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

export default function PageCase() {
    const images = [image1, image2, image3, image4, image6, image5, image7, image8, image9, image10, image11, image12]
    return (
        <div className="section section-5">
            <div className='case'>
                <div className='case-title'>
                    <div className='case-title-1'>合作案例</div>
                    <div className='case-title-2'>剖析成功案例，解锁发展密码</div>
                </div>
                <div className='case-content '>
                    <div className='case-content-item'>
                        {
                            images.map((item, index) => {
                                return (
                                    <img src={item} alt="" key={index} className='item-img'/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
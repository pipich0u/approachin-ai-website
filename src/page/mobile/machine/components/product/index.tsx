import './index.css'
import { motion } from 'motion/react'
import { scrollInViewSpringOnceProps } from '@/utils/motionConfig'
import { machinProduct } from '@/page/pc/product/machine/textConfig'
import { useNavigate } from 'react-router-dom'
import { trackButtonClick } from '@/utils/umami'

export const MobMachineProduct = () => {
    const navigator = useNavigate()
    return <div className='mob-product-container'>
        <div className="mob-product-content">
            <motion.div {...scrollInViewSpringOnceProps} className="mob-product-title">{machinProduct.title}</motion.div>
            <motion.div {...scrollInViewSpringOnceProps} className="mob-product-box">
                {
                    machinProduct.list.map((item, index) => {
                        return <div className='mob-product-box-item' key={index}>
                            <div className='mob-product-box-item-top'>
                                <div className='mob-product-box-item-title'>{item.title}</div>
                                <div className='mob-product-box-item-desc'>{item.desc}</div>
                            </div>
                            <button className="mob-product-box-item-btn" onClick={() => {
                                trackButtonClick(machinProduct.buttonText, `Machine产品-${item.title}`);
                                if (item.open !=='') { window.open(item.open) }
                                else {
                                    navigator(item.herf)
                                }
                            }}>
                                <span className="mob-product-box-item-btn-text">{machinProduct.buttonText}</span>
                            </button>
                        </div>
                    })
                }
            </motion.div>
        </div>
    </div>
}
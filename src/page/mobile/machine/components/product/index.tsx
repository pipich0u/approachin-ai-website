import './index.css'
import { motion } from 'motion/react'
import { scrollInViewSpringOnceProps } from '@/utils/motionConfig'
import { machinProduct } from '@/page/pc/product/machine/textConfig'
import { Button } from 'antd'
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
                            <Button type='link' className="mob-product-box-item-btn" onClick={() => {
                                trackButtonClick(machinProduct.buttonText, `Machine产品-${item.title}`);
                                if (item.open) { window.open(item.open) }
                                else {
                                    navigator(item.herf)
                                }
                            }}>
                                <span className="mob-product-box-item-btn-text">{machinProduct.buttonText}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                                    <path d="M3.50014 13.0001L3.5 11.0002H16.6719L12.7222 7.05044L14.1364 5.63623L20.5004 12.0002L14.1364 18.3642L12.7222 16.9499L16.672 13.0002L3.50014 13.0001Z" fill="#806BFF" />
                                </svg>
                            </Button>
                        </div>
                    })
                }
            </motion.div>
        </div>
    </div>
}
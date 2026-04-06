import './index.css'
import { motion } from 'motion/react'
import { scrollInViewSpringOnceProps } from '@/utils/motionConfig'
import { machinProduct } from '../../textConfig'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { trackButtonClick } from '@/utils/umami'

export const MachineProduct = () => {
    const navigator = useNavigate()
    return <div className='product-container'>
        <div className="product-content">
            <motion.div {...scrollInViewSpringOnceProps} className="product-title">{machinProduct.title}</motion.div>
            <motion.div {...scrollInViewSpringOnceProps} className="product-box">
                {
                    machinProduct.list.map((item, index) => {
                        return <div className='product-box-item' key={index}>
                            <div className='product-box-item-top'>
                                <div className='product-box-item-title'>{item.title}</div>
                                <div className='product-box-item-desc'>{item.desc}</div>
                            </div>
                            <Button type='link' className="product-box-item-btn" onClick={() => {
                                trackButtonClick(machinProduct.buttonText, `Machine产品-${item.title}`);
                                if (item.open) { window.open(item.open) }
                                else {
                                    navigator(item.herf)
                                }
                            }}>
                                <span className="product-box-item-btn-text">{machinProduct.buttonText}</span>
                            </Button>
                        </div>
                    })
                }
            </motion.div>
        </div>
    </div>
}
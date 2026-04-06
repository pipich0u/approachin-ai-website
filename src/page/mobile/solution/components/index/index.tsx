import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps, scrollInViewOnceProps } from '@/utils/motionConfig'
import { solutionTextConfig } from '@/page/pc/solution/textConfig'
import { useNavigate } from 'react-router-dom'
import { trackButtonClick } from '@/utils/umami'

export const MobSolutionIndex = () => {
    const navigate = useNavigate()
    const { index, tabList } = solutionTextConfig

    return <>
        <div className='mob-solution-banner'>
            <div className='mob-solution-banner-inner'>
                <motion.div {...initialLoadProps} className='mob-solution-banner-title'>{index.title}</motion.div>
                <motion.p {...initialLoadProps} className='mob-solution-banner-desc'>{index.desc}</motion.p>
                <motion.button {...initialLoadProps} className='mob-solution-banner-btn' onClick={() => {
                    trackButtonClick(index.buttonText, '移动端Solution首屏');
                    navigate('/contact');
                }}>
                    {index.buttonText}
                </motion.button>
            </div>
        </div>

        <div className='mob-solution-cases'>
            <motion.div {...scrollInViewOnceProps} className='mob-solution-cases-title'>行业案例</motion.div>
            <div className='mob-solution-case-list'>
                {tabList.map((item) => (
                    <motion.div {...scrollInViewOnceProps} className='mob-solution-case-card' key={item.id}>
                        <div className='mob-solution-case-label'>{item.label}</div>
                        <div className='mob-solution-case-title'>{item.title}</div>
                        <div className='mob-solution-case-desc'>{item.desc}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    </>
}

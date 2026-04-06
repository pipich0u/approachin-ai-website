import { motion } from 'motion/react'
import './index.css'
import { initialLoadProps } from '@/utils/motionConfig'
import { trackButtonClick } from '@/utils/umami'
import { solutionTextConfig } from '../../textConfig'
import { useNavigate } from 'react-router-dom'

export const SolutionIndex = () => {
    const navigate = useNavigate();
    const { index } = solutionTextConfig;

    return <div className='solution-index-container'>
        <div className='solution-index-content'>
            <div className='solution-index-inner'>
                <motion.h2 {...initialLoadProps} className='solution-index-title'>{index.title}</motion.h2>
                <motion.p {...initialLoadProps} className='solution-index-desc'>
                    {index.desc}
                </motion.p>
                <motion.button
                    {...initialLoadProps}
                    className='hero-btn hero-btn-primary'
                    onClick={() => {
                        trackButtonClick(index.buttonText, 'Solution首屏');
                        navigate('/contact');
                    }}
                >
                    {index.buttonText}
                </motion.button>
            </div>
        </div>
    </div>
}
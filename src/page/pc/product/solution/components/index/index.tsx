import { motion } from 'motion/react'
import './index.css'
import { initialLoadProps } from '@/utils/motionConfig'
import { trackButtonClick } from '@/utils/umami'
import inter from '@/assets/images/img/intel-logo.png'
import { solutionTextConfig } from '../../textConfig'

export const SolutionIndex = () => {
    const { index } = solutionTextConfig;
    const arr = [1, 2, 3, 4, 5, 6]

    return <div className='solution-index-container'>
        <div className='solution-index-content'>
            <div className='solution-index-inner'>
                <motion.div {...initialLoadProps} className='solution-index-title'>{index.title}</motion.div>
                <motion.div {...initialLoadProps} className='solution-index-desc'>
                    {index.desc}
                </motion.div>
                <motion.button
                    {...initialLoadProps}
                    className='animated-button w-[150px] rounded-lg bg-[#806BFF] mt-10!'
                // onClick={() => trackButtonClick(index.buttonText, 'AMaaS第1屏', { slideIndex: 0 })}
                >
                    <span className="text-white font-[380] bt-text">{index.buttonText}</span>
                </motion.button>
            </div>
        </div>
        <div className='solution-index-bottom'>
            <motion.div {...initialLoadProps} className='solution-index-bottom-inner'>
                {
                    arr.map((item, idx) => (
                        <div className='solution-index-bottom-items'>
                            <img src={inter} alt="" className='selectNone' />
                        </div>
                    ))
                }
            </motion.div>
        </div>
    </div>
} 
import { motion } from 'motion/react'
import './index.css'
import { initialLoadProps } from '@/utils/motionConfig'
import { trackButtonClick } from '@/utils/umami'
import inter from '@/assets/images/img/intel-logo.png'
export const SolutionIndex = () => {

    const arr = [1, 2, 3, 4, 5, 6]

    return <div className='solution-index-container'>
        <div className='solution-index-content'>
            <div className='solution-index-inner'>
                <div className='solution-index-title'>解决方案</div>
                <div className='solution-index-desc'>
                    趋境科技依托丰富的经验，深入理解多种实际应月用场景，提供一系列成熟且易于实施的解决方案，为更加多元化的企业网络安全体系建设保驾护航。
                </div>
                <motion.button
                    {...initialLoadProps}
                    className='animated-button w-[150px] rounded-lg bg-[#806BFF] mt-10!'
                // onClick={() => trackButtonClick(index.buttonText, 'AMaaS第1屏', { slideIndex: 0 })}
                >
                    <span className="text-white font-[380] bt-text">立即咨询</span>
                </motion.button>
            </div>
        </div>
        <div className='solution-index-bottom'>
            <div className='solution-index-bottom-inner'>
                {
                    arr.map((item, idx) => (
                        <div className='solution-index-bottom-items'>
                            <img src={inter} alt="" />
                        </div>
                    ))
                }

            </div>
        </div>
    </div>
} 
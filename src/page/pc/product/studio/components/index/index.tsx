import './index.css'
import { studioTextConfig } from '../../textConfig'

export const StudioIndex = () => {

    return <div className='studio-index-container'>
        <div className='studio-index-content'>
            <div className='studio-index-title'>{studioTextConfig.index.title}</div>
            <div className='studio-index-desc'>{studioTextConfig.index.desc}</div>
            <div className='studio-index-btnbox'>
                {/* <motion.button {...initialLoadProps}
                    className='animated-button w-[150px] rounded-lg bg-[#806BFF]'
                // onClick={() => trackButtonClick(index.buttonText, 'AMaaS第1屏', { slideIndex: 0 })}
                >
                    <span className="text-white font-[380] bt-text">{studioTextConfig.index.buttons[0].text}</span>
                </motion.button> */}
                {/* <motion.button {...initialLoadProps}
                    className='animated-button studio-btn w-[150px] rounded-lg bg-[#333]'
                // onClick={() => trackButtonClick(index.buttonText, 'AMaaS第1屏', { slideIndex: 0 })}
                >
                    <span className="text-white font-[380] bt-text">{studioTextConfig.index.buttons[1].text}</span>
                </motion.button> */}
            </div>
        </div>
    </div>
}
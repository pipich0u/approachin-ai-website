
import './index.css'
import { motion } from 'motion/react';
import { initialLoadProps } from '@/utils/motionConfig';
import { indexPageList } from '@/page/textConfig';
export default function PageIndex() {

    return (
        <div className="mob-index">
            <div className="mob-title">
                <motion.div {...initialLoadProps} className='mob-title-top'>{indexPageList[0].title} <div className='mob-title-top-color'>{indexPageList[0].color}</div> </motion.div>
                <motion.div {...initialLoadProps} className='mob-title-center'>
                    {indexPageList[0].desc.slice(0, 15)}<br />{indexPageList[0].desc.slice(15)}
                </motion.div>
                <motion.button {...initialLoadProps} className='mob-title-btn'>
                    <span>{indexPageList[0].ask}</span>
                </motion.button>
                <motion.div {...initialLoadProps} className='mob-index-bottom'>
                    <div className='mob-index-bottom-item'>
                        <div className='mob-index-bottom-number'>{indexPageList[0].list[0].item}</div>
                        <div className='mob-index-bottom-text'>
                            <div>{indexPageList[0].list[0].desc[0]}</div> <div>{indexPageList[0].list[0].desc[1]}</div>
                        </div>
                    </div>
                    <div className='mob-index-bottom-item'>
                        <div className='mob-index-bottom-number'>{indexPageList[0].list[1].item}</div>
                        <div className='mob-index-bottom-text'>
                            <div>{indexPageList[0].list[1].desc[0]}</div><div>{indexPageList[0].list[1].desc[1]}</div>
                        </div>
                    </div>
                    <div className='mob-index-bottom-item'>
                        <div className='mob-index-bottom-number'>{indexPageList[0].list[2].item}</div>
                        <div className='mob-index-bottom-text'>
                            <div>{indexPageList[0].list[2].desc[0]}</div> <div>{indexPageList[0].list[2].desc[1]}</div>
                        </div>
                    </div>
                    <div className='mob-index-bottom-item'>
                        <div className='mob-index-bottom-number'>{indexPageList[0].list[3].item}</div>
                        <div className='mob-index-bottom-text'>
                            <div>{indexPageList[0].list[3].desc[0]}</div> <div>{indexPageList[0].list[3].desc[1]}</div>
                        </div>
                    </div>
                    <div className='mob-index-bottom-item'>
                        <div className='mob-index-bottom-number'>{indexPageList[0].list[4].item}</div>
                        <div className='mob-index-bottom-text'>
                            <div>{indexPageList[0].list[4].desc[0]}</div> <div>{indexPageList[0].list[4].desc[1]}</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div >
    );
}
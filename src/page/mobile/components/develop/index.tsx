import './index.css'
import { IconFont } from '@/utils/antdUtils';
import { depList } from '@/page/textConfig';
import { motion } from "motion/react"
import { scrollInViewSpringOnceProps } from '@/utils/motionConfig'
export default function DevelopPage() {
    return (
        <div className='mob-develop-box'>
            <div className='mob-dep-container'>
                <motion.div className="mob-dep-title" {...scrollInViewSpringOnceProps}>{depList.title}</motion.div>
                <motion.div {...scrollInViewSpringOnceProps} className='mob-dep-tabbox'>
                    {
                        depList.list.map((item, index) =>
                            <>
                                <motion.div
                                    key={`active-${index}`}
                                    {...scrollInViewSpringOnceProps}
                                    className={`mob-dep-tab-items`}
                                >
                                    <div className='mob-dep-tab-item-icon'>
                                        <IconFont type={item.icon} />
                                    </div>
                                    <div className='mob-dep-tab-item-content'>
                                        <div className="mob-dep-tab-item-title">{item.name}</div>
                                        <div className="mob-dep-tab-item-desc">{item.desc}</div>
                                    </div>
                                    {<div className={`mob-dev-more`} >了解更多</div>}
                                </motion.div>
                            </>
                        )
                    }
                </motion.div >
            </div >
        </div >
    );
}

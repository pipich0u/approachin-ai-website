import './index.css'
import { motion } from 'motion/react'
import { scrollInViewSpringOnceProps } from '@/utils/motionConfig'
import { MoonSourceList } from '../../textConfig'
import { useState } from 'react'
const PER_ROW = 20
const MAX_ROW = 6
const MAX_COUNT = PER_ROW * MAX_ROW
interface MoonSourceProps {
    list: any[]
}

export const MoonSource = ({ list }: MoonSourceProps) => {
    const [expanded, setExpanded] = useState(false)

    const visibleList = expanded ? list : list.slice(0, MAX_COUNT)
    return <div className='moon-source-container'>
        <motion.div {...scrollInViewSpringOnceProps} className='moon-source-top'>
            <div className='moon-source-title'>{MoonSourceList.title}</div>
            <div className='moon-source-desc'>{MoonSourceList.desc}</div>
        </motion.div>
        <motion.div {...scrollInViewSpringOnceProps} className='moon-source-bottom'>
            {visibleList.map((contributor) => (
                <div key={contributor.id} className='contributor-item' title={contributor.login}>
                    <img
                        src={contributor.avatar_url}
                        alt={contributor.login}
                        className='contributor-avatar'
                    />
                    <span className='contributor-name'>{contributor.login}</span>
                </div>
            ))}
        </motion.div>
        {/* {list.length > MAX_COUNT && (
            <div
                className='moon-source-more'
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? '收起' : '更多'}
            </div>
        )} */}
    </div>
}
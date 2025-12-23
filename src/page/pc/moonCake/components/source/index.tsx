import './index.css'
import { motion } from 'motion/react'
import { scrollInViewSpringOnceProps } from '@/utils/motionConfig'

interface MoonSourceProps {
    list: any[]
}

export const MoonSource = ({ list }: MoonSourceProps) => {

    return <div className='moon-source-container'>
        <motion.div {...scrollInViewSpringOnceProps} className='moon-source-top'>
            <div className='moon-source-title'>开源社区</div>
            <div className='moon-source-desc'>众多开发者、用户和社区成员共同构建繁荣生态</div>
        </motion.div>
        <motion.div {...scrollInViewSpringOnceProps} className='moon-source-bottom'>
            {list.map((contributor) => (
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
    </div>
}
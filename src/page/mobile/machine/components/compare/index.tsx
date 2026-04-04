import './index.css'
// import img from '@/assets/images/img/machine_compare.webp'
import { motion } from 'motion/react'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
export const MobMachineCompare = () => {

    return <div className='mob-mac_compare_container'>
        <div className='mob-mac_compare_content'>
            <motion.div {...scrollInViewOnceProps} className='mob-mac_compare_title'>相比于基于开源引擎的一体机</motion.div>
            {/* <motion.img {...scrollInViewOnceProps} src={img} alt="" className='mob-mac_compare_img'/> */}
            <div className='mob-mac_cardbox'>
                <div className='mob-mac-card'>
                    <div className='mob-mac-card-header'>
                        开源自搭
                    </div>
                    <div className='mob-mac-card-content'>
                        <div className='mob-mac-card-items'>确定性：0%</div>
                        <div className='mob-mac-card-items'>性价比：表面免费，实则昂贵</div>
                        <div className='mob-mac-card-items'>国产化：功能可用</div>
                        <div className='mob-mac-card-items'>模型速度：依赖社区</div>
                        <div className='mob-mac-card-items'>责任：自己承担</div>
                        <div className='mob-mac-card-items'>适用：实验研究</div>
                    </div>
                </div>
                <div className='mob-mac-card'>
                    <div className='mob-mac-card-header'>
                        组装型一体机
                    </div>
                    <div className='mob-mac-card-content'>
                        <div className='mob-mac-card-items'>确定性：硬件部分</div>
                        <div className='mob-mac-card-items'>性价比：一体溢价</div>
                        <div className='mob-mac-card-items'>国产化：浅层适配</div>
                        <div className='mob-mac-card-items'>模型速度：30 天延迟</div>
                        <div className='mob-mac-card-items'>责任：厂商推诿</div>
                        <div className='mob-mac-card-items'>适用：演示项目</div>
                    </div>
                </div>
                <div className='mob-mac-card '>
                    <div className='mob-mac-card-header'>
                        企业级一体机
                    </div>
                    <div className='mob-mac-card-content'>
                        <div className='mob-mac-card-items'>确定性：100% 全栈</div>
                        <div className='mob-mac-card-items'>性价比：3 年省 425 万</div>
                        <div className='mob-mac-card-items'>国产化：深度优化 + 全栈认证</div>
                        <div className='mob-mac-card-items'>模型速度：48 小时</div>
                        <div className='mob-mac-card-items'>责任：单一兜底</div>
                        <div className='mob-mac-card-items'>适用：生产核心业务</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

import { IconFont } from '@/utils/antdUtils'
import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'

export const MoonBanner = () => {
    return <div className="moon-banner-container">
        <motion.div {...initialLoadProps} className='mo-ban-con'>
            <div className='mo-con-tag'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9.75392 12.7056V14.2519H13.5039V15.7519H4.50391V14.2519H8.25392V12.7056C5.29417 12.3365 3.00391 9.81169 3.00391 6.75195V2.25195H15.0039V6.75195C15.0039 9.81169 12.7136 12.3365 9.75392 12.7056ZM4.50391 3.75195V6.75195C4.50391 9.23727 6.51862 11.2519 9.00392 11.2519C11.4892 11.2519 13.5039 9.23727 13.5039 6.75195V3.75195H4.50391ZM0.753906 3.75195H2.25391V6.75195H0.753906V3.75195ZM15.7539 3.75195H17.2539V6.75195H15.7539V3.75195Z" fill="#6147FF" />
                </svg>
                <div className='mo-con-tag-text'>趋境科技旗下开源项目</div>
            </div>
            <div className='mo-con-title'>Mooncake 大模型推理框架</div>
            <div className='mo-con-desc'>由趋境科技与清华大学 KVCache.AI 团队联合开源的高性能异构推理框架，业界首创全系统推理架构，让大模型在更低算力、更灵活的硬件架构上高效运行。</div>
            <div className='mo-con-btnbox'>
                <button className='mo-con-btn mo-btn-down'>
                    <IconFont type="icon-qxz" className='mo-btn-icon' />
                    <span className='mo-btn-text'>免费下载</span>
                </button>
                <button className='mo-con-btn' onClick={() => window.open('https://github.com/kvcache-ai/Mooncake')}>
                    <IconFont type="icon-github" className='mo-btn-icon' />
                    <span className='mo-btn-text'>Github</span>
                </button>
                <button className='mo-con-btn'>
                    <IconFont type="icon-model" className='mo-btn-icon' />
                    <span className='mo-btn-text'>模型对比</span>
                </button>
            </div>
        </motion.div >
    </div>
}
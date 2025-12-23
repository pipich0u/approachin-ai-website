import './index.css'
import { motion } from 'motion/react'
import { scrollInViewSpringOnceProps } from '@/utils/motionConfig'
import { useState, useRef } from 'react'

export const MoonFast = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const tabs = [
        { id: 0, label: '安装 Transfer Engine', videoUrl: 'https://example.com/video1.mp4' },
        { id: 1, label: '启动 Mooncake Store', videoUrl: 'https://example.com/video2.mp4' },
        { id: 2, label: 'vLLM 集成示例', videoUrl: 'https://example.com/video3.mp4' }
    ]

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const handleVideoClick = () => {
        togglePlay()
    }

    return <div className='moon-fast-container'>
        <div className='moon-fast-content'>
            <motion.div {...scrollInViewSpringOnceProps} className='mo-fa-nav'>
                <div className='mo-fa-title'>快速开始</div>
                <div className='mo-fa-desc'>Mooncake 吞吐量提升效果</div>
            </motion.div >
            <div className='mo-fa-tabbox'>
                <div className='mo-fa-tab-left'>
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`mo-fa-tab-item ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => {
                                setActiveTab(tab.id)
                                setIsPlaying(false)
                            }}
                        >
                            <div>{tab.label}</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M2.00014 13.0003L2 11.0004H18.1719L14.2222 7.05068L15.6364 5.63647L22.0004 12.0004L15.6364 18.3644L14.2222 16.9501L18.172 13.0004L2.00014 13.0003Z" fill="#6C3AE1" />
                            </svg>
                        </div>
                    ))}
                </div>
                <div className='mo-fa-tab-right' onClick={handleVideoClick}>
                    <video
                        ref={videoRef}
                        key={activeTab}
                        className='mo-fa-video'
                        src={tabs[activeTab].videoUrl}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                    >
                        您的浏览器不支持视频播放
                    </video>
                    {!isPlaying && (
                        <div className='mo-fa-play-button'>
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                                <circle cx="40" cy="40" r="40" fill="rgba(255, 255, 255, 0.9)" />
                                <path d="M32 25L57 40L32 55V25Z" fill="#1B1D22" />
                            </svg>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
}
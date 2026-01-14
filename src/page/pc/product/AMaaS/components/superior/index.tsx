import './index.css'
import { motion, AnimatePresence } from 'motion/react'
import amaas from '@/assets/images/img/amaas.png'
import { useEffect, useRef, useState } from 'react'

export const AMaasSuperior = () => {

    const tabItems = [
        {
            id: 'tab1',
            label: '多卡异构，软件定义AI Infr',
            desc: '兼容主流国产、非国产硬件，CPU+GPU、GPU+GPU异构推理',
        },
        {
            id: 'tab2',
            label: '极致的推理性能',
            desc: '自研企业级KLLM推理引擎，并发、吞吐、TTFT等性能跃升',
        },
        {
            id: 'tab3',
            label: '模型天级更新',
            desc: '天级完成各厂商新发布模型的适配及上线',
        }
    ]

    const [activeTab, setActiveTab] = useState(tabItems[0].id)
    const [inView, setInView] = useState(false)
    const [hovering, setHovering] = useState(false)

    const timerRef = useRef<number | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)

    const stopAuto = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current)
            timerRef.current = null
        }
    }

    const startAuto = () => {
        stopAuto()
        timerRef.current = window.setTimeout(() => {
            setActiveTab(prev => {
                const index = tabItems.findIndex(i => i.id === prev)
                return tabItems[(index + 1) % tabItems.length].id
            })
        }, 8000)
    }

    /** 视口监听 */
    useEffect(() => {
        if (!containerRef.current) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting)
            }, { threshold: 0.3 }
        )
        observer.observe(containerRef.current)
        return () => observer.disconnect()
    }, [])

    /** 自动轮播控制中心 */
    useEffect(() => {
        if (inView && !hovering) {
            startAuto()
        } else {
            stopAuto()
        }

        return stopAuto
    }, [inView, hovering, activeTab])

    return (
        <div ref={containerRef} className='amaas-superior-container' >
            <div className='amaas-sup-content'>
                <div className="amaas-sup-title">AMaaS产品优势</div>
                <div className='amaas-sup-box'>
                    <div className='amaas-sup-tab'>
                        <div className='amaas-sup-nav'>
                            <div className='sup-active'
                                style={{
                                    top: tabItems.findIndex(item => item.id === activeTab) * 55 + 'px'
                                }}
                            />
                            {tabItems.map(item => (
                                <div key={item.id} onClick={() => setActiveTab(item.id)}
                                    className={`amaas-sup-tab-items ${item.id === activeTab ? 'item-active' : ''}`}
                                    onMouseEnter={() => setHovering(true)}
                                    onMouseLeave={() => setHovering(false)}
                                >
                                    <div className='amaas-sup-tab-title'>{item.label}</div>
                                    <div className='amaas-sup-tab-desc'>{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='amaas-sup-tab-info'
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                            <img src={amaas} alt="" />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div >
    )
}

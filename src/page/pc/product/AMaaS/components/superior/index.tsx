import './index.css'
import { motion, AnimatePresence } from 'motion/react'
import amaas from '@/assets/images/img/amaas.png'
import { useEffect, useRef, useState } from 'react'
import { amaasTextConfig } from '../../textConfig'

export const AMaasSuperior = () => {
    const { superior } = amaasTextConfig;
    const tabItems = superior.tabItems;

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
                <div className="amaas-sup-title">{superior.title}</div>
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

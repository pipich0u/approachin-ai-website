import { motion } from 'motion/react'
import './index.css'
import { scrollInViewSpringProps } from '@/utils/motionConfig'
import { StudioTabList, studioTextConfig } from '../../textConfig'
import { IconFont } from '@/utils/antdUtils'
import { useEffect, useRef, useState } from 'react'
import tabimg from '@/assets/images/img/studio_tabrig.png'
import { trackEvent } from '@/utils/umami'
import { useNavigate } from 'react-router-dom'

export const StudioTab = () => {
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState(1);
    const navRef = useRef<HTMLDivElement>(null);
    const [underline, setUnderline] = useState({ left: 0, width: 0 });
    const navigate = useNavigate()
    const handleTabClick = (id: number) => {
        setDirection(id > active ? 1 : -1);
        setActive(id);
        trackEvent('tab-switch', {
            tabName: StudioTabList.tablist[id].name,
            tabId: id,
            location: 'Studio产品能力'
        });
    };

    useEffect(() => {
        const updateUnderline = () => {
            if (!navRef.current) return;
            const tabs = navRef.current.querySelectorAll(".studio-tab-item");
            const current = tabs[active] as HTMLElement;

            if (current) {
                const rect = current.getBoundingClientRect();
                const parentRect = navRef.current.getBoundingClientRect();
                setUnderline({
                    left: rect.left - parentRect.left,
                    width: rect.width
                });
            }
        };

        updateUnderline();
        window.addEventListener('resize', updateUnderline);
        return () => window.removeEventListener('resize', updateUnderline);
    }, [active]);


    return <div className='studio-tab-container'>
        <div className='studio-tab-content'>
            <motion.div {...scrollInViewSpringProps} className='studio-tab-title'>{studioTextConfig.tab.title}</motion.div>
            <div className='studio-tab-box'>
                <motion.div {...scrollInViewSpringProps} className='studio-tabbar' ref={navRef}>
                    {StudioTabList.tablist.map((item) => (
                        <div key={item.id} onClick={() => handleTabClick(item.id)}
                            className={`studio-tab-item ${active === item.id ? "active" : ""}`}>
                            <IconFont type={`icon-${item.icon}`} style={{ fontSize: '18px' }} className="mr-2.5"></IconFont>
                            {item.name}
                        </div>
                    ))}
                    <motion.div
                        className="studio-tab-underline"
                        animate={{ left: underline.left, width: underline.width }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    />
                </motion.div>
                <motion.div {...scrollInViewSpringProps} className="studio-tabpanel">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, x: direction * 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction * -50 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="studio-cont-box"
                    >
                        <div className='studio-cont-box-left'>
                            <div className='studio-cont-box-left-title'>{StudioTabList.tablist[active].name}</div>
                            {StudioTabList.tablist[active].desc !== '' &&
                                <div className='studio-cont-box-desc'>
                                    {StudioTabList.tablist[active].desc}
                                </div>}
                            <div className='studio-cont-box-left-list'>
                                {
                                    StudioTabList.tablist[active].info.map((item, idx) => {
                                        return <>
                                            <li key={idx}>{item.title}</li>
                                            {item.content !== '' && <div key={idx + 'desc'} className='studio-cont-box-desc'>{item.content}</div>}
                                        </>
                                    })
                                }
                            </div>
                        </div>
                        <div className='studio-cont-box-right'>
                            <img src={StudioTabList.tablist[active].img} alt="Tab Image" className='selectNone' />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </div >
}
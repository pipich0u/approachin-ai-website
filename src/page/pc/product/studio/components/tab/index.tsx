import { motion } from 'motion/react'
import './index.css'
import { scrollInViewSpringProps } from '@/utils/motionConfig'
import { StudioTabList } from '../../textConfig'
import { IconFont } from '@/utils/antdUtils'
import { useEffect, useRef, useState } from 'react'
import tabimg from '@/assets/images/img/studio_tabrig.png'

export const StudioTab = () => {
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState(1);
    const navRef = useRef<HTMLDivElement>(null);
    const [underline, setUnderline] = useState({ left: 0, width: 0 });

    const handleTabClick = (id: number) => {
        setDirection(id > active ? 1 : -1);
        setActive(id);
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
            <motion.div {...scrollInViewSpringProps} className='studio-tab-title'>产品能力</motion.div>
            <div className='studio-tab-box'>
                <motion.div {...scrollInViewSpringProps} className='studio-tabbar' ref={navRef}>
                    {StudioTabList.tablist.map((item) => (
                        <div
                            key={item.id}
                            className={`studio-tab-item ${active === item.id ? "active" : ""}`}
                            onClick={() => handleTabClick(item.id)}
                        >
                            <IconFont type={`icon-${item.icon}`} style={{ fontSize: '18px' }} className="mr-1"></IconFont>
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
                            <div className='studio-tab-learn'>
                                <div className='studio-tab-learn-text'>立即咨询</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#806BFF">
                                    <path d="M3.50014 13.0001L3.5 11.0002H16.6719L12.7222 7.05044L14.1364 5.63623L20.5004 12.0002L14.1364 18.3642L12.7222 16.9499L16.672 13.0002L3.50014 13.0001Z" fill="#806BFF" />
                                </svg>
                            </div>
                        </div>
                        <div className='studio-cont-box-right'>
                            <img src={tabimg} alt="Tab Image" className='selectNone' />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </div >
}
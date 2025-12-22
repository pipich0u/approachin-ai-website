import "./index.css";
import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { scrollInViewSpringProps } from "../../../../../utils/motionConfig";
import { IconFont } from "@/utils/antdUtils";
import { PageTabList } from '@/page/textConfig';

export default function PageTab() {
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
            const tabs = navRef.current.querySelectorAll(".tab-item");
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

    return (
        <div className="tab-page">
            <div className="tab-container">
                <motion.div {...scrollInViewSpringProps} className="tab-title">
                    {PageTabList.title}
                </motion.div>

                <div className="tab-box">
                    <motion.div {...scrollInViewSpringProps} className="tab-nav" ref={navRef}>
                        {PageTabList.tablist.map((item) => (
                            <div
                                key={item.id}
                                className={`tab-item ${active === item.id ? "active" : ""}`}
                                onClick={() => handleTabClick(item.id)}
                            >
                                <IconFont type={`icon-${item.icon}`} style={{ fontSize: '18px' }} className="mr-1"></IconFont>
                                {item.name}
                            </div>
                        ))}
                        <motion.div
                            className="tab-underline"
                            animate={{ left: underline.left, width: underline.width }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        />
                    </motion.div>

                    <motion.div {...scrollInViewSpringProps} className="tab-cont">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, x: direction * 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction * -50 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="tab-cont-box"
                        >
                            <div className="tab-cont-left">
                                <div className="tab-cont-left-top">
                                    <div className="tab-cont-left-name">{PageTabList.tablist[active].name}</div>
                                    <div className="tab-cont-left-desc">{PageTabList.tablist[active].desc}</div>
                                </div>
                                <motion.button className='tab-cont-left-btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" ></path>
                                    </svg>
                                    <span className="text-white font-[380] bt-text">了解详情</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" ></path>
                                    </svg>
                                </motion.button>
                            </div>
                            <div className="tab-cont-right">
                                {
                                    PageTabList.tablist[active].info.map((items, indexs) => {
                                        return (
                                            <div className="tab-cont-right-box" key={indexs}>
                                                <div className="tab-cont-right-box-title">{items.title}</div>
                                                <div className="tab-cont-right-box-list mt-2.5">
                                                    {
                                                        items.content.map((i) => {
                                                            return <div className="tab-cont-rig-li">
                                                                <IconFont type={items.icon} style={{ fontSize: '20px', color: '#333' }} className="mr-1"></IconFont>
                                                                <div className="tab-cont-rig-li-text">{i}</div>
                                                            </div>
                                                        })
                                                    }

                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

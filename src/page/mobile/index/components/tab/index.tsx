import "./index.css";
import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { scrollInViewSpringOnceProps } from "@/utils/motionConfig";
import { IconFont } from "@/utils/antdUtils";
import { PageTabList } from '@/page/pc/index/textConfig';
import { trackButtonClick } from '@/utils/umami';
import { useExposureTracking } from '@/hooks/useExposureTracking';

export default function PageTab() {
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState(1);
    const navRef = useRef<HTMLDivElement>(null);
    const [underline, setUnderline] = useState({ left: 0, width: 0 });

    // 曝光埋点 - 移动端首页Tab区域
    const exposureRef = useExposureTracking('Tab切换区域', '移动端首页', { section: 'tab' });

    const handleTabClick = (id: number) => {
        const tabName = PageTabList.tablist[id].name;
        trackButtonClick(`移动端Tab切换-${tabName}`, '移动端首页Tab区域', { tabId: id, tabName });
        setDirection(id > active ? 1 : -1);
        setActive(id);
    };

    useEffect(() => {
        const updateUnderline = () => {
            if (!navRef.current) return;
            const tabs = navRef.current.querySelectorAll(".mob-tab-item");
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
        <div className="mob-tab-page" ref={exposureRef}>
            <div className="mob-tab-container">
                <motion.div {...scrollInViewSpringOnceProps} className="mob-tab-title">
                    {PageTabList.title}
                </motion.div>

                <div className="mob-tab-box">
                    <motion.div {...scrollInViewSpringOnceProps} className="mob-tab-nav-box">
                        <div className="mob-tab-nav" ref={navRef}>
                            {PageTabList.tablist.map((item) => (
                                <div
                                    key={item.id}
                                    className={`mob-tab-item ${active === item.id ? "active" : ""}`}
                                    onClick={() => handleTabClick(item.id)}
                                >
                                    <IconFont type={`icon-${item.icon}`} className="mob-tab-item-icon mr-1"></IconFont>
                                    {item.name}
                                </div>
                            ))}
                            <motion.div
                                className="mob-tab-underline"
                                animate={{ left: underline.left, width: underline.width }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            />
                        </div>
                    </motion.div>

                    <motion.div {...scrollInViewSpringOnceProps} className="mob-tab-cont">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, x: direction * 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction * -50 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="mob-tab-cont-box"
                            style={
                                {
                                    background: `url(${PageTabList.tablist[active].img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }
                            }
                        >
                            <div className="mob-tab-cont-box-top">
                                <div className="mob-tab-cont-box-name">{PageTabList.tablist[active].name}</div>
                                <div className="mob-tab-cont-box-desc">{PageTabList.tablist[active].desc}</div>
                            </div>
                            <div className="mob-tab-cont-bottom">
                                {
                                    PageTabList.tablist[active].info.map((items, indexs) => {
                                        return (
                                            <div className="mob-tab-cont-bottom-box" key={indexs}>
                                                <div className="mob-tab-cont-bottom-title">{items.title}</div>
                                                <div className="mob-tab-cont-bottom-list">
                                                    {
                                                        items.content.map((i) => {
                                                            return <div className="mob-tab-cont-bottom-li">
                                                                <IconFont type={items.icon} className="mob-tab-cont-bottom-icon" style={{ color: '#D2BFFF' }}></IconFont>
                                                                <div className="mob-tab-cont-bottom-li-text">{i}</div>
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

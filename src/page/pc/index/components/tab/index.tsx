import "./index.css";
import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { scrollInViewSpringProps } from "../../../../../utils/motionConfig";
import { IconFont } from "@/utils/antdUtils";
import { PageTabList } from '@/page/pc/index/textConfig';
import { trackButtonClick } from '@/utils/umami';
import { useExposureTracking } from '@/hooks/useExposureTracking';
import { url } from "inspector";
import { useNavigate } from "react-router-dom";

export default function PageTab() {
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState(1);
    const navRef = useRef<HTMLDivElement>(null);
    const [underline, setUnderline] = useState({ left: 0, width: 0 });
    const navigate =useNavigate()
    // 曝光埋点 - 首页Tab区域
    const exposureRef = useExposureTracking('Tab切换区域', '首页', { section: 'tab' });

    const handleTabClick = (id: number) => {
        const tabName = PageTabList.tablist[id].name;
        trackButtonClick(`Tab切换-${tabName}`, '首页Tab区域', { tabId: id, tabName });
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
        <div className="tab-page" ref={exposureRef}>
            <div className="tab-container">
                <motion.div {...scrollInViewSpringProps} className="tab-title">
                    {PageTabList.title}
                </motion.div>

                <div className="tab-box">
                    <motion.div {...scrollInViewSpringProps} className="tab-nav" ref={navRef}>
                        <motion.div
                            className="tab-pill"
                            animate={{ left: underline.left, width: underline.width }}
                            transition={{ type: "spring", stiffness: 300, damping: 28 }}
                        />
                        {PageTabList.tablist.map((item) => (
                            <div
                                key={item.id}
                                className={`tab-item ${active === item.id ? "active" : ""}`}
                                onClick={() => handleTabClick(item.id)}
                            >
                                {item.name}
                            </div>
                        ))}
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
                            <div className="tab-cont-left" style={
                                {
                                    background:`url(${PageTabList.tablist[active].img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }
                            }>
                                <div className="tab-cont-left-top">
                                    <div className="tab-cont-left-name">{PageTabList.tablist[active].name}</div>
                                    <div className="tab-cont-left-desc">{PageTabList.tablist[active].desc}</div>
                                </div>
                                <motion.button
                                    className='hero-btn hero-btn-default'
                                    style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff', width: 'fit-content' }}
                                    onClick={() => {
                                        const tabName = PageTabList.tablist[active].name;
                                        navigate('/solution')
                                        trackButtonClick(`了解详情-${tabName}`, '首页Tab区域', { tabId: active, tabName });
                                    }}
                                >
                                    了解详情
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

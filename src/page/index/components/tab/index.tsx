import "./index.css";
import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { scrollInViewSpringProps } from "../../motionConfig";
import { IconFont } from "@/utils/antdUtils";
import Btn from "../btn/Btn";

export default function PageTab() {
    const tablist = [
        { name: "低门槛启动", id: 0, icon: 'tab1' },
        { name: "高并发高吞吐", id: 1, icon: 'tab2' },
        { name: "ISV联合共创", id: 2, icon: 'tab3' },
        { name: "AI开发环境敏捷交付", id: 3, icon: 'tab4' },
        { name: "精准资源管理", id: 4, icon: 'tab5' },
        { name: "超低TTFT", id: 5, icon: 'tab6' },
        { name: "更多场景", id: 6, icon: 'tab7' }
    ]

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
        <div className="tab-container">
            <motion.div {...scrollInViewSpringProps} className="tab-title">
                行业领先的场景化解决方案
            </motion.div>

            <div className="tab-box">
                <div className="tab-nav" ref={navRef}>
                    {tablist.map((item) => (
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
                        transition={{ type: "spring", stiffness: 300, damping: 26 }}
                    />
                </div>

                <div className="tab-cont">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, x: direction * 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction * -50 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="tab-cont-box"
                    >
                        <div className="tab-cont-left">
                           <div></div>
                           <div></div>
                           <Btn classNames="tab-cont-left-btn" text="立即咨询" />
                        </div>
                        <div className="tab-cont-right">

                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

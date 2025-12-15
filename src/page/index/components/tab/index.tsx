import "./index.css";
import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { scrollInViewSpringProps } from "../../motionConfig";
import { IconFont } from "@/utils/antdUtils";
import { div } from "motion/react-client";

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
        <div className="tab-page">
            <div className="tab-container">
                <motion.div {...scrollInViewSpringProps} className="tab-title">
                    行业领先的场景化解决方案
                </motion.div>

                <div className="tab-box">
                    <motion.div {...scrollInViewSpringProps} className="tab-nav" ref={navRef}>
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
                                    <div className="tab-cont-left-name">{tablist[active].name}</div>
                                    <div className="tab-cont-left-desc">依托趋境科技推理一体机解决方案，实现单 4090D 工作站实现 6 个模型混合推理，成本降低 85% 某海外投资机构</div>
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
                                <div className="tab-cont-right-box border-b border-solid border-[#0000001A]">
                                    <div className="tab-cont-right-box-title">客户痛点</div>
                                    <div className="tab-cont-right-box-list mt-2.5">
                                        <div className="tab-cont-rig-li">
                                            <IconFont type={`icon-no`} style={{ fontSize: '20px', color: '#333' }} className="mr-1"></IconFont>
                                            <div className="tab-cont-rig-li-text">数据不能上云，私有部署算力数百万起步</div>
                                        </div>
                                        <div className="tab-cont-rig-li">
                                            <IconFont type={`icon-no`} style={{ fontSize: '20px', color: '#333' }} className="mr-1"></IconFont>
                                            <div className="tab-cont-rig-li-text">缺少 AI 人才，部署调试运维等技术门槛高</div>
                                        </div>
                                        <div className="tab-cont-rig-li">
                                            <IconFont type={`icon-no`} style={{ fontSize: '20px', color: '#333' }} className="mr-1"></IconFont>
                                            <div className="tab-cont-rig-li-text">AI 场景复杂，4 个业务场景需要 6 个模型混合推理</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-cont-right-box">
                                    <div className="tab-cont-right-box-title">趋境价值</div>
                                    <div className="tab-cont-right-box-list mt-2.5">
                                        <div className="tab-cont-rig-li">
                                            <IconFont type={`icon-dui`} style={{ fontSize: '20px', color: '#6C3AE1' }} className="mr-1"></IconFont>
                                            <div className="tab-cont-rig-li-texts">单 4090D 工作站实现 6 个模型混合推理，成本降低 85%</div>
                                        </div>
                                        <div className="tab-cont-rig-li">
                                            <IconFont type={`icon-dui`} style={{ fontSize: '20px', color: '#6C3AE1' }} className="mr-1"></IconFont>
                                            <div className="tab-cont-rig-li-texts">支撑 4 个场景/台，满足首 Token 延迟 和 decode 速度要求</div>
                                        </div>
                                        <div className="tab-cont-rig-li">
                                            <IconFont type={`icon-dui`} style={{ fontSize: '20px', color: '#6C3AE1' }} className="mr-1"></IconFont>
                                            <div className="tab-cont-rig-li-texts">AMaaS 管理平台屏蔽技术复杂性，客户只需关注业务自身</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

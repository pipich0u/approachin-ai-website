import { useEffect, useRef, useState } from 'react';
//@ts-ignore
import ReactFullpage from '@fullpage/react-fullpage';
import TopNav from './components/topNav/index';
import './index.css';
import PageIndex from './components/index/index'
import PageProduct from './components/product/index'
import PageTechnology from './components/technology/index'
import PageKt from './components/KT/index'
import PageInfo from './components/info/index'
import PageContact from './components/contact/index'
import PageTeam from './components/team/index'
import DevelopPage from './components/develop';
import { useSearchParams } from 'react-router-dom';
import { ReactLenis, useLenis } from 'lenis/react'
import type { LenisRef } from 'lenis/react';
import { motion } from "motion/react"
// import * as motion from "motion/react-client"


export default function Index() {
    // const navigate = useNavigate();
    const [searchParams] = useSearchParams()
    // const lenisRef = useRef<LenisRef>(null)
    // const navId = searchParams.get('id')
    const [activeSection, setActiveSection] = useState('');
    const topNavRef = useRef<ReturnType<typeof TopNav>>(null)
    const scrollBoxRef = useRef<HTMLDivElement>(null);

    // const lenis = useLenis((lenis) => {
    //     lenis.options = {
    //         duration: 1.2,
    //         easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    //         smoothWheel: true,
    //     }
    // })

    useEffect(() => {
        const scrollbox = scrollBoxRef.current;
        if (!scrollbox) return;

        const resizeBody = () => {
            const height = scrollbox.offsetHeight;
            document.body.style.height = `${height}px`;
        };

        const handleScroll = () => {
            scrollbox.style.transform = `translateY(${-window.scrollY}px)`;
        };

        // 事件绑定
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("load", resizeBody);
        window.addEventListener("resize", resizeBody);

        // 初始执行一次
        resizeBody();

        // 清理事件
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("load", resizeBody);
            window.removeEventListener("resize", resizeBody);
        };
    }, []);

    return (
        <div className="w-100 h-100 ">
            <ReactLenis root />
            <div>
                <motion.div
                    initial={{ x: 100, y: 100, opacity: 0 }} // 初始状态
                    animate={{ x: 0, y: 0, opacity: 1 }}  // 动画结束状态
                    transition={{ duration: 0.8, ease: 'easeOut' }} // 动画参数
                    style={{
                        height: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem',
                    }}
                >
                    Hello World
                </motion.div>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }} // 元素进入视口 50% 时触发
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className='h-[200px] my-[50px] bg-amber-200'
                    // style={{ height: '200px', margin: '50px 0', background: '#e74c3c' }}
                >
                    Scroll Reveal
                </motion.div>
                <TopNav ref={topNavRef} activeSection={activeSection} />
                <PageIndex id="pageIndex" />
                <PageProduct id="pageProduct" />
                <PageTechnology id="pageTechnology" />
                <PageKt id="pageKt" />
                <PageInfo id="pageInfo" />
                <DevelopPage id="DevelopPage" />
                <PageTeam id="PageTeam" />
                <PageContact />
            </div>
        </div>
    );
}

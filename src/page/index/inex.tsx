import { useEffect, useRef, useState } from 'react';
//@ts-ignore
import ReactFullpage from '@fullpage/react-fullpage';
import TopNav from './components/topNav/index';
import './index.css';
import PageIndex from './components/index/index'
import PageProduct from './components/product/index'
import PageKt from './components/KT/index'
import PageInfo from './components/info/index'
import PageContact from './components/contact/index'
import DevelopPage from './components/develop';
import { useSearchParams } from 'react-router-dom';
import { ReactLenis, useLenis } from 'lenis/react'
import type { LenisRef } from 'lenis/react';
import { motion } from "motion/react"
import { initialLoadProps, scrollInViewSpringProps } from './motionConfig'
import TopNavs from './components/topNavs';
import PageQuestion from './components/question/index';
import PageConsult from './components/consult/index';


export default function Index() {
    // const navigate = useNavigate();
    const [searchParams] = useSearchParams()
    // const lenisRef = useRef<LenisRef>(null)
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
        <div className="w-100 h-100" >
            <ReactLenis root />
            <div>
                {/* 
                <motion.div
                    {...initialLoadProps}
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
                    {...scrollInViewSpringProps}
                    className='h-[200px] my-[50px] bg-amber-200 flex items-center justify-around'
                >
                    <motion.div {...scrollInViewSpringProps} className='w-20 h-20 bg-amber-600'>
                        box1
                    </motion.div>
                    <motion.div {...scrollInViewSpringProps} className='w-20 h-20 bg-amber-600'>
                        box1
                    </motion.div>
                    <motion.div {...scrollInViewSpringProps} className='w-20 h-20 bg-amber-600'>
                        box1
                    </motion.div>
                    <motion.div {...scrollInViewSpringProps} className='w-20 h-20 bg-amber-600'>
                        box1
                    </motion.div>
                    <motion.div {...scrollInViewSpringProps} className='w-20 h-20 bg-amber-600'>
                        box1
                    </motion.div>
                </motion.div> */}
                <TopNavs />
                <PageIndex />
                <PageProduct />
                <PageQuestion />
                <PageKt />
                <PageInfo />
                <DevelopPage />
                <PageConsult />
                <PageContact />
            </div>
        </div >
    );
}

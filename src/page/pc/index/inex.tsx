import { useEffect, useRef } from 'react';
import './index.css';
import PageIndex from './components/index/index'
import PageProduct from './components/product/index'
import PageTab from './components/tab/index'
import PageCooperate from './components/PageCooperate/index'
import PageContact from './components/contact/index'
import DevelopPage from './components/develop';
import PageQuestion from './components/question/index';
import PageConsult from './components/consult/index';
import PageCase from './components/case';
import SourcePage from './components/source';


export default function Index() {

    const scrollBoxRef = useRef<HTMLDivElement>(null);

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
            <div className='flex items-center flex-col bg-[#fafafa]'>
                {/* <TopNavs /> */}
                <PageIndex />
                <PageProduct />
                <PageQuestion />
                <PageTab />
                <PageCase />
                <PageCooperate />
                <SourcePage />
                <DevelopPage />
                <PageConsult />
                <PageContact />
                {/* <FloatBtnEle/> */}
            </div>
        </div >
    );
}

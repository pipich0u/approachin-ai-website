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
import PageCase from './components/case/index'
import PageTeam from './components/team/index'
import DevelopPage from './components/develop';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface FullpageApi {
    silentMoveTo: (section: number, slide?: number) => void;
    moveSectionUp: () => void;
    moveSectionDown: () => void;
    moveSlideRight: () => void;
    moveSlideLeft: () => void;
}
type ReactFullpage = {
    fullpageApi: FullpageApi
}
export default function Index() {
    // const navigate = useNavigate();
    const [searchParams] = useSearchParams()
    const navId = searchParams.get('id')
    const fullpageRef = useRef<ReactFullpage>(null);
    const [activeSection, setActiveSection] = useState('');
    const topNavRef = useRef<ReturnType<typeof TopNav>>(null)
    // @ts-ignore
    const onLeave = (origin: any, destination: any, direction: string) => {
        // console.log(origin, destination, direction, 'ee');
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => section.classList.remove('active'));
        sections[destination.index].classList.add('active');
        setActiveSection(destination.index);
    };
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        setActiveSection(sectionId);
        if (element) {
            const navbarHeight = 60;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - navbarHeight,
                behavior: 'instant'
            });
        }
    };
    const navItems = [
        { title: '首页', id: 0, href: 'pageIndex' },
        { title: '产品介绍', id: 1, href: 'pageProduct' },
        { title: '技术方案', id: 2, href: 'pageTechnology' },
        { title: 'KTransformers', id: 3, href: 'pageKt' },
        // { title: '合作案例', id: 4 },
        { title: '趋境资讯', id: 4, href: 'pageInfo' },
        { title: '企业发展', id: 5, href: 'DevelopPage' },
        // { title: '团队介绍', id: 7 },
    ];
    const handleNavigate = (index: number) => {
        fullpageRef.current?.fullpageApi.silentMoveTo(index + 1);
        // navigate('/#' + index)
        // const a = document.createElement('a')
        // a.href="#" + index
        // a.click()
    };
    useEffect(() => {
        if (navId) {
            // @ts-ignore
            topNavRef.current?.handleNavItemClick(navId)
        }
    }, [navId])
    useEffect(() => {
        const handleScroll = () => {
            let currentSection = 'pageIndex';
            const threshold = 100; // 你可以根据导航条高度或偏移值来设置

            for (const item of navItems) {
                const section = document.getElementById(item.href);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= threshold && rect.bottom > threshold) {
                        currentSection = item.href;
                        break;
                    }
                }
            }

            if (currentSection !== activeSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection])
    return (
        <div className="w-100 h-100 ">
            <TopNav ref={topNavRef} onNavigate={scrollToSection} activeSection={activeSection} />

            {/* <ReactFullpage
                //@ts-ignore
                ref={fullpageRef}
                licenseKey={''}
                scrollingSpeed={800}  // 设置一个较低的滚动速度，或者可以设为 0
                navigation={false}    // 关闭导航（如果有）
                slidesNavigation={false}  // 关闭 slide 导航
                slidesNavPosition="bottom"
                onLeave={onLeave}
                render={() => {
                    return (
                        <ReactFullpage.Wrapper> */}
            <PageIndex id="pageIndex" />
            <PageProduct id="pageProduct" />
            <PageTechnology id="pageTechnology" />
            <PageKt id="pageKt" />
            {/* <PageCase /> */}
            <PageInfo id="pageInfo" />
            <DevelopPage id="DevelopPage" />
            {/* <PageTeam /> */}
            <PageContact onNavigate={scrollToSection} />
            {/* </ReactFullpage.Wrapper>
                    );
                }}
                credits={{
                    enabled: false
                }}
            />
                */}
        </div>
    );
}

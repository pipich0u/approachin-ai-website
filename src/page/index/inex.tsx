import { useRef, useState } from 'react';
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
    const fullpageRef = useRef<ReactFullpage>(null);
    const [activeSection, setActiveSection] = useState(0);

    const onLeave = (origin: any, destination: any, direction: string) => { 
        // console.log(origin, destination, direction, 'ee');
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => section.classList.remove('active'));
        sections[destination.index].classList.add('active');
        setActiveSection(destination.index);
    };

    const handleNavigate = (index: number) => {
        if (fullpageRef.current) {
            fullpageRef.current.fullpageApi.silentMoveTo(index + 1);
        }
    };

    return (
        <div className="w-100 h-100">
            <TopNav onNavigate={handleNavigate} activeSection={activeSection} />
            <ReactFullpage
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
                        <ReactFullpage.Wrapper>
                            <PageIndex />
                            <PageProduct />
                            <PageTechnology />
                            <PageKt />
                            {/* <PageCase /> */}
                            <PageInfo />
                            <DevelopPage />
                            {/* <PageTeam /> */}
                            <PageContact onNavigate={handleNavigate} />
                        </ReactFullpage.Wrapper>
                    );
                }}
                credits={{
                    enabled: false
                }}
            />
        </div>
    );
}

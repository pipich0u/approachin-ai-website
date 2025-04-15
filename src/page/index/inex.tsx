import React, { useRef, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import TopNav from './components/topNav';
import './index.css';
import PageIndex from './components/index/index'
import PageProduct from './components/product/index'
import PageTechnology from './components/technology/index'
import PageKt from './components/KT/index'
import PageInfo from './components/info/index'
import PageContact from './components/contact/index'
import PageCase from './components/case/index'
import PageTeam from './components/team/index'

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
    const [fullpageApi, setFullpageApi] = useState<any>(null);

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
        <div className="w-100 h-100 app">
            {/* {
                activeSection !== 7 && <TopNav onNavigate={handleNavigate} activeSection={activeSection} />
            } */}
            <TopNav onNavigate={handleNavigate} activeSection={activeSection} />

            <ReactFullpage
                //@ts-ignore
                ref={fullpageRef}
                licenseKey={''}
                scrollingSpeed={1000}
                navigation={false}
                slidesNavigation={true}
                slidesNavPosition="bottom"
                onLeave={onLeave}

                render={() => {
                    return (
                        <ReactFullpage.Wrapper>
                            <PageIndex />
                            <PageProduct />
                            <PageTechnology />
                            <PageKt />
                            <PageCase />
                            <PageInfo />
                            <PageTeam />
                            <PageContact />
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

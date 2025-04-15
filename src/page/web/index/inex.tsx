import { useRef, useState } from 'react';
//@ts-ignore
import ReactFullpage from '@fullpage/react-fullpage';
import TopNav from './components/topNav';
import './index.css';



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
        console.log(origin, destination, direction, 'ee');
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
        <>
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
                            <div className="section section-1">
                                <div className="title">首页</div>
                            </div>
                            <div className="section section-2">
                                <div className="slide slide-1">
                                    <div>产品展示</div>
                                </div>
                                <div className="slide slide-2">
                                    <div>产品特点</div>
                                </div>
                            </div>
                            <div className="section section-3">
                                <div className="title">技术优势</div>
                            </div>
                            <div className="section section-4">
                                <div className="title">KTransformers</div>
                            </div>
                            <div className="section section-5">
                                <div className="title">成功案例</div>
                            </div>
                            <div className="section section-6">
                                <div className="title">新闻资讯</div>
                            </div>
                            <div className="section section-7">
                                <div className="title">联系我们</div>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
                credits={{
                    enabled: false
                }}
            />
        </>
    );
}

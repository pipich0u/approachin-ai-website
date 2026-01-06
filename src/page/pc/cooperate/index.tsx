import './index.css'
import TopNavs from '../index/components/topNavs'
import CooperateBanner from './components/banner'
import CooperateSystem from './components/system'
import CooperateBuddy from './components/buddy'
import CooperateCarousel from './components/carousel'
import CooperateStep from './components/step'
import PageConsult from '../index/components/consult'
import PageContact from '../index/components/contact'
import { useEffect } from 'react'
import { getGitSource } from '@/common/api';
import { trackPageView } from '@/utils/umami';

export default function CooperatePage() {

    useEffect(() => {
        window.scrollTo(0, 0)
        trackPageView('合作伙伴页面')
        const fetchData = async () => {
            const org = 'kvcache-ai';
            const repo = 'ktransformers';
            const res = await getGitSource(org, repo, 1, 50);
            console.log(res);
        };

        // fetchData();
    }, [])
    return <>
        <div className="w-100 h-100" >
            <div className='cooperate-page-content'>
                {/* <TopNavs /> */}
                <CooperateBanner />
                <CooperateSystem />
                <CooperateBuddy />
                <CooperateCarousel />
                <CooperateStep />
                <PageConsult name="cpa-bg" />
                <PageContact />
            </div>
        </div >
    </>
}
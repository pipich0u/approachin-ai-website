import { useEffect } from 'react'
import PageContact from '../index/components/contact'
import { MoonBanner } from './components/banner'
import { MoonFast } from './components/fast'
import { MoonInfluence } from './components/influence'
import './index.css'
import { getGitSource } from '@/common/api'


export const MoonCake = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        const fetchData = async () => {
            const org = 'kvcache-ai';
            const repo = 'Mooncake';
            const res = await getGitSource(org, repo, 1, 50);
            console.log(res);
        };

        // fetchData();
    }, [])
    return <>
        <div className='cake-container'>
            <MoonBanner />
            <MoonInfluence />
            <MoonFast />
            
            <PageContact />
        </div>
    </>
}

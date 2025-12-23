import { useEffect, useState } from 'react'
import PageContact from '../index/components/contact'
import { MoonBanner } from './components/banner'
import { MoonFast } from './components/fast'
import { MoonInfluence } from './components/influence'
import './index.css'
import { getGitSource } from '@/common/api'
import { MoonStep } from './components/step'
import { MoonSource } from './components/source'


export const MoonCake = () => {
    const [list, setList] = useState<any[]>([])
    useEffect(() => {
        window.scrollTo(0, 0)
        const fetchData = async () => {
            const org = 'kvcache-ai';
            const repo = 'Mooncake';

            try {
                const [page1, page2] = await Promise.all([
                    getGitSource(org, repo, 100, 1),
                    getGitSource(org, repo, 100, 2)
                ]);

                const allContributors = [];
                if (page1 && page1.length > 0) {
                    allContributors.push(...page1);
                }
                if (page2 && page2.length > 0) {
                    allContributors.push(...page2);
                }

                setList(allContributors);
            } catch (error) {
                console.error('获取贡献者数据失败:', error);
            }
        };

        fetchData();
    }, [])
    return <>
        <div className='cake-container'>
            <MoonBanner />
            <MoonInfluence />
            <MoonFast />
            <MoonStep />
            <MoonSource list={list} />
            <PageContact />
        </div>
    </>
}

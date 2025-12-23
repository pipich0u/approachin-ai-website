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
            const allContributors: any[] = [];
            let page = 1;
            let hasMore = true;

            // 循环获取所有分页数据
            while (hasMore) {
                const res = await getGitSource(org, repo, 100, page);
                if (res && res.length > 0) {
                    allContributors.push(...res);
                    page++;
                    // 如果返回的数量少于100，说明已经是最后一页了
                    if (res.length < 100) {
                        hasMore = false;
                    }
                } else {
                    hasMore = false;
                }
            }
            setList(allContributors);
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

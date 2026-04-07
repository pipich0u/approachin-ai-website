import './index.css'
import { MobKllmIndex } from './components/index/index'
import { MobModelLogos } from '@/page/mobile/common/MobModelLogos'
import { MobKllmAdvantages } from './components/advantages'
import { MobKllmScenes } from './components/service'
import PageConsult from '@/page/mobile/index/components/consult'
import PageContact from '@/page/mobile/index/components/contact'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'

export const MobKLLMPage = () => {
    useEffect(() => {
        trackPageView('移动端-KLLM页面')
    }, [])

    return <div className='mob-kllm-page'>
        <MobKllmIndex />
        <MobModelLogos />
        <MobKllmAdvantages />
        <MobKllmScenes />
        <PageConsult />
        <PageContact />
    </div>
}

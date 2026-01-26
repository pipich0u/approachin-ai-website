import PageContact from '@/page/mobile/index/components/contact/index';
import { MobIntroductionIndex } from './components/index'
// import { MobIntroductionStep } from './components/step'
import './index.css'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'

export const MobIntroductionPage = () => {
    useEffect(() => {
        trackPageView('移动端公司介绍页面')
    }, [])

    return <div className='mob-introduction-page'>
        <MobIntroductionIndex />
        <PageContact />
    </div>
}
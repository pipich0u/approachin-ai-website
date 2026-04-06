import './index.css'
import { MobSolutionIndex } from './components/index/index'
import PageConsult from '@/page/mobile/index/components/consult'
import PageContact from '@/page/mobile/index/components/contact'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'

export const MobSolutionPage = () => {
    useEffect(() => {
        trackPageView('移动端-解决方案页面')
    }, [])

    return <div className='mob-solution-page'>
        <MobSolutionIndex />
        <PageConsult />
        <PageContact />
    </div>
}

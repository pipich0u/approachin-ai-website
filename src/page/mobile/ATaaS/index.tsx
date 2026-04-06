import './index.css'
import { MobATaaSIndex } from './components/index/index'
import { MobATaaSAdvantages } from './components/advantages'
import { MobATaaSService } from './components/service'
import PageConsult from '@/page/mobile/index/components/consult'
import PageContact from '@/page/mobile/index/components/contact'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'

export const MobATaaSPage = () => {
    useEffect(() => {
        trackPageView('移动端-ATaaS页面')
    }, [])

    return <div className='mob-ataas-page'>
        <MobATaaSIndex />
        <MobATaaSAdvantages />
        <MobATaaSService />
        <PageConsult />
        <PageContact />
    </div>
}

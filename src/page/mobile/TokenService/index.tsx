import './index.css'
import { MobTokenServiceIndex } from './components/index/index'
import { MobModelLogos } from '@/page/mobile/common/MobModelLogos'
import { MobTokenServiceAdvantages } from './components/advantages'
import { MobTokenServiceService } from './components/service'
import PageConsult from '@/page/mobile/index/components/consult'
import PageContact from '@/page/mobile/index/components/contact'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'

export const MobTokenServicePage = () => {
    useEffect(() => {
        trackPageView('移动端-TokenService页面')
    }, [])

    return <div className='mob-ts-page'>
        <MobTokenServiceIndex />
        <MobModelLogos />
        <MobTokenServiceAdvantages />
        <MobTokenServiceService />
        <PageConsult />
        <PageContact />
    </div>
}

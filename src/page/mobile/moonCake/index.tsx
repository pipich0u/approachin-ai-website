import './index.css'
import { MobMoonCakeIndex } from './components/index/index'
import PageConsult from '@/page/mobile/index/components/consult'
import PageContact from '@/page/mobile/index/components/contact'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'

export const MobMoonCakePage = () => {
    useEffect(() => {
        trackPageView('移动端-Mooncake页面')
    }, [])

    return <div className='mob-mooncake-page'>
        <MobMoonCakeIndex />
        <PageConsult />
        <PageContact />
    </div>
}

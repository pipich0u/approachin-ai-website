import './index.css'
import { MobCooperateIndex } from './components/index/index'
import PageConsult from '@/page/mobile/index/components/consult'
import PageContact from '@/page/mobile/index/components/contact'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'

export const MobCooperatePage = () => {
    useEffect(() => {
        trackPageView('移动端-生态合作页面')
    }, [])

    return <div className='mob-cooperate-page'>
        <MobCooperateIndex />
        <PageConsult />
        <PageContact />
    </div>
}

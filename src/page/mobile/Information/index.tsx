import PageContact from '../index/components/contact'
import { MobInformationIndex } from './components/index/index'
import { MobInformationInfo } from './components/info'
import './index.css'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'
import PageConsult from '../index/components/consult'

export const MobInformationPage = () => {
    useEffect(() => {
        trackPageView('移动端公司资讯页面')
    }, [])

    return <div className='mob-information-page'>
        <MobInformationIndex />
        <MobInformationInfo />
        <PageConsult />
        <PageContact />
    </div>
}
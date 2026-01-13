import PageContact from '../index/components/contact'
import { InformationIndex } from './components/index/index'
import { InformationInfo } from './components/info'
import './index.css'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'
import PageConsult from '../index/components/consult'

export const InformationPage = () => {
    useEffect(() => {
        trackPageView('公司介绍页面')
    }, [])

    return <div className='information-page'>
        <InformationIndex />
        <InformationInfo />
        <PageConsult />
        <PageContact />
    </div>
}
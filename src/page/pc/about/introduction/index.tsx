import PageContact from '../../index/components/contact'
import { IntroductionIndex } from './components/index'
import { IntroductionInfo } from './components/info'
import './index.css'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'

export const IntroductionPage = () => {
    useEffect(() => {
        trackPageView('公司介绍页面')
    }, [])

    return <div className='introduction-page'>
        <IntroductionIndex />
        <IntroductionInfo />
        <PageContact />
    </div>
}
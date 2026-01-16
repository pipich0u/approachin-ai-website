import PageContact from '../../index/components/contact'
import { IntroductionIndex } from './components/index'
import { IntroductionStep } from './components/step'
import './index.css'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'

export const IntroductionPage = () => {
    useEffect(() => {
        trackPageView('公司介绍页面')
    }, [])

    return <div className='introduction-page'>
        <IntroductionIndex />
        <IntroductionStep />
        <PageContact />
    </div>
}
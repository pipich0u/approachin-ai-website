import './index.css'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'
import { SolutionIndex } from './components/index'
import { SolutionTab } from './components/tab'
import PageConsult from '../../index/components/consult'
import PageContact from '../../index/components/contact'

export const SolutionPage = () => {

    useEffect(() => {
        trackPageView('AI算力解决方案页面')
    }, [])

    return <div className='solution-page'>
        <SolutionIndex />
        <SolutionTab />
        <PageConsult />
        <PageContact />
    </div>
}
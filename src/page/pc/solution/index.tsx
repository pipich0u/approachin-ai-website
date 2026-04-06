import './index.css'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'
import { SolutionIndex } from './components/index/index'
import { SolutionLogos } from './components/logos'
import { SolutionTab } from './components/tab'
import PageConsult from '../index/components/consult'
import PageContact from '../index/components/contact'
import { solutionTextConfig } from './textConfig'

export const SolutionPage = () => {

    useEffect(() => {
        trackPageView(solutionTextConfig.pageName)
    }, [])

    return <div className='solution-page'>
        <SolutionIndex />
        <SolutionLogos />
        <SolutionTab />
        <PageConsult />
        <PageContact />
    </div>
}
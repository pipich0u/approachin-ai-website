import PageConsult from '../../index/components/consult'
import PageContact from '../../index/components/contact'
import { StudioCarousel } from './components/carousel'
import { StudioIndex } from './components/index'
import { StudioLink } from './components/link'
import { StudioTab } from './components/tab'
import './index.css'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'
import { studioTextConfig } from './textConfig'

export const StudioPage = () => {
    useEffect(() => {
        trackPageView(studioTextConfig.pageName)
    }, [])

    return <div className='studio-page'>
        <StudioIndex />
        <StudioLink />
        <StudioTab />
        <StudioCarousel />
        <PageConsult />
        <PageContact />
    </div>
}
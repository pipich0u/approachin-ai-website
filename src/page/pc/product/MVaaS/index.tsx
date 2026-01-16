import PageConsult from '../../index/components/consult'
import PageContact from '../../index/components/contact'
import { MVaaSChatBot } from './components/CahtBot'
import { MVaaSIndex } from './components/index'
import { MVaaSPlatform } from './components/platform'
import { MVaaSPower } from './components/power'
import { MVaaSServe } from './components/serve'
import './index.css'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'
import { mvaasTextConfig } from './textConfig'

export const MVaaSPage = () => {
    useEffect(() => {
        trackPageView(mvaasTextConfig.pageName)
    }, [])

    return <div className='mvaas-page'>
        <MVaaSIndex />
        <MVaaSChatBot />
        <MVaaSPower />
        <MVaaSPlatform />
        <MVaaSServe />
        <PageConsult />
        <PageContact />
    </div>
}
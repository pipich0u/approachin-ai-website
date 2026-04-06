import './index.css'
import { TokenServiceIndex } from './components/index/index'
import { KllmModelLogos } from '../KLLM/components/modelLogos'
import { TokenServiceAdvantages } from './components/advantages'
import { TokenServiceService } from './components/service'
import PageConsult from '../../index/components/consult'
import PageContact from '../../index/components/contact'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'
import { tokenServiceTextConfig } from './textConfig'

export const TokenServicePage = () => {
    useEffect(() => {
        trackPageView(tokenServiceTextConfig.pageName)
    }, [])

    return <div className='ts-page'>
        <TokenServiceIndex />
        <KllmModelLogos />
        <TokenServiceAdvantages />
        <TokenServiceService />
        <PageConsult />
        <PageContact />
    </div>
}

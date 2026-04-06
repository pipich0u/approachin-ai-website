import './index.css'
import { ATaaSIndex } from './components/index/index'
import { KllmModelLogos } from '../KLLM/components/modelLogos'
import { ATaaSAdvantages } from './components/advantages'
import { ATaaSService } from './components/service'
import PageConsult from '../../index/components/consult'
import PageContact from '../../index/components/contact'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'
import { ataasTextConfig } from './textConfig'

export const ATaaSPage = () => {
    useEffect(() => {
        trackPageView(ataasTextConfig.pageName)
    }, [])

    return <div className='ataas-page'>
        <ATaaSIndex />
        <KllmModelLogos />
        <ATaaSAdvantages />
        <ATaaSService />
        <PageConsult />
        <PageContact />
    </div>
}

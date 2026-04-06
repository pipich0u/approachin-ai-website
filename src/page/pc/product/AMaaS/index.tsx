import './index.css'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'
import { AMaaSIndex } from './components/index/index'
import { KllmModelLogos } from '../KLLM/components/modelLogos'
import { AMaaSIntroduce } from './components/introduce'
import { AMaaSRelation } from './components/relation'
import { AMaasSuperior } from './components/superior'
import { AMaasTestimony } from './components/testimony'
import PageConsult from '../../index/components/consult'
import PageContact from '../../index/components/contact'
import { amaasTextConfig } from './textConfig'

export const AMaaSPage = () => {
    useEffect(() => {
        trackPageView(amaasTextConfig.pageName)
    }, [])

    return <div className='amaas-page'>
        <AMaaSIndex />
        <KllmModelLogos />
        <AMaaSIntroduce />
        <AMaaSRelation />
        <AMaasSuperior />
        <AMaasTestimony />
        <PageConsult />
        <PageContact />
    </div>
}
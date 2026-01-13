import './index.css'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'
import { AMaaSIndex } from './components/index'
import { AMaaSIntroduce } from './components/introduce'
import { AMaaSRelation } from './components/relation'
import { AMaasSuperior } from './components/superior'
import { AMaasTestimony } from './components/testimony'
import PageConsult from '../../index/components/consult'
import PageContact from '../../index/components/contact'

export const AMaaSPage = () => {
    useEffect(() => {
        trackPageView('AMaaS页面')
    }, [])

    return <div className='amaas-page'>
        <AMaaSIndex />
        <AMaaSIntroduce />
        <AMaaSRelation />
        <AMaasSuperior />
        <AMaasTestimony />
        <PageConsult />
        <PageContact />
    </div>
}
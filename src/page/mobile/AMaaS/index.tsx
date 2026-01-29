import './index.css'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'
import { MobAMaaSIndex } from './components/index/index'
import { MobAMaaSIntroduce } from './components/introduce'
import { MobAMaaSRelation } from './components/relation'
import { MobAMaasSuperior } from './components/superior'
import { MobAMaasTestimony } from './components/testimony'
import PageConsult from '../index/components/consult'
import PageContact from '../index/components/contact'
import { amaasTextConfig } from './textConfig'

export const MobAMaaSPage = () => {
    useEffect(() => {
        trackPageView(amaasTextConfig.pageName)
    }, [])

    return <div className='mob-amaas-page'>
        <MobAMaaSIndex />
        <MobAMaaSIntroduce />
        <MobAMaaSRelation />
        {/* <MobAMaasSuperior />
        <MobAMaasTestimony /> */}
        <PageConsult />
        <PageContact />
    </div>
}
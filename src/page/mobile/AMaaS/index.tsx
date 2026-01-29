import './index.css'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'
import { MobAMaaSIndex } from './components/index/index'
import { MobAMaaSIntroduce } from './components/introduce'
import { MobAMaaSRelation } from './components/relation'
import { MobAMaasSuperior } from './components/superior'
import PageConsult from '../index/components/consult'
import PageContact from '../index/components/contact'
import { amaasTextConfig } from '@/page/pc/product/AMaaS/textConfig'

export const MobAMaaSPage = () => {
    useEffect(() => {
        trackPageView(amaasTextConfig.pageName)
    }, [])

    return <div className='mob-amaas-page'>
        <MobAMaaSIndex />
        <MobAMaaSIntroduce />
        <MobAMaaSRelation />
        <MobAMaasSuperior />
        <PageConsult />
        <PageContact />
    </div>
}
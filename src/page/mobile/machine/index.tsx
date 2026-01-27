import './index.css'
import { MobMachineIndex } from './components/index/index'
import { MobMachineProduct } from './components/product'
import { MobMachineAmaas } from './components/amaas'
import { MobMachineIntroduce } from './components/introduce'
import { MobMachineScene } from './components/scene'
import PageContact from '@/page/pc/index/components/contact'
import PageConsult from '@/page/pc/index/components/consult'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'

import { MobMachineCompare } from './components/compare'

export const MachinePage = () => {
    useEffect(() => {
        trackPageView('移动端-一体机页面')
    }, [])

    return <div className='mob-machin-page'>
        <MobMachineIndex />
        <MobMachineIntroduce />
        <MobMachineAmaas />
        <MobMachineCompare />
        <MobMachineProduct />
        <MobMachineScene />
        <PageConsult />
        <PageContact />
    </div>
}
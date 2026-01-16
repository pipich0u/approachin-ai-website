import './index.css'
import { MachineIndex } from './components/index/index'
import { MachineProduct } from './components/product'
import { MachineAmaas } from './components/amaas'
import { MachineIntroduce } from './components/introduce'
import { MachineScene } from './components/scene'
import PageContact from '@/page/pc/index/components/contact'
import PageConsult from '@/page/pc/index/components/consult'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'
import { machineTextConfig } from './textConfig'

export const MachinePage = () => {
    useEffect(() => {
        trackPageView(machineTextConfig.pageName)
    }, [])

    return <div className='machin-page'>
        <MachineIndex />
        <MachineIntroduce />
        <MachineAmaas />
        <MachineProduct />
        <MachineScene />
        <PageConsult />
        <PageContact />
    </div>
}
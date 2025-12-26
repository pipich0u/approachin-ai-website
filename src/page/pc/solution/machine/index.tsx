import './index.css'
import { motion } from 'motion/react'
import { scrollInViewSpringOnceProps } from '@/utils/motionConfig'
import { MachineIndex } from './components/index'
import { MachineProduct } from './components/product'
import { MachineAmaas } from './components/amaas'
import { MachineIntroduce } from './components/introduce'
import { MachineScene } from './components/scene'

export const MachinePage = () => {
    return <div className='machin-page'>
        <MachineIndex />
        <MachineIntroduce />
        <MachineAmaas />
        <MachineProduct />
        <MachineScene />
    </div>
}
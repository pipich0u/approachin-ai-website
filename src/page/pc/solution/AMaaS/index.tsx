import './index.css'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'
import { AMaaSIndex } from './components/index'
import { AMaaSIntroduce } from './components/introduce'

export const AMaaSPage = () => {
    useEffect(() => {
        trackPageView('AMaaS页面')
    }, [])

    return <div className='amaas-page'>
        <AMaaSIndex />
        <AMaaSIntroduce />
    </div>
}
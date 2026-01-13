import './index.css'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'

export const AMaaSPage = () => {
    useEffect(() => {
        trackPageView('AMaaS页面')
    }, [])

    return <div className='amaas-page'>

    </div>
}
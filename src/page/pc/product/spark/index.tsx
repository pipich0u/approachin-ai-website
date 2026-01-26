import './index.css'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'

export const SparkPage = () => {
    useEffect(() => {
        trackPageView('Spark页面')
    }, [])

    return <div className='spark-page'>

    </div>
}
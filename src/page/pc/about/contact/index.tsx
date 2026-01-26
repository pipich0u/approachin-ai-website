import PageContact from '../../index/components/contact'
import { ContactIndex } from './components/index'
import './index.css'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'

export const ContactPage = () => {
    useEffect(() => {
        trackPageView('联系我们页面')
    }, [])

    return <div className='contact-page'>
        <ContactIndex />
        <PageContact />
    </div>
}
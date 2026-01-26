import PageContact from '../../index/components/contact'
import { MobContactIndex } from './components/index'
import './index.css'
import { useEffect } from 'react'
import { trackPageView } from '@/utils/umami'

export const MobContactPage = () => {
    useEffect(() => {
        trackPageView('移动端联系我们页面')
    }, [])

    return <div className='mob-contact-page-about'>
        <MobContactIndex />
        <PageContact />
    </div>
}
import PageContact from '../../index/components/contact'
import { ContactIndex } from './components/index'
import './index.css'

export const ContactPage = () => {
    return <div className='contact-page'>
        <ContactIndex />
        <PageContact />
    </div>
}
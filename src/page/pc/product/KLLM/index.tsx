import './index.css'
import { KllmIndex } from './components/index/index'
import { KllmAdvantages } from './components/advantages'
import { KllmIndustry } from './components/industry'
import { KllmService } from './components/service'
import PageConsult from '../../index/components/consult'
import PageContact from '../../index/components/contact'
export const KLLMPage = () => {
    return <div className='kllm-page'>
        <KllmIndex />
        <KllmAdvantages />
        <KllmIndustry />
        <KllmService />
        <PageConsult />
        <PageContact />
    </div>
}
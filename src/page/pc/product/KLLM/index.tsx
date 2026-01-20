import './index.css'
import { KllmIndex } from './components/index/index'
import { KllmAdvantages } from './components/advantages'
export const KLLMPage = () => {
    return <div className='kllm-page'>
        <KllmIndex />
        <KllmAdvantages />
    </div>
}
import { StudioCarousel } from '../../../studio/components/carousel'
import './index.css'

export const KllmIndustry = () => {
    return <div className='kllm-industry-container'>
        <div className='kllm-industry-content'>
            <div className='kllm-industry-left kllm-industry-bg'></div>
            <div className='kllm-industry-right kllm-industry-bg'></div>
            <StudioCarousel/>
        </div>
    </div>
}
import { StudioCarousel } from '../../../studio/components/carousel'
import { carouselText } from '../../textConfig'
import './index.css'

export const KllmIndustry = () => {
    return <div className='kllm-industry-container'>
        <div className='kllm-industry-content'>
            <StudioCarousel config={carouselText} />
        </div>
    </div>
}

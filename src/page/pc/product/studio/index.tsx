import { StudioCarousel } from './components/carousel'
import { StudioIndex } from './components/index'
import { StudioLink } from './components/link'
import { StudioTab } from './components/tab'
import './index.css'

export const StudioPage = () => {

    return <div className='studio-page'>
        <StudioIndex />
        <StudioLink />
        <StudioTab />
        <StudioCarousel />
    </div>
}
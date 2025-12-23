import { MoonBanner } from './components/banner'
import { MoonInfluence } from './components/influence'
import './index.css'


export const MoonCake = () => {
    return <>
        <div className='cake-container'>
            <MoonBanner />
            <MoonInfluence />
        </div>
    </>
}

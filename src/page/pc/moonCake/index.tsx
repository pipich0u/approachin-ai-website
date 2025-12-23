import { MoonBanner } from './components/banner'
import { MoonFast } from './components/fast'
import { MoonInfluence } from './components/influence'
import './index.css'


export const MoonCake = () => {
    return <>
        <div className='cake-container'>
            <MoonBanner />
            <MoonInfluence />
            <MoonFast />
        </div>
    </>
}

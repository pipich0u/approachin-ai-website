import { IntroductionIndex } from './components/index'
import { IntroductionInfo } from './components/info'
import './index.css'

export const IntroductionPage = () => {

    return <div className='introduction-page'>
        <IntroductionIndex />
        <IntroductionInfo />
    </div>
}
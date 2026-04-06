import './index.css'
import studioLink from '@/assets/images/img/studio_link.webp'
import { studioTextConfig } from '../../textConfig'

export const StudioLink = () => {

    return <div className='studio-link-container'>
        <div className='studio-link-content'>
            <div className='studio-link-title'>{studioTextConfig.link.title}</div>
            <div className='studio-link-desc'>{studioTextConfig.link.desc}</div>
            <div className='studio-link-box'>
                <img src={studioLink} alt="" className='selectNone' />
            </div>
        </div>
    </div>
}
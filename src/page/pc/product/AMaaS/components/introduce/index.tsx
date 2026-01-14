import { IconFont } from '@/utils/antdUtils'
import './index.css'
import { amaasTextConfig } from '../../textConfig'

export const AMaaSIntroduce = () => {
    const { introduce } = amaasTextConfig;

    return <div className='amaas-introduce-container'>
        <div className="amaas-in-content">
            <div className="amaas-in-title">
                {introduce.title}
            </div>
            <div className="amaas-in-box">
                {introduce.items.map((item, index) => (
                    <div key={index} className="amaas-in-item">
                        <div className='amaas-in-item-title'>
                            {item.title}
                        </div>
                        <div className='amaas-in-item-desc'>
                            {item.description}
                        </div>
                        <div className='amaas-in-item-list'>
                            {item.features.map((feature, idx) => (
                                <div key={idx} className='amaas-in-item-list-li'>
                                    <IconFont style={{ fontSize: '24px', color: '#02Dc52' }} type='icon-dui'></IconFont>
                                    <div>{feature}</div>
                                </div>
                            ))}
                        </div>
                        <div className='amaas-in-item-img'></div>
                    </div>
                ))}
            </div>
        </div>
    </div>
}
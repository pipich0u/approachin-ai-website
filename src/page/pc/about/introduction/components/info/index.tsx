import './index.css'
import { IconFont } from '@/utils/antdUtils'
import { infoList } from '../../textConfig'

export const IntroductionInfo = () => {

    return <div className='introduction-info-container'>
        <div className='in-info-title'>企业资讯</div>
        <div className='in-info-content'>
            {infoList.map((item, index) => (
                <div key={index}>
                    <div className="in-info-item">
                        <div className='in-info-item-left'>
                            <div className='in-info-item-content'>
                                <div className='in-info-item-title'>{item.title}</div>
                                <div className='in-info-item-desc'>{item.desc}</div>
                            </div>
                            <div className='in-info-item-time'>
                                <div>{item.date}</div>
                                <div className='cursor-pointer'>查看详情<IconFont type='icon-up-s' className='detail-icon' /></div>
                            </div>
                        </div>
                        <div className='in-info-item-rig'>
                            <img src={item.image} alt='' />
                        </div>
                    </div>
                    {index < infoList.length - 1 && <div className='in-info-line' />}
                </div>
            ))}
        </div>
    </div>
}
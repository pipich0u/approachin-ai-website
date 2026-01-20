import { IconFont } from '@/utils/antdUtils'
import './index.css'
import { advantagesText } from '../../textConfig'

export const KllmAdvantages = () => {

    return <div className='kllm-advantages-container'>
        <div className='kllm-advantages-content'>
            <div className='kllm-advantages-title'>产品优势</div>
            <div className='kllm-advantages-box'>
                {advantagesText.advantagesList.map((item, index) => {
                    return <div className='kllm-advantages-item' key={index}>
                        <div className='kllm-advantages-item-title'>{item.title}</div>
                        <div className='kllm-advantages-item-list'>
                            {item.items.map((li, liIndex) => {
                                return <div className='kllm-advantages-item-list-li' key={liIndex}>
                                    <IconFont type="icon-dui" className='text-[26px]! text-[#6C3AE1]' />
                                    <div className='kllm-advantages-item-list-li-text'>{li}</div>
                                </div>
                            })}
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
}
import './index.css'
import { introductionList } from '@/page/pc/about/introduction/textConfig'

const renderContent = (content: string | { text: string; bold?: string; text2?: string }) => {
    if (typeof content === 'string') return content
    return <>
        {content.text}
        {content.bold && <strong>{content.bold}</strong>}
        {content.text2}
    </>
}

export const MobIntroductionIndex = () => {
    return (
        <div className='mob-intro-page'>
            {/* Banner */}
            <div className='mob-intro-banner'>
                <h1 className='mob-intro-banner-title'>公司介绍</h1>
                <span className='mob-intro-banner-sub'>P r o f i l e</span>
            </div>

            {/* 正文 */}
            <div className='mob-intro-content'>
                <h2 className='mob-intro-title'>
                    <span className='mob-intro-title-cn'>趋境科技</span>
                    <span className='mob-intro-title-en'>APPROACHING.AI</span>
                </h2>
                <div className='mob-intro-text'>
                    {introductionList.companyContent.map((content, index) => (
                        <p key={index}>{renderContent(content)}</p>
                    ))}
                </div>

                {/* 使命 / 愿景 / 定位 */}
                <div className='mob-intro-values'>
                    <div className='mob-intro-value-card'>
                        <h3 className='mob-intro-value-title'>使命</h3>
                        <span className='mob-intro-value-en'>Mission</span>
                        <p className='mob-intro-value-desc'>算力更高效，智能更普惠</p>
                    </div>
                    <div className='mob-intro-value-card'>
                        <h3 className='mob-intro-value-title'>愿景</h3>
                        <span className='mob-intro-value-en'>Vision</span>
                        <p className='mob-intro-value-desc'>领航全球AI推理技术创新与产业升级，赋能企业AI能力高效构建</p>
                    </div>
                    <div className='mob-intro-value-card'>
                        <h3 className='mob-intro-value-title'>定位</h3>
                        <span className='mob-intro-value-en'>Positioning</span>
                        <p className='mob-intro-value-desc'>全球领先的<br/>高效能AI Token生产服务商</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

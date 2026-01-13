import './index.css'
import { motion } from 'motion/react'
import { scrollInViewOnceProps } from '@/utils/motionConfig'
import amaas from '@/assets/images/img/amaas.png'
export const AMaasSuperior = () => {

    return <div className='amaas-superior-container'>
        <div className='amaas-sup-content'>
            <div className="amaas-sup-title">AMaaS产品优势</div>
            <div className='amaas-sup-box'>
                <div className='amaas-sup-tab'>
                    <div className='amaas-sup-nav'>
                        <div className='sup-active'></div>
                        <div className='amaas-sup-tab-items item-active'>
                            <div className='amaas-sup-tab-title '>多卡异构，软件定义AI Infr</div>
                            <div className='amaas-sup-tab-desc'>兼容主流国产、非国产硬件，CPU+GPU、GPU+GPU异构推理</div>
                        </div>
                        <div className='amaas-sup-tab-items'>
                            <div className='amaas-sup-tab-title'>极致的推理性能</div>
                            <div className='amaas-sup-tab-desc'>自研企业级KLLM推理引擎，并发、吞吐、TTFT等性能跃升</div>
                        </div>
                        <div className='amaas-sup-tab-items'>
                            <div className='amaas-sup-tab-title'>模型天级更新</div>
                            <div className='amaas-sup-tab-desc'>天级完成各厂商新发布模型的适配及上线</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='amaas-sup-tab-info'>
                <img src={amaas} alt="" />
            </div>
        </div>
    </div>
}
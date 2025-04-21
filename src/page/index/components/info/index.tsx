
import { useNavigate } from 'react-router-dom';
import './index.css'
import rig from '@/assets/svg/left.svg'
export default function PageInfo() {
    const navgitor = useNavigate()
    return (
        <div className="section section-6">
            <div className='info-box'>
                <div className="info-title">
                    <div className='title-left'>企业资讯</div>
                    <div className='title-right' onClick={() => { navgitor('/qujinginfo') }}>
                        查看全部
                        <img src={rig} alt="" />
                    </div>
                </div>
                <div className='info-content'>
                    <div className="info-left">
                        <div className='info-left-img'>
                            <img src="" alt="" />
                        </div>
                        <div className='info-left-text'>
                            <div className='info-text-title ellipsis-2'>
                                央视新闻直播间报道｜趋境科技推动大模型应用低成本落地
                            </div>
                            <div className='info-text-desc ellipsis-2'>
                                3月1日，CCTV-13 央视新闻直播间播出《科技推动力·大模型“智”在何方：优化算力 推动大模型应用低成本落地》，报道了趋境科技的大模型推理优化解决方案，以推理一体机为例，展示了如何推动大模型应用低成本落地。
                            </div>
                        </div>
                    </div>
                    <div className='info-right'>
                        <div className='info-right-item'>
                            <div className='item-right ellipsis-2'>
                                <div className='info-text-title ellipsis-2'>
                                    KTransformers 高效适配曦云C500，单卡异构推理...
                                </div>
                                <div className='info-text-desc ellipsis-2'>
                                    在人工智能领域，算力与模型推理效率犹如驱动产业飞速发展的双引擎，成为决...
                                </div>
                            </div>
                            <div className='item-left'>
                                <img src="" alt="" />
                            </div>
                        </div>
                        <div className='info-right-item'>
                            <div className='item-right ellipsis-2'>
                                <div className='info-text-title ellipsis-2'>
                                    KTransformers 高效适配曦云C500，单卡异构推理...
                                </div>
                                <div className='info-text-desc ellipsis-2'>
                                    在人工智能领域，算力与模型推理效率犹如驱动产业飞速发展的双引擎，成为决...
                                </div>
                            </div>
                            <div className='item-left'>
                                <img src="" alt="" />
                            </div>
                        </div>
                        <div className='info-right-item'>
                            <div className='item-right ellipsis-2'>
                                <div className='info-text-title ellipsis-2'>
                                    KTransformers 高效适配曦云C500，单卡异构推理...
                                </div>
                                <div className='info-text-desc ellipsis-2'>
                                    在人工智能领域，算力与模型推理效率犹如驱动产业飞速发展的双引擎，成为决...
                                </div>
                            </div>
                            <div className='item-left'>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
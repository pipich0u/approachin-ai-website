import { IconFont } from '@/utils/antdUtils'
import './index.css'
import info from '@/assets/images/info_1.png'
import info1 from '@/assets/images/2.png'
import info2 from '@/assets/images/3.jpg'
import info3 from '@/assets/images/cctv.png'
export const IntroductionInfo = () => {

    return <div className='introduction-info-container'>
        <div className='in-info-title'>企业资讯</div>
        <div className='in-info-content'>
            <div className="in-info-item">
                <div className='in-info-item-left'>
                    <div className='in-info-item-content'>
                        <div className='in-info-item-title'>KTransformers 高效适配曦云C500，单卡异构推理DeepSeek R1</div>
                        <div className='in-info-item-desc'>在人工智能领域，算力与模型推理效率犹如驱动产业飞速发展的双引擎，成为决定技术突破与应用拓展的核心要素 。基于趋境科技与清华大学KVCache.AI团队开源的KTransformers推理架构，沐曦在曦云C500单卡GPU上实现重大突破，DeepSeek R1 - 671B满血版单并发解码速度高达16.5 tokens/s，比开源社区官方数据提升20%以上。此次不仅展现出曦云C500在单卡性能上的卓越优势，更凸显了开源共创的强大力量。让我们一同深入了解这一成果背后的技术奥秘与开源价值。</div>
                    </div>
                    <div className='in-info-item-time'>
                        <div>2025-03-20</div>
                        <div>查看详情<IconFont type='icon-up-s' className='detail-icon' /></div>
                    </div>
                </div>
                <div className='in-info-item-rig'>
                    <img src={info} alt='' />
                </div>
            </div>
            <div className='in-info-line' />
            <div className="in-info-item">
                <div className='in-info-item-left'>
                    <div className='in-info-item-content'>
                        <div className='in-info-item-title'>央视新闻直播间报道｜趋境科技推动大模型应用低成本落地</div>
                        <div className='in-info-item-desc'>3月1日，CCTV-13 央视新闻直播间播出《科技推动力·大模型“智”在何方：优化算力 推动大模型应用低成本落地》，报道了趋境科技的大模型推理优化解决方案，以推理一体机为例，展示了如何推动大模型应用低成本落地。</div>
                    </div>
                    <div className='in-info-item-time'>
                        <div>2025-03-07</div>
                        <div>查看详情<IconFont type='icon-up-s' className='detail-icon' /></div>
                    </div>
                </div>
                <div className='in-info-item-rig'>
                    <img src={info3} alt='' />
                </div>
            </div>
            <div className='in-info-line' />
            <div className="in-info-item">
                <div className='in-info-item-left'>
                    <div className='in-info-item-content'>
                        <div className='in-info-item-title'>趋境科技受邀参与36氪商业之王大会，谈AI大模型产业落地</div>
                        <div className='in-info-item-desc'>2024年11月28 - 29日，36氪WISE2024商业之王大会于北京盛大召开，AI领域成为焦点。趋境科技等企业代表齐聚一堂，共探AI大模型产业落地。从机械臂分拣到中医诊疗，AI已在多领域崭露头角，但也面临成本高、商业化难等挑战。在这场产业变革中，AI大模型未来将如何发展？是重塑交互方式，还是深度变革线下交互？各方观点碰撞，为行业发展指引方向，共同解锁AI大模型在千行百业的无限潜力，推动产业迈向新高度。</div>
                    </div>
                    <div className='in-info-item-time'>
                        <div>2024-12-05</div>
                        <div>查看详情<IconFont type='icon-up-s' className='detail-icon' /></div>
                    </div>
                </div>
                <div className='in-info-item-rig'>
                    <img src={info1} alt='' />
                </div>
            </div>
            <div className='in-info-line' />
            <div className="in-info-item">
                <div className='in-info-item-left'>
                    <div className='in-info-item-content'>
                        <div className='in-info-item-title'>高瓴创投、Z基金领投，趋境科技完成数千万元融资</div>
                        <div className='in-info-item-desc'>2025年2月27日消息，趋境科技已完成数千万元天使轮融资，由高瓴创投、Z基金领投。公司成立于2023年底，专注大模型推理优化，与清华团队合作成果反响热烈。其基于核心技术发布的推理工作站等产品，大幅降低推理门槛，已在多领域落地，并与多家企业达成战略合作。创始团队技术实力强，未来将持续推动大模型推理优化，助力企业智能化发展。</div>
                    </div>
                    <div className='in-info-item-time'>
                        <div>2025-02-27</div>
                        <div className=' cursor-pointer'>查看详情<IconFont type='icon-up-s' className='detail-icon' /></div>
                    </div>
                </div>
                <div className='in-info-item-rig'>
                    <img src={info2} alt='' />
                </div>
            </div>
        </div>
    </div>
}
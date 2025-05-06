
// import { useNavigate } from 'react-router-dom';
import './index.css'
import rig from '@/assets/svg/left.svg'
import cctv from "@/assets/images/cctv.png"
import one from "@/assets/images/1.png"
import two from "@/assets/images/2.png"
import three from "@/assets/images/3.jpg"
interface indexProps {
    id: string
}
export default function PageInfo({id}: indexProps) {
    // const navgitor = useNavigate()
    return (
        <div className="mob-info" id={id}>
            <div className='mob-info-box'>
                <div className="mob-info-title">
                    <div className='mob-info-title'>企业资讯</div>
                </div>
                <div className='mob-info-content'>
                    <div className="mob-info-item" onClick={() => window.open('https://mp.weixin.qq.com/s/nKwF20Ok2jqPXmavCef6oA')}>
                        <div className='mob-info-item-img'>
                            <img src={cctv} alt="" />
                        </div>
                        <div className='mob-info-item-text'>
                            <div className='mob-info-text-title ellipsis-2'>
                                央视新闻直播间报道｜趋境科技推动大模型应用低成本落地
                            </div>
                            <div className='mob-info-text-desc ellipsis-2'>
                                3月1日，CCTV-13 央视新闻直播间播出《科技推动力·大模型“智”在何方：优化算力 推动大模型应用低成本落地》，报道了趋境科技的大模型推理优化解决方案，以推理一体机为例，展示了如何推动大模型应用低成本落地。
                            </div>
                        </div>
                    </div>
                    <div className="mob-info-item" onClick={() => window.open('https://mp.weixin.qq.com/s/bG2LdVJLxfGRWr3NBiKoLQ')}>
                        <div className='mob-info-item-img'>
                            <img src={one} alt="" />
                        </div>
                        <div className='mob-info-item-text'>
                            <div className='mob-info-text-title ellipsis-2'>
                                KTransformers 高效适配曦云C500，单卡异构推理...
                            </div>
                            <div className='mob-info-text-desc ellipsis-2'>
                                在人工智能领域，算力与模型推理效率犹如驱动产业飞速发展的双引擎，成为决...
                            </div>
                        </div>
                    </div>
                    <div className="mob-info-item" onClick={() => window.open('https://mp.weixin.qq.com/s/K9yJtg_a9CDcvHli9A1B7g')}>
                        <div className='mob-info-item-img'>
                            <img src={two} alt="" />
                        </div>
                        <div className='mob-info-item-text'>
                            <div className='mob-info-text-title ellipsis-2'>
                                趋境科技受邀参与36氪商业之王大会，谈AI大模型产业落地
                            </div>
                            <div className='mob-info-text-desc ellipsis-2'>
                                2024年11月28，36氪WISE2024商业之王大会于北京盛大召开，AI领域成为焦点...
                            </div>
                        </div>
                    </div>
                    <div className="mob-info-item"  onClick={() => window.open('https://mp.weixin.qq.com/s/EA516k7uuNqQJfALjCAHng')}>
                        <div className='mob-info-item-img'>
                        <img src={three} alt="" />
                        </div>
                        <div className='mob-info-item-text'>
                            <div className='mob-info-text-title ellipsis-2'>
                            高瓴创投、Z基金领投，趋境科技完成数千万元融资
                            </div>
                            <div className='mob-info-text-desc ellipsis-2'>
                            在大模型发展浪潮中，落地难题成为横亘在行业前的关键阻碍。尽管大模型效果...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
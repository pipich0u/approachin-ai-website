import './index.css'
import info_1 from '@/assets/images/info_1.png'
import info_2 from '@/assets/images/info_2.png'
import info_3 from '@/assets/images/info_3.png'
import info_4 from '@/assets/images/info_4.png'
import left from '@/assets/svg/left.svg'
import TopNavs from "@/page/index/components/topNavs";
import PageContact from '@/page/index/components/contact'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
export default function InfoPage() {
    const gopage = (url: string) => {
        window.open(url)
    }
    const navgite = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const infolist = [
        {
            title: 'KTransformers 高效适配曦云C500，单卡异构推理DeepSeek R1',
            desc: '在人工智能领域，算力与模型推理效率犹如驱动产业飞速发展的双引擎，成为决定技术突破与应用拓展的核心要素 。基于趋境科技与清华大学KVCache.AI团队开源的KTransformers推理架构，沐曦在曦云C500单卡GPU上实现重大突破，DeepSeek R1 - 671B满血版单并发解码速度高达16.5 tokens/s，比开源社区官方数据提升20%以上。此次不仅展现出曦云C500在单卡性能上的卓越优势，更凸显了开源共创的强大力量。让我们一同深入了解这一成果背后的技术奥秘与开源价值。',
            time: '2025-03-20',
            img: info_1,
            url: "https://mp.weixin.qq.com/s/bG2LdVJLxfGRWr3NBiKoLQ"
        },
        {
            title: '从企业推理需求，看DeepSeek破圈到底改变了什么',
            desc: '当下，人工智能风头正劲，大模型更是重塑行业格局的“新引擎”。从简单神经网络到参数规模庞大的复杂模型，大模型已在多领域大显身手。DeepSeek-R1此时破圈，独特优势迅速引发企业推理需求激增。企业纷纷期望借其完成智能化转型，提升竞争力。然而，它的强稀疏化MoE架构在带来强大性能时，也引发难题，对显存要求极高，本地部署成本剧增，传统方案无力应对。面对这一困境，行业将如何突围？让我们一探究竟，看大模型推理领域如何开辟新径。',
            time: '2025-03-05',
            img: info_2,
            url: "https://mp.weixin.qq.com/s/yzq4c25YO8DD_oXUD1AvDQ"
        },
        {
            title: '“以存换算” 降低大模型落地门槛，清华系又跑出一家明星公司',
            desc: '随着人工智能技术的飞速发展，大模型已经成为推动各行各业智能化升级的重要力量。然而，大模型的应用也面临着成本、效率和性能三者之间难以平衡的挑战。为了解决这一难题，AI Infra赛道应运而生，专注于智能算力优化。趋境科技作为该领域的创新型企业，提出了一种创新的解决方案——以存换算和全系统协同优化推理解决方案，旨在通过充分利用存储资源来降低大模型的算力需求，从而在保证性能的前提下，显著降低模型部署成本。',
            time: '2024-12-02',
            img: info_3,
            url: "http://mp.weixin.qq.com/s/54E4fdYXJKl1oCH8J7L00g"
        },
        {
            title: '大模型推理成本降10倍、速度快20倍，「趋境科技」在推理端开创模型落地新路径',
            desc: '在大模型发展浪潮中，落地难题成为横亘在行业前的关键阻碍。尽管大模型效果不断突破，但高成本与长延时严重限制其应用。2024年，趋境科技带来新希望。它联合清华大学KVCache.AI团队发布开源项目KTransformers，在推理端取得重大突破，让大模型推理成本降10倍、速度快20倍。这背后有着怎样的创新技术与发展路径？让我们一同深入探索趋境科技在大模型落地领域的变革之举。',
            time: '2024-09-11',
            img: info_4,
            url: "https://mp.weixin.qq.com/s/XnaPzCIywV6NECMmG6Qa8g"
        },
    ]
    return (
        <div className='info'>
            <TopNavs></TopNavs>
            <div className='info-nav'>
                <div className='info-nav-title'>企业资讯</div>
                <div className='info-nav-desc'>聚焦战略、市场等，全面覆盖</div>
            </div>
            <div className='info-main'>
                {
                    infolist.map((item, index) => {
                        return (
                            <div className='info-main-item' key={index + ''}>
                                <div className='info-main-item-content' onClick={() => gopage(item.url)}>
                                    <div className='info-main-item-title'>{item.title}</div>
                                    <div className='info-main-item-desc'>{item.desc}</div>
                                    <div className='info-main-item-time'>
                                        <div >
                                            {item.time}
                                        </div>
                                        <div className='info-main-item-time-right'>
                                            <span>查看详情</span>
                                            <img src={left} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className='info-main-item-img' onClick={() => gopage(item.url)}>
                                    <img src={item.img} alt="" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <PageContact  />
        </div>
    )
}
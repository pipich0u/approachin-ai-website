import './index.css'
import computeBall from '@/assets/images/img/compute-ball.png'

const awards = [
    { title: '异构推理2.0', desc: 'GPU+CPU\n异构协同计算' },
    { title: '以存换算2.0', desc: 'KVCache\n存算分离架构' },
    { title: '虚实同构', desc: '虚拟化与物理\n统一调度引擎' },
    { title: '极致弹性', desc: '万卡级集群\n弹性伸缩能力' },
]

export default function MobAiCloud() {
    return (
        <div className="mob-aicloud">
            <div className="mob-aicloud-card">
                <h2 className="mob-aicloud-headline">
                    ATaaS: 全球领先的<span className="mob-aicloud-highlight">高效能Token</span>生产平台
                </h2>
                <p className="mob-aicloud-desc">
                    ATaaS通过极致的系统工程设计，重构模型推理的计算、调度、访存逻辑，能够在万卡级异构算力环境上提供<span className="mob-aicloud-highlight">高产能</span>、<span className="mob-aicloud-highlight">高性能</span>、<span className="mob-aicloud-highlight">高可靠</span>的Token服务
                </p>
                <div className="mob-aicloud-ball">
                    <img src={computeBall} alt="算力球" />
                </div>
                <div className="mob-aicloud-awards">
                    {awards.map((award, i) => (
                        <div key={i} className="mob-aicloud-award">
                            <div className="mob-aicloud-award-title">{award.title}</div>
                            <div className="mob-aicloud-award-desc">{award.desc}</div>
                        </div>
                    ))}
                </div>
                <div className="mob-aicloud-tags">
                    <span className="mob-aicloud-tag">万卡级</span>
                    <span className="mob-aicloud-tag">高产能</span>
                </div>
            </div>
        </div>
    )
}

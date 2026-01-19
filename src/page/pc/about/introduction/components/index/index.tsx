import './index.css'
import { motion } from 'motion/react'
import { initialLoadProps } from '@/utils/motionConfig'
import { introductionList } from '../../textConfig'
export const IntroductionIndex = () => {
    return <div className='introduction-index-container'>
        <div className='introduction-idx-content'>
            <motion.div {...initialLoadProps} className="introduction-idx-content-title">
                {introductionList.title}<div className='introduction-idx-content-title-color'>{introductionList.titleColor}</div>
            </motion.div>
            <motion.button {...initialLoadProps} className='introduction-idx-content-btn  animated-button'>
                <span className="text-white font-[380] bt-text">{introductionList.btnText}</span>
            </motion.button>
        </div>
        <div className='introduction-idx-company-box'>
            <motion.div {...initialLoadProps} className='introduction-idx-company'>
                <div className="introduction-idx-company-size introduction-idx-company-name">{introductionList.companyName}</div>
                <div className="introduction-idx-company-title introduction-idx-company-size">{introductionList.companyTitle}</div>
                <div className="introduction-idx-company-content">
                    趋境科技源自清华大学高性能计算研究所，获清华核心知识产权转让入股，并由中国工程院院士、清华大学计算机系教授郑纬民担任首席科学顾问。团队汇聚 10 余位博士级核心人才，联合业内顶尖技术团队共同打磨形 Mooncake、KTransformers 等核心推理框架，凭借深厚技术积淀实现大规模分布式智算集群吞吐性能跃升，是全球 AI Infra 推理领域技术演进的核心引领力量，更以千节点级智算集群优化为核心赛道，凭借日均万亿级别 Token 推理优化服务能力，成为驱动AI大模型产业化落地的关键支撑力量。
                    <br />
                </div>
                <div className="introduction-idx-company-content">
                      作为超大规模智算集群调度优化领域的标杆服务商，趋境以自主核心技术积淀为内核，将 Mooncake 作为核心技术工具与落地载体，搭配独创 MVaaS 推理系统，精准匹配不同部署环境下大中小型集群的业务需求，智能调度资源为 AI 业务 SLO 提供金融级稳定性保障。趋境的核心技术与产品已在阿里云、蚂蚁集团、月之暗面、科大讯飞、京东等多家头部企业完成规模化技术落地，覆盖互联网、金融科技、人工智能等核心领域：
                    <br />
                </div>
                <div className="introduction-idx-company-data">
                    {
                        introductionList.companyData.map((item, index) => (
                            <div key={index} className="in-idx-company-data-item">
                                <div className="introduction-idx-company-data-item-num">{item.num}</div>
                                <div className="introduction-idx-company-data-item-title">{item.title}</div>
                            </div>
                        ))
                    }
                </div>
            </motion.div>
        </div>
    </div>
}
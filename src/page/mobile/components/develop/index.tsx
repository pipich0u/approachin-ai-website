import './index.css'

import dev_1 from '@/assets/images/2023.png'
import dev_2 from '@/assets/images/202407.png'
import dev_3 from '@/assets/images/202409.png'
import dev_4 from '@/assets/images/202410.png'
import dev_5 from '@/assets/images/202502.png'
import dev_6 from '@/assets/images/dev_6.png'

export default function DevelopPage({ id }: { id: string }) {

    return (
        <div className="mob-develop" id={id}>
            <div className='mob-develop-top'>
                <div className='mob-develop-top-title'>
                    企业发展
                </div>
                <div className='mob-develop-top-text'>
                    以创新驱动为引擎，开辟增长新航道
                </div>
            </div>
            <div className='mob-develop-content'>
                <div className='mob-develop-item'>
                    <div className='mob-develop-years'>
                        2023年底
                    </div>
                    <div className='mob-develop-content-center'>

                    </div>
                    <div className='mob-develop-content-item'>
                        <img src={dev_1} alt="" />
                        <div className='mob-develop-content-item-title'>
                            公司成立<br />
                            种子轮融资：真知创投
                        </div>
                    </div>
                </div>
                <div className='mob-develop-item'>
                    <div className='mob-develop-content-item'>
                        <div className='mob-develop-content-item-title'>
                            首创“以存换算”技术<br />
                            首创“全系统异构协同推理架构”技术<br />
                            开源“Ktransformers”技术<br />
                            支持单卡运行千亿级大模型
                        </div>
                        <img src={dev_2} alt="" />
                    </div>
                    <div className='mob-develop-content-center'>
                    </div>
                    <div className='mob-develop-years'>
                        2024年7月
                    </div>
                </div>
                <div className='mob-develop-item'>
                    <div className='mob-develop-years'>
                        2024年9月
                    </div>
                    <div className='mob-develop-content-center'>
                    </div>
                    <div className='mob-develop-content-item'>
                        <div className='mob-develop-content-item-title'>
                            与长亭科技共同发布“长亭问津千亿大模型解决方案”<br />
                            由此安全领域迈入千亿级大模型时代<br />
                            高准确率、低延迟
                        </div>
                        <img src={dev_3} alt="" />
                    </div>
                </div>
                <div className='mob-develop-item'>
                    <div className='mob-develop-content-item'>
                        <div className='mob-develop-content-item-title'>
                            首次发布产品:大模型知识推理一体机<br />
                            「以存换算」「异构协同」<br />
                            支持千亿级别大模型<br />
                            开箱即用，推出简易应用平台<br />
                            提供丰富API接口
                        </div>
                        <img src={dev_4} alt="" />
                    </div>
                    <div className='mob-develop-content-center'>
                    </div>
                    <div className='mob-develop-years'>
                        2024年10月
                    </div>
                </div>
                {/* <div className='mob-develop-item'>
                    <div className='mob-develop-years'>
                        2025年1月
                    </div>
                    <div className='mob-develop-content-center'>
                    </div>
                    <div className='mob-develop-content-item'>
                        <div className='mob-develop-content-item-title'>
                            天使轮融资
                        </div>
                        <img src={dev_6} alt="" style={{ height: '90%' }} />
                    </div>
                </div> */}
                <div className='mob-develop-item'>
                    <div className='mob-develop-content-item'>
                        <div className='mob-develop-content-item-title'>
                            发布新版“KTransformers”0.2版<br />
                            <span style={{ color: '#868AFF' }}>
                                单个消费级GPU+CPU 本地部署DeepSeek-R1/V3671B大模型<br />
                                GitHub标星过万<br />
                            </span>
                            国内外社区热榜第一
                        </div>
                        <img src={dev_5} alt="" style={{ height: '50px' }} />
                    </div>
                    <div className='mob-develop-content-center'>
                    </div>
                    <div className='mob-develop-years'>
                        2025年2月
                    </div>
                </div>
                <div className='mob-develop-item'>
                    <div className='mob-develop-years'>
                        2025年3月
                    </div>
                    <div className='mob-develop-content-center'>
                    </div>
                    <div className='mob-develop-content-item'>
                        <div className='mob-develop-content-item-title'>
                            发布新产品“趋境AI 大模型推理软硬一体工作站”
                            液冷散热，安静无噪
                            单机部署DeepSeek 671B FP8精度，大模型部署门槛降低10倍
                            支持同时最高运行三个大模型
                            提供简易运维平台kLLM
                        </div>
                        {/* <img src={dev_2} alt="" /> */}
                    </div>

                </div>
                <div className='mob-develop-center'>
                </div>
            </div>
        </div>
    );
}

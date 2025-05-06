import { useEffect, useRef } from 'react';
import './index.css'

import line from '@/assets/images/dev-line.png'
import dev_1 from '@/assets/images/2023.png'
import dev_2 from '@/assets/images/202407.png'
import dev_3 from '@/assets/images/202409.png'
import dev_4 from '@/assets/images/202410.png'
import dev_5 from '@/assets/images/202502.png'
import dev_6 from '@/assets/images/dev_6.png'
export default function DevelopPage() {
    const scroll1Ref = useRef<HTMLDivElement>(null);
    const scroll2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scroll1 = scroll1Ref.current;
        const scroll2 = scroll2Ref.current;

        const handleScroll = () => {
            if (scroll1 && scroll2) {
                scroll2.scrollLeft = scroll1.scrollLeft;
            }
        };

        if (scroll1) {
            scroll1.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (scroll1) {
                scroll1.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className="section section-7">
            <div className='develop'>
                <div className='develop-top'>
                    <div className='dev-title'>企业发展</div>
                    <div className='dev-desc'>以创新驱动为引擎，开辟增长新航道</div>
                </div>

                <div className='dev-content scroll1' ref={scroll1Ref}>
                    <div className='dev-ox'>
                        <div className='dev-item top'  style={{ marginLeft: "100px" }}>
                            <img src={dev_1} alt="" />
                            <div className='text'>
                                公司成立<br />
                                种子轮融资：真知创投
                            </div>
                            <div className='dev-item-title'>2023年底</div>
                            <img src={line} alt="" className='line_dev' />
                        </div>
                        <div className='dev-item top' style={{ marginLeft: "800px" }} >
                            <img src={dev_3} alt="" />
                            <div className='text'>
                                与长亭科技共同发布“长亭问津千亿大模型解决方案”<br />
                                由此安全领域迈入千亿级大模型时代<br />
                                高准确率、低延迟
                            </div>
                            <div className='dev-item-title'>2024年9月</div>
                            <img src={line} alt="" className='line_dev' />
                        </div>
                        <div className='dev-item top' style={{ marginLeft: "1580px" }} >
                            <img src={dev_6} alt="" style={{width: '170px'}} />
                            <div className='text'>
                              天使轮融资
                            </div>
                            <div className='dev-item-title'>2025年1月</div>
                            <img src={line} alt="" className='line_dev' />
                        </div>
                        <div className='dev-item top' style={{ marginLeft: "2180px" }} >
                            {/* <img src={dev_1} alt="" /> */}
                            <div className='text'>
                                发布新产品“趋境AI 大模型推理软硬一体工作站”<br />
                                液冷散热，安静无噪<br />
                                单机部署DeepSeek 671B FP8精度，大模型部署门槛降低10倍<br />
                                支持同时最高运行三个大模型<br />
                                提供简易运维平台kLLM
                            </div>
                            <div className='dev-item-title'>2025年3月</div>
                            <img src={line} alt="" className='line_dev' />
                        </div>
                    </div>
                </div>

                <div className='dev-content scroll2' ref={scroll2Ref}>
                    <div className='dev-ox bottom-dev'>
                        <div className='dev-item bottom' style={{ marginLeft: "444px" }}>
                            <img src={line} alt="" className='line_dev' />
                            <div className='dev-item-title'>2024年7月</div>
                            <div className='text'>
                                首创“以存换算”技术<br />
                                首创“全系统异构协同推理架构”技术<br />
                                开源“Ktransformers”技术<br />
                                可支持单卡运行千亿级大模型
                            </div>
                            <img src={dev_2} alt="" />
                        </div>
                        <div className='dev-item bottom' style={{ marginLeft: "1150px" }}>
                            <img src={line} alt="" className='line_dev' />
                            <div className='dev-item-title'>2024年10月</div>
                            <div className='text'>
                                首次发布产品：大模型知识推理一体机<br />
                                「以存换算」「异构协同」技术赋能<br />
                                支持千亿级别大模型
                                开箱即用，推出简易应用平台
                                提供丰富API接口
                            </div>
                            <img src={dev_4} alt="" />
                        </div>
                        <div className='dev-item bottom' style={{ marginLeft: "1850px", height: "300px" }}>
                            <img src={line} alt="" className='line_dev' />
                            <div className='dev-item-title'>2025年2月</div>
                            <div className='text'>
                                发布新版“KTransformers”0.2版<br />
                                <span style={{ color: '#868AFF' }}>
                                    单个消费级GPU+CPU 本地部署DeepSeek-R1/V3671B大模型<br />
                                </span>
                                GitHub标星过万<br />
                                国内外社区热榜第一
                            </div>
                            <img src={dev_5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

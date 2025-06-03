
import './index.css'
import up from '../../../../assets/images/up.png'
import down from '../../../../assets/images/down.png'
import qxt from '../../../../assets/images/qxt.png'
import ychs from '../../../../assets/images/ychs.png'
interface indexProps {
    id: string
}
export default function PageTechnology({ id }: indexProps) {

    return (
        <div className="section section-3" id={id}>
            <div className='fp-overflow'>
                <div className='technology'>
                    <div className='technology-title'>
                        <div className='technology-title-1'>业界首创 </div>
                        <div className='technology-title-2'>以存换算全系统推理架构</div>
                        <div className='technology-title-3'>全系统协同优化，联动异构设备；突破显存限制，释放存算力</div>
                    </div>
                    <div className='technology-content'>
                        <div className='technology-content-size'>
                            <div className='technology-content-item'>
                                <div className='technology-content-item-title'>
                                    模型计算量<br />
                                    大幅度降低
                                </div>
                                <img src={down} alt="" />
                            </div>
                            <div className='technology-content-item'>
                                <div className='technology-content-item-title'>
                                    模型计算量<br />
                                    大幅度降低
                                </div>
                                <img src={down} alt="" />
                            </div>
                            <div className='technology-content-item'>
                                <div className='technology-content-item-title'>
                                    模型计算量<br />
                                    大幅度降低
                                </div>
                                <img src={up} alt="" />
                            </div>
                        </div>
                        <div className='technology-content-show'>
                            <div className='technology-content-show-item'>
                                <div className='technology-content-show-item-title'>
                                    <span>大模型从死记硬背到融合推理</span>
                                    <div>已存换算</div>
                                </div>
                                <img src={qxt} alt="" style={{ margin: "35px 0" }} />
                                <div className='technology-content-show-item-text'>面对新问题，融合历史与现场信息在线计算，复用历史结果，计算量降为十分之一 。</div>
                            </div>
                            <div className='technology-content-show-item'>
                                <div className='technology-content-show-item-title'>
                                    <span>充分释放全系统算力</span>
                                    <div>全系统异构协同架构</div>
                                </div>
                                <img src={ychs} alt="" />
                                <div className='technology-content-show-item-text'>高性能推理架构，高效融合来自存储、CPU、GPU、NPU 的全系统算力。</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
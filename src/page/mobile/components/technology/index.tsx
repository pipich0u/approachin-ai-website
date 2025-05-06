
import './index.css'
import up from '../../../../assets/images/up.png'
import down from '../../../../assets/images/down.png'
import qxt from '../../../../assets/images/qxt.png'
import ychs from '../../../../assets/images/ychs.png'
export default function PageTechnology() {

    return (
        <div className="mob-technology">
            <div className='mob-technology-box'>
                <div className='mob-technology-title'>
                    <div className='mob-technology-title-1'>业界首创以存换算</div>
                    <div className='mob-technology-title-2'>全系统推理架构</div>
                    <div className='mob-technology-title-3'>全系统协同优化，联动异构设备；突破显存限制，释放存算力</div>
                </div>
                <div className='mob-technology-content'>
                    <div className='mob-technology-content-size'>
                        <div className='mob-technology-content-left'>
                            <div className='mob-technology-content-item'>
                                <div className='mob-technology-content-item-title'>
                                    模型计算量<br />
                                    大幅度降低
                                </div>
                                <img src={down} alt="" />
                            </div>
                            <div className='mob-technology-content-item'>
                                <div className='mob-technology-content-item-title'>
                                    模型运行成本<br />
                                    大幅度降低
                                </div>
                                <img src={down} alt="" />
                            </div>
                        </div>
                        <div className='mob-technology-content-item'>
                            <div className='mob-technology-content-item-title'>
                                模型性能推理<br />
                                大幅度提升
                            </div>
                            <img src={up} alt="" />
                        </div>
                    </div>
                    <div className='mob-technology-content-show'>
                        <div className='mob-technology-content-show-item'>
                            <div className='mob-technology-content-show-item-title'>
                                <span>大模型从死记硬背到融合推理</span>
                                <div>已存换算</div>
                            </div>
                            <img src={qxt} alt="" style={{ margin: "10px 0" }} />
                            <div className='mob-technology-content-show-item-text'>面对新问题，融合历史与现场信息在线计算，复用历史结果，计算量降为十分之一 。</div>
                        </div>
                        <div className='mob-technology-content-show-item'>
                            <div className='mob-technology-content-show-item-title'>
                                <span>充分释放全系统算力</span>
                                <div>全系统异构协同架构</div>
                            </div>
                            <img src={ychs} alt="" />
                            <div className='mob-technology-content-show-item-text'>高性能推理架构，高效融合来自存储、CPU、GPU、NPU 的全系统算力。</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
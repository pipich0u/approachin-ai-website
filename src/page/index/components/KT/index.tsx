
import './index.css'
export default function PageKt() {


    return (
        <div className="section section-4">
            <div className='kt-container'>
                <div className='kt-left'>
                    <div className='kt-left-title'>
                        开源个人版异构协同推理框架 <br />
                        KTransformers
                    </div>
                    <div className='kt-left-content'>
                        <div className='kt-left-content-item'>
                            业界首个仅需单 GPU 卡跑1M超长上下文的高性能推理框架，生成速度达 16.91 token/s，10 倍于 Llama.cpp，同时维持接近满分的“大海捞针”能力。
                        </div>
                        <div className='kt-left-content-item'>
                            仅需单个消费级 GPU 即可在本地运行 Mixtral 8x22B 和 DeepSeek-Coder-V2 等千亿级大模型，性能数倍于 Llama.cpp。
                        </div>
                        <div className='kt-left-content-item'>
                            Prefill 和 Generate 性能大幅领先业界方案：Prefill（响应延迟）相比业界方案快 6 倍 以上、Generate（生成速度）相比业界方案快 3.48 倍 以上。
                        </div>
                    </div>
                </div>
                <div className='kt-right'>
                   <div className='vido'>
        
                   </div>
                </div>
            </div>
        </div>
    );
}
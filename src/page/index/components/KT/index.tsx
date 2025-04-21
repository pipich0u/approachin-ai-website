
import './index.css'
import k from '@/assets/images/K.png'
export default function PageKt() {


    return (
        <div className="section section-4">
            <div className='kt-container'>
                <div className='kt-left'>
                    <div className='kt-left-title'>
                        <div className='kt-left-title-top'>
                            开源个人版高性能推理框架
                        </div>
                        <div className='kt-left-title-bot'>
                            <img src={k} alt="" />
                            Transformers
                        </div>
                    </div>
                    <div className='kt-left-content'>
                        <div className='kt-left-content-item'>
                            趋境科技与清华大学共同合作开源
                        </div>
                        <div className='kt-left-content-item text-red'>
                            业界首个仅需单个消费级GPU+CPU即可在本地运行DeepSeek 671B等千亿级别大模型，Prefill 最高达 286 tokens/s，Decode 最高达 40 tokens/s，最高超过 Llama.cpp 27 倍。
                        </div>
                        <div className='kt-left-content-item'>
                            业界首个仅需单个消费级GPU跑 1M超长上下文，Decode 速度最高达 16.91 tokens/s，超过 Llama.cpp 10 倍，同时维持接近满分的“大海捞针”的能力。
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
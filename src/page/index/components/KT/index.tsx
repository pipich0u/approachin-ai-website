
import './index.css'
import k from '@/assets/images/K.png'
import vido from '@/assets/audio/VS.mp4'
import three from '@/assets/images/3.png'
interface indexProps {
    id: string
}
export default function PageKt({ id }: indexProps) {


    return (
        <div className="section section-4" id={id}>
            <div className='fp-overflow'>
                <div className='kt-box'>
                    <div className='kt-left-title'>
                        <div className='kt-left-title-top'>
                            开源个人版高性能推理框架
                        </div>
                        <div className='kt-left-title-bot'>
                            <img src={k} alt="" />
                            Transformers
                        </div>
                    </div>
                    <div className='kt-container'>
                        <div className='kt-left'>
                            <div className='kt-left-content'>
                                <div className='kt-left-content-item ktbg-1'>
                                    <div className='kt-left-content-item-title'>校企联合</div>
                                    <div className='kt-left-content-item-content'>趋境科技与清华大学 KVCache.AI 团队合作开源</div>
                                </div>
                                <div className='kt-left-content-item ktbg-2'>
                                    <div className='kt-left-content-item-title'>超强算力</div>
                                    <div className='kt-left-content-item-content'>业界首个仅需单个消费级 GPU+CPU 即可在本地运行DeepSeek 671B 等千亿级别大模型，Prefill 最高达 436 tokens/s，Decode 最高达 21 tokens/s，最高超过 Llama.cpp 30 倍。</div>
                                </div>
                                <img src={three} alt="" className='kt-left-content-item-img' />
                                {/* <div className='kt-left-content-item ktbg-3'>
                                    <div className='kt-left-content-item-title'>推理飞跃</div>
                                    <div className='kt-left-content-item-content'>业界首个仅需单个消费级GPU跑 1M超长上下文，Decode 速度最高达 16.91 tokens/s，超过 Llama.cpp 10 倍，同时维持接近满分的“大海捞针”的能力。</div>
                                </div> */}
                            </div>
                        </div> 
                        <div className='kt-right'>
                            <video controls className='vido' disablePictureInPicture controlsList="nodownload noremoteplayback noplaybackrate">
                                <source src={vido} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import './index.css'
import line from '../../../../assets/images/line.png'

interface indexProps {
    id: string
}
export default function PageIndex({ id }: indexProps) {

    return (
        <div className="section section-1" id={id}>
            <div className='fp-overflow'>
                <div className="title">
                    <div className='title-top'>An accelerated, accessible, affordable approach to AI</div>
                    <div className='title-center'>加速到来你的AI世界</div>
                    <div className='line'>
                        <img src={line} alt="" />
                    </div>
                    <div className='title-bottom'>高性能、低成本、高效率落地私有化大模型的最佳选择</div>
                </div>
            </div>
        </div>
    );
}
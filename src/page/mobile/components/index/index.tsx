
import './index.css'
import line from '@/assets/images/line.png'
interface indexProps {
    id: string
}
export default function PageIndex({ id }: indexProps) {

    return (
        <div className="mob-index" id={id}>
            <div className="mob-title">
                <div className='mob-title-top'>An accelerated, accessible, affordable approach to AI</div>
                <div className='mob-title-center'>加速到来你的AI世界</div>
                <div className='mob-line'>
                    <img src={line} alt="" />
                </div>
                <div className='mob-title-bottom'>高性能、低成本、高效率<br /> 落地私有化大模型的最佳选择</div>
            </div>
        </div>
    );
}
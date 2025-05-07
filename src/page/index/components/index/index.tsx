
import './index.css'
import line from '../../../../assets/images/line.png'
export default function PageIndex() {
   
    return (
        <div className="section section-1" id='0'>
            <div className="title">
                <div className='title-top'>An accelerated, accessible, affordable approach to AI</div>
                <div className='title-center'>加速到来你的AI世界</div>
                <div className='line'>
                    <img src={line} alt="" />
                </div>
                <div className='title-bottom'>高性能、低成本、高效率落地私有化大模型的最佳选择</div>
            </div>
        </div>
    );
}
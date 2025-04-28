
import './index.css'

import line from '@/assets/images/dev-line.png'
import first from '@/assets/images/2023.png'
export default function DevelopPage() {

    return (
        <div className="section section-7">
            <div className='develop'>
                <div className='develop-top'>
                    <div className='dev-title'>企业发展</div>
                    <div className='dev-desc'>以创新驱动为引擎，开辟增长新航道</div>
                </div>
                <div className='dev-content'>
                    <div className='dev-ox'>
                        <div className='dev-item top'>
                            <img src={first} alt="" />
                            <div className='text'>
                            公司成立<br />
                            种子轮融资：真知创投
                            </div>
                            <div className='dev-item-title'>2023年底</div>
                            <img src={line} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}   
import { useEffect, useRef } from 'react';
import './index.css'

import line from '@/assets/images/dev-line.png'
import dev_1 from '@/assets/images/2023.png'
import dev_2 from '@/assets/images/202407.png'
import dev_3 from '@/assets/images/202409.png'
import dev_4 from '@/assets/images/202410.png'
import dev_5 from '@/assets/images/202502.png'

export default function DevelopPage({ id }: { id: string }) {


    return (
        <div className="mob-develop" id={id}>
            <div className='mob-develop-top'>
                <div className='mob-develop-top-title'>
                    企业发展
                </div>
                <div className='mob-develop-top-text'>
                    以创新驱动为引擎，开辟增长新航道
                </div>
            </div>
            <div className='mob-develop-content'>
                <div className='mob-develop-item'>
                    <div className='mob-develop-years'>
                        2023年底
                    </div>
                    <div className='mob-develop-content-item'>
                        <div className='mob-develop-content-item-title'>
                            首创“以存换算”技术<br />
                            首创“全系统异构协同推理架构”技术<br />
                            开源“Ktransformers”技术<br />
                            可支持单卡运行千亿级大模型
                        </div>
                        <img src={dev_1} alt="" />
                    </div>
                </div>
                <div className='mob-develop-item'>
                    <div className='mob-develop-content-item'>
                        <div className='mob-develop-content-item-title'>
                            公司成立<br />
                            种子轮融资：真知创投
                        </div>
                        <img src={dev_1} alt="" />
                    </div>
                    <div className='mob-develop-years'>
                        2024年7月
                    </div>
                </div>
                <div className='mob-develop-center'>
                </div>
            </div>
        </div>
    );
}

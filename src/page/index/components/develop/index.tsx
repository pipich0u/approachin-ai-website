import { useEffect, useRef } from 'react';
import './index.css'

import line from '@/assets/images/dev-line.png'
import dev_1 from '@/assets/images/2023.png'
import dev_2 from '@/assets/images/202407.png'

export default function DevelopPage() {
    const scroll1Ref = useRef<HTMLDivElement>(null);
    const scroll2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scroll1 = scroll1Ref.current;
        const scroll2 = scroll2Ref.current;

        const handleScroll = () => {
            if (scroll1 && scroll2) {
                scroll2.scrollLeft = scroll1.scrollLeft;
            }
        };

        if (scroll1) {
            scroll1.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (scroll1) {
                scroll1.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className="section section-7">
            <div className='develop'>
                <div className='develop-top'>
                    <div className='dev-title'>企业发展</div>
                    <div className='dev-desc'>以创新驱动为引擎，开辟增长新航道</div>
                </div>

                <div className='dev-content scroll1' ref={scroll1Ref}>
                    <div className='dev-ox'>
                        <div className='dev-item top'>
                            <img src={dev_1} alt="" />
                            <div className='text'>
                                公司成立<br />
                                种子轮融资：真知创投
                            </div>
                            <div className='dev-item-title'>2023年底</div>
                            <img src={line} alt="" className='line_dev' />
                        </div>
                    </div>
                </div>

                <div className='dev-content scroll2' ref={scroll2Ref}>
                    <div className='dev-ox'>
                        <div className='dev-item bottom' style={{ marginLeft: "244px" }}>
                            <img src={line} alt="" className='line_dev'/>
                            <div className='dev-item-title'>2024年7月</div>
                            <div className='text'>
                                首创“以存换算”技术<br />
                                首创“全系统异构协同推理架构”技术<br />
                                开源“Ktransformers”技术<br />
                                可支持单卡运行千亿级大模型
                            </div>
                            <img src={dev_2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

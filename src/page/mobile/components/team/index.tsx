
import './index.css'
import mobLine from '@/assets/images/mob-line.png'
interface indexProps {
    id: string
}
export default function PageTeam({ id }: indexProps) {


    return (
        <div className="team-mob" id={id}>
            {/* <div className='team-info-mob'> */}
            <div className='team-title-mob'>
                团队介绍
            </div>
            <div className='team-desc-mob'>
                公司创始团队均来自清华大学计算机系，以郑纬民院士为首，团队成员 90% 以上为硕士、50% 以上为博士，均毕业于清华、新加坡国立、北航、北邮、北理等国内外知名院校，来自英特尔、百度、字节、深信服等行业知名企业，负责关键产品的研发与交付，具有丰富的产品开发和产品上市经验。
            </div>
            {/* </div> */}
            <div className='team-content-mob'>
                <div className='team-item-mob'>
                    <div className='team-item-top-mob'>
                        <div className="team-item-name">郑纬民-院士</div>
                        <img src={mobLine} alt="" className='mob-line' />
                        <div className="team-item-role">首席顾问</div>
                    </div>
                    <div className='team-item-bottom-mob'>
                        <li>中国工程院院士;</li>
                        <li>清华大学计算机科学与技术系教授;</li>
                        <li>超算领域专家，海致科技首席科学家;</li>
                        <li>博士生导师，高性能计算研究所所长。</li>
                    </div>
                </div>
                <div className='team-item-mob'>
                    <div className='team-item-top-mob'>
                        <div className="team-item-name">艾智远</div>
                        <img src={mobLine} alt="" className='mob-line' />
                        <div className="team-item-role">趋境科技 CEO</div>
                    </div>
                    <div className='team-item-bottom-mob'>
                        <li>清华大学计算机系博士;</li>
                        <li>主要研究方向是并行计算、分布式存储、AI计算引擎优化等;</li>
                        <li>曾任上市公司深信服大数据、数字化、AI应用等多个部门的研发主管，拥有多年的产品研发和市场化落地经验。</li>
                    </div>
                </div>
            </div>
        </div>
    );
}
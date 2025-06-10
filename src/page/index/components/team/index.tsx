
import './index.css'
import line from '@/assets/images/line-team.png'
interface indexProps {
    id: string
}
export default function PageTeam({ id }: indexProps) {
    const teamList = [
        {
            name: '郑纬民-院士',
            title: '首席顾问',
            list: ['中国工程院院士，清华大学计算机科学与技术系教授', '超算领域专家，海致科技首席科学家', '博士生导师，高性能计算研究所所长']
        },
        {
            name: '艾智远',
            title: '趋境科技 CEO',
            list: ['清华大学计算机系博士', '主要研究方向是并行计算、分布式存储、AI计算引擎优化等', '曾任上市公司深信服大数据、数字化、AI应用等多个部门的研发主管，拥有多年的产品研发和市场化落地经验。']
        },
        // {
        //     name: '郑纬民',
        //     title: '首席顾问',
        //     list: ['中国工程院院士，清华大学计算机科学与技术系教授', '超算领域专家，海致科技首席科学家', '博士生导师，高性能计算研究所所长']
        // },

    ]
    return (
        <div className="section section-8" id={id}>
            <div className="team-box">
                <div className='team-title'>
                    <div className="title-1">团队介绍</div>
                    <div className="title-2">公司创始团队均来自清华大学计算机系，以郑纬民院士为首，团队成员 90% 以上为硕士、50% 以上为博士<br />
                        均毕业于清华、新加坡国立、北航、北邮、北理等国内外知名院校，来自英特尔、百度、字节、深信服等行业知名企业，<br />
                        负责关键产品的研发与交付，具有丰富的产品开发和产品上市经验。</div>
                </div>
                <div className='team-content'>
                    <div className="item-team" >
                        <div className='item-left-team'>
                            <div className='item-name-team'>郑纬民-院士</div>
                            <div className='item-title-team'>首席顾问</div>
                        </div>
                        <img src={line} alt="" className='line-team' />
                        <div className='item-right-team'>
                            <ul>
                                <li >中国工程院院士，清华大学计算机科学与技术系教授</li>
                                <li >超算领域专家，海致科技首席科学家</li>
                                <li >博士生导师，高性能计算研究所所长</li>
                            </ul>
                        </div>
                    </div>
                    <div className="item-team" >
                        <div className='item-left-team'>
                            <div className='item-name-team-ai'>艾智远</div>
                            <div className='item-title-team'>趋境科技 CEO</div>
                        </div>
                        <img src={line} alt="" className='line-team' />
                        <div className='item-right-team'>
                            <ul>
                                <li >清华大学计算机系博士</li>
                                <li >主要研究方向是并行计算、分布式存储、AI计算引擎优化等</li>
                                <li >曾任上市公司深信服大数据、数字化、AI应用等多个部门的研发主管，拥有多年的产品研发和市场化落地经验。</li>
                            </ul>
                        </div>
                    </div>
                    {/* {
                        teamList.map((item, index) => {
                            return < div className="item-team" key={item.name + index + ''}>
                                <div className='item-left-team'>
                                    <div className='item-name-team'>{item.name}</div>
                                    <div className='item-title-team'>{item.title}</div>
                                </div>
                                <img src={line} alt="" className='line-team' />
                                <div className='item-right-team'>
                                    <ul>
                                        {
                                            item.list.map((items, indexs) => {
                                                return <li key={items + indexs + ''}>{items}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        })
                    } */}
                </div>
            </div>
        </div >
    );
}
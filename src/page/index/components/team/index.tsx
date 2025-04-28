
import './index.css'
import line from '@/assets/images/line-team.png'
export default function PageTeam() {
    const teamList = [
        {
            name: '郑纬民',
            title: '首席顾问',
            list: ['中国工程院院士，清华大学计算机科学与技术系教授', '超算领域专家，海致科技首席科学家', '博士生导师，高性能计算研究所所长']
        },
        {
            name: '郑纬民',
            title: '首席顾问',
            list: ['中国工程院院士，清华大学计算机科学与技术系教授', '超算领域专家，海致科技首席科学家', '博士生导师，高性能计算研究所所长']
        },
        {
            name: '郑纬民',
            title: '首席顾问',
            list: ['中国工程院院士，清华大学计算机科学与技术系教授', '超算领域专家，海致科技首席科学家', '博士生导师，高性能计算研究所所长']
        },

    ]
    return (
        <div className="section section-8">
            <div className="team-box">
                <div className='team-title'>
                    <div className="title-1">团队介绍</div>
                    <div className="title-2">公司创始团队均来自清华大学计算机系，已郑纬民院士为首，团队成员 90% 以上为硕士、50% 以上为博士<br />均毕业于清华、新加坡国立、北航、北邮、北理等国内外知名院校，来自英特尔、百度、字节、深信服等行业知名企业，负责关键产品的研发与交付，具有丰富的产品开发和产品上市经验。</div>
                </div>
                <div className='team-content'>
                    {
                        teamList.map((item, index) => {
                            return < div className="item" key={item.name + index + ''}>
                                <div className='item-left'>
                                    <div className='item-name'>{item.name}</div>
                                    <div className='item-title'>{item.title}</div>
                                </div>
                                <img src={line} alt="" className='line-team'/>
                                <div className='item-right'>
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
                    }
                </div>
            </div>
        </div >
    );
}
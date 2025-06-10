
import './index.css'
import logo from '../../../../assets/svg/b-logo.svg'
import ewm from '../../../../assets/images/ewm.png'
import { useNavigate } from 'react-router-dom';

interface ContactProps {
    onNavigate: (index: string) => void;
}
export default function PageContact({ onNavigate }: ContactProps) {
    // const navigate =useNavigate();
    const open = () => {
        window.open('https://beian.mps.gov.cn/#/query/webSearch?code=11010802044671')
    }
    const openIcp = () => {
        window.open('https://beian.miit.gov.cn/#/Integrated/index')
    }
    const about = [
        { title: '产品介绍', id: 1, href: 'pageProduct' },
        { title: '技术方案', id: 2, href: 'pageTechnology' },
        { title: 'KTransformers', id: 3, href: 'pageKt' },
        { title: '趋境资讯', id: 4, href: 'pageInfo' },
        { title: '企业发展', id: 5, href: 'DevelopPage' },
        { title: '团队介绍', id: 6, href: 'PageTeam' },
    ]
    const map = 'https://map.baidu.com/search/%E5%8C%97%E4%BA%AC%E5%B8%82%E6%B5%B7%E6%B7%80%E5%8C%BA%E4%B8%9C%E5%8D%87%E5%A4%A7%E5%8E%A6ab%E5%BA%A7/@12951048.68,4838129.9350000005,20.17z?querytype=s&da_src=shareurl&wd=%E5%8C%97%E4%BA%AC%E5%B8%82%E6%B5%B7%E6%B7%80%E5%8C%BA%E4%B8%9C%E5%8D%87%E5%A4%A7%E5%8E%A6AB%E5%BA%A7&c=131&src=0&pn=0&sug=0&l=13&b=(12924003,4826192;12985443,4855344)&from=webmap&biz_forward=%7B%22scaler%22:1,%22styles%22:%22pl%22%7D&device_ratio=1'
    return (
        <div className="section section-9">
            <div className='fp-overflow'>
                <div className='contact-box'>
                    <div className='contact-box-left'>
                        <img src={logo} alt="" className='canlogo' />
                        <div className='contact-box-left-text'>
                            北京趋境科技成立于2023年底，专注大模型推理加速方案。其创始团队来自清华计算机系，成员多为硕博，毕业于知名院校，有丰富产品经验。公司基于首创架构推出“AI大模型推理软硬一体机”，通过协同多种设备释放异构算力，解决大模型落地难题。目前已与安全、教育、制造等行业企业合作，助推大模型业务升级。
                        </div>
                    </div>
                    <div className='contact-box-right'>
                        <div className='content-box-right-item'>
                            <div className='content-box-right-item-title'>关于我们</div>
                            {
                                about.map((item, index) => {
                                    return <div className='content-box-right-item-text' onClick={() => onNavigate(item.href)} key={index + Date() + ""} >{item.title}</div>
                                })
                            }
                        </div>
                        <div className='content-box-right-item'>
                            <div className='content-box-right-item-title'>联系我们</div>
                            <div className='content-box-right-item-texts'>邮箱：market@approaching.com</div>
                            <div className='content-box-right-item-texts' onClick={() => window.open(map)}>地址：北京市海淀区东升大厦AB座</div>
                        </div>
                        <div className='content-box-right-item'>
                            <div className='content-box-right-item-title'>关注我们</div>
                            <img src={ewm} alt="" className='ewm' />
                        </div>
                    </div>
                </div>
                <div className='contact-icp'>
                    <div className='contact-icp-text' >
                        <span onClick={open}>京公网安备11010802044671号</span>
                        <span onClick={openIcp} style={{ marginLeft: '10px' }}>京ICP备2024077296号-1</span>
                    </div>
                    <div className='contact-icp-text' style={{ marginTop: '6px' }}>Copyright © 趋境科技 2025 版权所有</div>
                </div>
            </div>
        </div>
    );
}
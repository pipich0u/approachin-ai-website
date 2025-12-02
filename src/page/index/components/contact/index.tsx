
import './index.css'
import logo from '../../../../assets/svg/b-logo.svg'
import ewm from '../../../../assets/images/ewm.png'
import { useNavigate } from 'react-router-dom';

// interface ContactProps {
//     // onNavigate: (index: string) => void;
// }
export default function PageContact() {
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
    const map = 'https://map.baidu.com/poi/%E4%BC%98%E7%9B%9B%E5%A4%A7%E5%8E%A6-D%E5%BA%A7/@12951705.819582434,4837827.921399237,19.34z?uid=9bec76784f71b6ff25d2bbdb&info_merge=1&isBizPoi=false&ugc_type=3&ugc_ver=1&device_ratio=1&compat=1&pcevaname=pc4.1&querytype=detailConInfo&da_src=shareurl'
    return (
        <div className="section section-9">
            <div className='fp-overflow'>
                <div className='contact-box'>
                    <div className='contact-box-left'>
                        <img src={logo} alt="" className='canlogo' />
                        <div className='contact-box-left-text'>
                            趋境科技成立于 2023 年底，专注大模型推理优化，助力企业低成本落地使用大模型，是大模型推理加速先行者。创始团队来自清华计算机系，成员多为硕博，毕业于知名院校，拥有丰富的技术和产品化经验。团队首创“以存换算”和“全系统异构协同推理”技术架构，开创大模型私有化部署新路径，将大模型推理门槛降低10倍，赋能企业低成本创新。基于创新技术架构发布的产品大模型推理一体机，实现软硬一体开箱即用，提供从硬件-推理引擎-大模型自动化运维平台-应用的全栈式解决方案，当前已在金融、安全、法律、医疗等领域落地使用。
                        </div>
                    </div>
                    <div className='contact-box-right'>
                        <div className='content-box-right-item'>
                            <div className='content-box-right-item-title'>关于我们</div>
                            {
                                about.map((item, index) => {
                                    return <div className='content-box-right-item-text' 
                                    // onClick={() => onNavigate(item.href)} 
                                    key={index + Date() + ""} >{item.title}</div>
                                })
                            }
                        </div>
                        <div className='content-box-right-item'>
                            <div className='content-box-right-item-title'>联系我们</div>
                            <div className='content-box-right-item-texts'>邮箱：quxin@approaching.ai</div>
                            <div className='content-box-right-item-text' onClick={() => window.open(map)}>地址：北京市海淀区优盛大厦 D 座</div>
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
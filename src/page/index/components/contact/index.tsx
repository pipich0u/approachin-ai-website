
import './index.css'
import logo from '../../../../assets/svg/b-logo.svg'
import ewm from '../../../../assets/images/ewm.png'
import { useNavigate } from 'react-router-dom';

interface ContactProps {
    onNavigate: (index: number) => void;
}
export default function PageContact() {
    const navigate =useNavigate();
    const open = () => {
        window.open('https://beian.mps.gov.cn/#/query/webSearch?code=11010802044671')
    }
    const openIcp = () => {
        window.open('https://beian.miit.gov.cn/#/Integrated/index')
    }
    const about = [
        {
            title: '趋境资讯',
            id: 5
        },
        {
            title: '合作案例',
            id: 4
        },
        {
            title: '技术方案',
            id: 2
        },
        {
            title: '行业介绍',
            id: 2
        },
        {
            title: '关于我们',
            id: 6
        },
    ]
    return (
        <div className="section section-8">
            <div className='contact-box'>
                <div className='contact-box-left'>
                    <img src={logo} alt="" />
                    <div className='contact-box-left-text'>
                        趋境科技专注大模型推理加速方案，<br />
                        助企业低成本部署私有化大模型 。
                    </div>
                </div>
                <div className='contact-box-right'>
                    <div className='content-box-right-item'>
                        <div className='content-box-right-item-title'>关于我们</div>
                        {
                            about.map((item, index) => {
                                return <div className='content-box-right-item-text' key={index + Date() + ""} >{item.title}</div>
                            })
                        }
                    </div>
                    <div className='content-box-right-item'>
                        <div className='content-box-right-item-title'>联系我们</div>
                        <div className='content-box-right-item-text'>邮箱：market@approaching.com</div>
                        <div className='content-box-right-item-text'>地址：北京市海淀区东升大厦AB座</div>
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
    );
}
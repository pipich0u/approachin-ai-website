
import './index.css'
import logo from '../../../../assets/svg/b-logo.svg'
import ewm from '../../../../assets/images/ewm.png'
// import { useNavigate } from 'react-router-dom';

interface ContactProps {
    onNavigate: (id: string) => void
}
export default function PageContact({ onNavigate }: ContactProps) {
    // const navigate =useNavigate();
    // const map = 'https://map.baidu.com/search/%E5%8C%97%E4%BA%AC%E5%B8%82%E6%B5%B7%E6%B7%80%E5%8C%BA%E4%B8%9C%E5%8D%87%E5%A4%A7%E5%8E%A6ab%E5%BA%A7/@12951048.68,4838129.9350000005,20.17z?querytype=s&da_src=shareurl&wd=%E5%8C%97%E4%BA%AC%E5%B8%82%E6%B5%B7%E6%B7%80%E5%8C%BA%E4%B8%9C%E5%8D%87%E5%A4%A7%E5%8E%A6AB%E5%BA%A7&c=131&src=0&pn=0&sug=0&l=13&b=(12924003,4826192;12985443,4855344)&from=webmap&biz_forward=%7B%22scaler%22:1,%22styles%22:%22pl%22%7D&device_ratio=1'
    const open = () => {
        window.open('https://beian.mps.gov.cn/#/query/webSearch?code=11010802044671')
    }
    const openIcp = () => {
        window.open('https://beian.miit.gov.cn/#/Integrated/index')
    }
    const about = [
        {
            title: '产品介绍',
            id: 'pageProduct'
        },
        {
            title: '技术方案',
            id: 'pageTechnology'
        },
        {
            title: 'Ktransformer',
            id: 'pageKt'
        },
        // {
        //     title: '合作案例',
        //     id: 'pageInfo'
        // },
        {
            title: '趋境资讯',
            id: 'pageInfo'
        },
        {
            title: '企业发展',
            id: 'DevelopPage'
        },
        {
            title: '团队介绍',
            id: 'PageTeam'
        },
    ]
    return (
        <div className="mob-contact">
            <div className='mob-contact-box'>
                <div className='mob-contact-box-left'>
                    <img src={logo} alt="" />
                    <div className='mob-contact-box-left-text'>
                        趋境科技成立于 2023 年底，专注大模型推理优化，助力企业低成本落地使用大模型，是大模型推理加速先行者。创始团队来自清华计算机系，成员多为硕博，毕业于知名院校，拥有丰富的技术和产品化经验。团队首创“以存换算”和“全系统异构协同推理”技术架构，开创大模型私有化部署新路径，将大模型推理门槛降低10倍，赋能企业低成本创新。基于创新技术架构发布的产品大模型推理一体机，实现软硬一体开箱即用，提供从硬件-推理引擎-大模型自动化运维平台-应用的全栈式解决方案，当前已在金融、安全、法律、医疗等领域落地使用。
                    </div>
                </div>
                <div className='mob-contact-box-right'>
                    <div className='mob-content-box-right-item'>
                        <div className='mob-content-box-right-item-title'>关于我们</div>
                        {
                            about.map((item, index) => {
                                return <div className='mob-content-box-right-item-text' onClick={() => { onNavigate(item.id) }} key={index + Date() + ""} >{item.title}</div>
                            })
                        }
                    </div>
                    <div className='mob-content-box-right-item'>
                        <div className='mob-content-box-right-item-title'>联系我们</div>
                        <div className='mob-content-box-right-item-text'>邮箱：market@approaching.com</div>
                        <div className='mob-content-box-right-item-text' >地址：北京市海淀区东升大厦AB座</div>
                    </div>
                    <div className='mob-content-box-right-item'>
                        <div className='mob-content-box-right-item-title'>关注我们</div>
                        <img src={ewm} alt="" className='mob-ewm' />
                    </div>
                </div>
            </div>
            <div className='mob-contact-icp'>
                <div className='mob-contact-icp-text' >
                    <span onClick={open}>京公网安备11010802044671号</span>
                    <span onClick={openIcp} style={{ marginLeft: '10px' }}>京ICP备2024077296号-1</span>
                </div>
                <div className='mob-contact-icp-text' style={{ marginTop: '6px' }}>Copyright © 趋境科技 2025 版权所有</div>
            </div>
        </div>
    );
}
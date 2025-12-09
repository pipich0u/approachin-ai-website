
import './index.css'
import logo from '../../../../assets/svg/logo-black.svg'
import ewm from '../../../../assets/images/ewm.png'
import { useNavigate } from 'react-router-dom';

// interface ContactProps {
//     // onNavigate: (index: string) => void;
// }
export default function PageContact() {
    const open = () => {
        window.open('https://beian.mps.gov.cn/#/query/webSearch?code=11010802044671')
    }
    const openIcp = () => {
        window.open('https://beian.miit.gov.cn/#/Integrated/index')
    }
    const about = [
        { title: '产品介绍', id: 1, href: '/' },
        { title: '技术方案', id: 2, href: '/' },
        { title: 'KTransformers', id: 3, href: '/' },
        { title: '趋境资讯', id: 4, href: '/' },
        { title: '企业发展', id: 5, href: '/' },
        { title: '团队介绍', id: 6, href: '/' },
    ]
    const fix = [
        { title: 'Ktransformer', id: 1, href: '/' },
        { title: 'Mooncake', id: 2, href: '/' },
        { title: 'Mooncake', id: 3, href: '/' },
        { title: 'Mooncake', id: 4, href: '/' },
    ]
    const openSource = [
        { title: 'Ktransformer', id: 1, href: '/' },
        { title: 'Mooncake', id: 2, href: '/' },
    ]
    const map = 'https://map.baidu.com/poi/%E4%BC%98%E7%9B%9B%E5%A4%A7%E5%8E%A6-D%E5%BA%A7/@12951705.819582434,4837827.921399237,19.34z?uid=9bec76784f71b6ff25d2bbdb&info_merge=1&isBizPoi=false&ugc_type=3&ugc_ver=1&device_ratio=1&compat=1&pcevaname=pc4.1&querytype=detailConInfo&da_src=shareurl'
    return (
        <div className="section section-9">
            <div className='fp-overflow'>
                <div className='contact-box'>
                    <div className='contact-box-left'>
                        <img src={logo} alt="" className='canlogo' />
                        <div className='contact-box-left-up'>
                            <div className='contact-box-left-up-items'>
                                <div className='up-item-box bg-[#C8C8C8]'></div>
                                <div className='content-item-text'>趋境科技</div>
                            </div>
                            <div className='contact-box-left-up-items'>
                                <div className='up-item-box bg-[#C8C8C8]'></div>
                                <div className='content-item-text'>趋境科技</div>
                            </div>
                            <div className='contact-box-left-up-items'>
                                <div className='up-item-box bg-[#C8C8C8]'></div>
                                <div className='content-item-text'>趋境科技</div>
                            </div>
                        </div>
                    </div>
                    <div className='contact-box-right'>
                        <div className='content-box-right-item'>
                            <div className='content-box-right-item-title'>解决方案</div>
                            {
                                fix.map((item, index) => {
                                    return <div className='content-item-text'
                                        // onClick={() => onNavigate(item.href)} 
                                        key={index + Date() + ""} >{item.title}</div>
                                })
                            }
                        </div>
                        <div className='content-box-right-item'>
                            <div className='content-box-right-item-title'>开源社区</div>
                            {
                                openSource.map((item, index) => {
                                    return <div className='content-item-text'
                                        // onClick={() => onNavigate(item.href)} 
                                        key={index + Date() + ""} >{item.title}</div>
                                })
                            }
                        </div>
                        <div className='content-box-right-item'>
                            <div className='content-box-right-item-title'>关于我们</div>
                            {
                                about.map((item, index) => {
                                    return <div className='content-item-text'
                                        // onClick={() => onNavigate(item.href)} 
                                        key={index + Date() + ""} >{item.title}</div>
                                })
                            }
                        </div>
                        <div className='content-box-right-item'>
                            <div className='content-box-right-item-title'>联系我们</div>
                            <div className='content-item-text'>邮箱：quxin@approaching.ai</div>
                            <div className='content-item-text' onClick={() => window.open(map)}>地址：北京市海淀区学清嘉创大厦 C 座</div>
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
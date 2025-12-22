
import './index.css'
import logo from '@/assets/svg/logo-black.svg'
import ewm from '@/assets/images/ewm.png'
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
    const map = 'https://map.baidu.com/search/%E5%AD%A6%E6%B8%85%E5%98%89%E5%88%9B%E5%A4%A7%E5%8E%A6c/@12953146.105,4841086.12,19z?querytype=s&da_src=shareurl&wd=%E5%AD%A6%E6%B8%85%E5%98%89%E5%88%9B%E5%A4%A7%E5%8E%A6C&c=131&src=0&pn=0&sug=0&l=19&b=(12952691.125755528,4840923.8293437995;12953651.125755528,4841379.3293437995)&from=webmap&biz_forward=%7B%22scaler%22:1,%22styles%22:%22pl%22%7D&device_ratio=1'
    return (
        <div className="section section-9">
            <div className='contact-container'>

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
                        <div className='content-box-right-item w-[250px]!'>
                            <div className='content-box-right-item-title'>联系我们</div>
                            <div className='content-item-text'>邮箱：quxin@approaching.ai</div>
                            <div className='content-item-text' onClick={() => window.open(map)}>地址：北京市海淀区学清嘉创大厦 C 座</div>
                        </div>
                        <div className='content-box-right-item w-[100px]!'>
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
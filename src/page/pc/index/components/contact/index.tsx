
import './index.css'
import logo from '@/assets/svg/logo-black.svg'
import ewm from '@/assets/images/ewm.png'
import { useNavigate } from 'react-router-dom';
import { menuHrefListDefault } from '@/page/textConfig';
import { getCopyrightYear } from '@/utils/transfrom';
import { trackButtonClick } from '@/utils/umami';

// interface ContactProps {
//     // onNavigate: (index: string) => void;
// }
export default function PageContact() {
    const navigate = useNavigate();

    const open = () => {
        trackButtonClick('底部链接-公安备案', '页面底部联系区域', { url: 'https://beian.mps.gov.cn/#/query/webSearch?code=11010802044671' });
        window.open('https://beian.mps.gov.cn/#/query/webSearch?code=11010802044671');
    }
    const openIcp = () => {
        trackButtonClick('底部链接-ICP备案', '页面底部联系区域', { url: 'https://beian.miit.gov.cn/#/Integrated/index' });
        window.open('https://beian.miit.gov.cn/#/Integrated/index');
    }
    const about = menuHrefListDefault[6].subItems || []
    const fix = menuHrefListDefault[0].subItems || []
    const openSource = menuHrefListDefault[1].subItems || []
    const info = [
        {
            title: '解决方案',
            href: 'solution',
            isSelected: false
        },
        {
            title: '模型仓库',
            href: 'models',
            isSelected: false
        },
        {
            title: '生态合作',
            href: 'cooperate',
            isSelected: false
        },
        {
            title: '趋境资讯',
            href: 'information',
            isSelected: false
        },
    ]
    const map = 'https://map.baidu.com/search/%E5%AD%A6%E6%B8%85%E5%98%89%E5%88%9B%E5%A4%A7%E5%8E%A6c/@12953146.105,4841086.12,19z?querytype=s&da_src=shareurl&wd=%E5%AD%A6%E6%B8%85%E5%98%89%E5%88%9B%E5%A4%A7%E5%8E%A6C&c=131&src=0&pn=0&sug=0&l=19&b=(12952691.125755528,4840923.8293437995;12953651.125755528,4841379.3293437995)&from=webmap&biz_forward=%7B%22scaler%22:1,%22styles%22:%22pl%22%7D&device_ratio=1'
    return (
        <div className="section section-9">
            <div className='contact-container'>
                <div className='contact-box'>
                    <div className='contact-box-left'>
                        <img src={logo} alt="" className='canlogo' />
                        <div className='contact-box-left-up'>
                            <img src={ewm} alt="" className='ewm' />
                            <div className='contact-user'>
                                {/* <div className='contact-user-text'>电话：166-0152-6267</div> */}
                                <div className='contact-user-text'>邮箱：quxin@approaching.ai</div>
                                <div className='contact-user-text'>地址：北京市海淀区学清嘉创大厦C座</div>
                            </div>
                        </div>
                    </div>
                    <div className='contact-box-right'>
                        <div className='content-box-right-item w-[146px]!'>
                            <div className='content-box-right-item-title'>解决方案</div>
                            {
                                fix.map((item, index) => {
                                    return <div className='content-item-text'
                                        onClick={() => {
                                            trackButtonClick(`底部链接-${item.title}`, '页面底部联系区域', { href: item.href, title: item.title });
                                            navigate(item.href);
                                        }}
                                        key={index + Date() + ""} >{item.title}</div>
                                })
                            }
                        </div>
                        <div className='content-box-right-item'>
                            <div className='content-box-right-item-title'>开源社区</div>
                            {
                                openSource.map((item, index) => {
                                    return <div className='content-item-text'
                                        onClick={() => {
                                            trackButtonClick(`底部链接-${item.title}`, '页面底部联系区域', { href: item.href, title: item.title });
                                            navigate(item.href);
                                        }}
                                        key={index + Date() + ""} >{item.title}</div>
                                })
                            }
                        </div>
                        <div className='content-box-right-item'>
                            <div className='content-box-right-item-title'>相关资源</div>
                            {
                                info.map((item, index) => {
                                    return <div className='content-item-text'
                                        onClick={() => {
                                            trackButtonClick(`底部链接-${item.title}`, '页面底部联系区域', { href: item.href, title: item.title });
                                            navigate(`/${item.href}`);
                                        }}
                                        key={index + Date() + ""} >{item.title}</div>
                                })
                            }
                        </div>
                        <div className='content-box-right-item'>
                            <div className='content-box-right-item-title'>关于我们</div>
                            {
                                about.map((item, index) => {
                                    return <div className='content-item-text'
                                        onClick={() => {
                                            trackButtonClick(`底部链接-${item.title}`, '页面底部联系区域', { href: item.href, title: item.title });
                                            navigate(item.href);
                                        }}
                                        key={index + Date() + ""} >{item.title}</div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='contact-icp'>
                    <div className='contact-icp-text' >
                        <span onClick={open}>京公网安备11010802044671号</span>
                        <span onClick={openIcp} style={{ marginLeft: '10px' }}>京ICP备2024077296号-1</span>
                    </div>
                    <div className='contact-icp-text' style={{ marginTop: '6px' }}>Copyright © 趋境科技 {getCopyrightYear(2024)} 版权所有</div>
                </div>
            </div>
        </div>
    );
}
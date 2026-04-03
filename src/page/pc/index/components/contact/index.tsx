
import './index.css'
import logo from '@/assets/svg/logo-black.svg'
import ewm from '@/assets/images/ewm.png'
import { useNavigate } from 'react-router-dom';
import { getCopyrightYear } from '@/utils/transfrom';
import { trackButtonClick } from '@/utils/umami';

export default function PageContact() {
    const navigate = useNavigate();

    const onNavigate = (href: string, title?: string) => {
        if (title) {
            trackButtonClick(`底部链接-${title}`, '页面底部联系区域', { href, title });
        }
        if (href.startsWith('http://') || href.startsWith('https://')) {
            window.open(href, '_blank');
        } else {
            navigate(`/${href}`);
        }
    };

    const open = () => {
        trackButtonClick('底部链接-公安备案', '页面底部联系区域', { url: 'https://beian.mps.gov.cn/#/query/webSearch?code=11010802044671' });
        window.open('https://beian.mps.gov.cn/#/query/webSearch?code=11010802044671');
    }
    const openIcp = () => {
        trackButtonClick('底部链接-ICP备案', '页面底部联系区域', { url: 'https://beian.miit.gov.cn/#/Integrated/index' });
        window.open('https://beian.miit.gov.cn/#/Integrated/index');
    }

    return (
        <div className="section section-9">
            <div className="footer-inner">
                {/* 主体：左logo + 右链接列 */}
                <div className="footer-main">
                    <div className="footer-logo-area">
                        <img
                            src={logo}
                            alt="logo"
                            className="footer-logo"
                            onClick={() => { navigate('/'); }}
                        />
                    </div>
                    <div className="footer-links">
                        <div className="footer-col">
                            <div className="footer-col-title">关于我们</div>
                            <div className="footer-col-item" onClick={() => onNavigate('introduction', '企业介绍')}>企业介绍</div>
                            <div className="footer-col-item" onClick={() => onNavigate('information', '企业资讯')}>企业资讯</div>
                            <div className="footer-col-item" onClick={() => onNavigate('contact', '联系我们')}>联系我们</div>
                            <div className="footer-col-item" onClick={() => onNavigate('contact', '人才招聘')}>人才招聘</div>
                        </div>
                        <div className="footer-col">
                            <div className="footer-col-title">产品</div>
                            <div className="footer-col-item" onClick={() => onNavigate('machine', 'Token Machine')}>Token Machine</div>
                            <div className="footer-col-item" onClick={() => onNavigate('amaas', 'ATaaS平台')}>ATaaS 平台</div>
                            <div className="footer-col-item" onClick={() => onNavigate('kllm', 'Token Service')}>Token Service</div>
                        </div>
                        <div className="footer-col">
                            <div className="footer-col-title">解决方案</div>
                            <div className="footer-col-item" onClick={() => onNavigate('solution', '低门槛启动')}>低门槛启动</div>
                            <div className="footer-col-item" onClick={() => onNavigate('solution', '高并发高吞吐')}>高并发高吞吐</div>
                            <div className="footer-col-item" onClick={() => onNavigate('solution', 'ISV联合共创')}>ISV联合共创</div>
                            <div className="footer-col-item" onClick={() => onNavigate('solution', 'AI开发环境敏捷交付')}>AI开发环境敏捷交付</div>
                            <div className="footer-col-item" onClick={() => onNavigate('solution', '资源精细化管理')}>资源精细化管理</div>
                            <div className="footer-col-item" onClick={() => onNavigate('solution', '超低TTFT')}>超低TTFT</div>
                        </div>
                        <div className="footer-col">
                            <div className="footer-col-title">开源社区</div>
                            <div className="footer-col-item" onClick={() => onNavigate('https://ktransformers.net/zh', 'KTransformers')}>KTransformers</div>
                            <div className="footer-col-item" onClick={() => onNavigate('mooncake', 'Mooncake')}>Mooncake</div>
                        </div>
                        <div className="footer-col">
                            <div className="footer-col-title">服务与支持</div>
                            <div className="footer-col-item" onClick={() => onNavigate('models', '模型仓库')}>模型仓库</div>
                            <div className="footer-col-item" onClick={() => onNavigate('cooperate', '生态合作')}>生态合作</div>
                        </div>
                        <div className="footer-col">
                            <div className="footer-col-title">联系我们</div>
                            <div className="footer-col-item footer-col-static">邮箱：quxin@approaching.ai</div>
                            <div className="footer-col-item footer-col-static">地址：北京市海淀区学清嘉创大厦C座</div>
                            <img src={ewm} alt="微信二维码" className="footer-ewm" />
                        </div>
                    </div>
                </div>

                {/* 底部：版权 + 备案 */}
                <div className="footer-bottom">
                    <div className="footer-bottom-line">
                        <span>© 趋境科技 {getCopyrightYear(2024)} 版权所有</span>
                    </div>
                    <div className="footer-bottom-line">
                        <span className="footer-link" onClick={open}>京公网安备11010802044671号</span>
                        <span className="footer-divider">　</span>
                        <span className="footer-link" onClick={openIcp}>京ICP备2024077296号-1</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

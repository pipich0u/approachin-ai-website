import './index.css'
import { productFeatures } from '@/page/pc/index/textConfig';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import product1 from '@/assets/images/img/product_1.webp';
import product2 from '@/assets/images/img/product_2.webp';

const stripImages = [product1, product2, '', ''];

export default function MobStrips() {
    const navigate = useNavigate();
    const navigateTo = (link: string) => {
        if (!link || link === '/') { message.info('敬请期待'); return; }
        if (link.startsWith('http')) { window.open(link, '_blank'); }
        else { navigate(link); }
    };

    return (
        <div className="mob-strips">
            <div className="mob-strips-title">以高效能Token为核心的产品布局</div>
            <div className="mob-strips-list">
                {productFeatures.slice(0, 4).map((item, idx) => (
                    <div key={idx} className={`mob-strip-item mob-strip-bg-${idx + 1}`}>
                        {stripImages[idx] && (
                            <img src={stripImages[idx]} alt={item.title} className="mob-strip-img" />
                        )}
                        <div className="mob-strip-body">
                            <div className="mob-strip-tags">
                                {item.tag.map((tag, i) => (
                                    <span key={i} className="mob-strip-tag">{tag}</span>
                                ))}
                            </div>
                            <div className="mob-strip-name">{item.title}</div>
                            <div className="mob-strip-desc">{item.desc}</div>
                            <button className="mob-strip-btn" onClick={() => navigateTo(item.link)}>了解详情</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

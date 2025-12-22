
import './index.css'
// import logo from '@/assets/svg/logo-black.svg'
import ewm from '@/assets/images/ewm.png'
import { mobMenuHrefListDefault } from '@/page/textConfig';
import { useState } from 'react';
import { IconFont } from '@/utils/antdUtils';

export default function PageContact() {
    const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set())
    const [closingMenus, setClosingMenus] = useState<Set<string>>(new Set())

    const toggleSubmenu = (title: string) => {
        if (expandedMenus.has(title)) {
            // 开始关闭动画
            setClosingMenus(new Set(closingMenus).add(title))
            setTimeout(() => {
                const newExpanded = new Set(expandedMenus)
                newExpanded.delete(title)
                setExpandedMenus(newExpanded)
                const newClosing = new Set(closingMenus)
                newClosing.delete(title)
                setClosingMenus(newClosing)
            }, 300) // 匹配动画时长
        } else {
            const newExpanded = new Set(expandedMenus)
            newExpanded.add(title)
            setExpandedMenus(newExpanded)
        }
    }

    const open = () => {
        window.open('https://beian.mps.gov.cn/#/query/webSearch?code=11010802044671')
    }
    const openIcp = () => {
        window.open('https://beian.miit.gov.cn/#/Integrated/index')
    }

    const map = 'https://map.baidu.com/search/%E5%AD%A6%E6%B8%85%E5%98%89%E5%88%9B%E5%A4%A7%E5%8E%A6c/@12953146.105,4841086.12,19z?querytype=s&da_src=shareurl&wd=%E5%AD%A6%E6%B8%85%E5%98%89%E5%88%9B%E5%A4%A7%E5%8E%A6C&c=131&src=0&pn=0&sug=0&l=19&b=(12952691.125755528,4840923.8293437995;12953651.125755528,4841379.3293437995)&from=webmap&biz_forward=%7B%22scaler%22:1,%22styles%22:%22pl%22%7D&device_ratio=1'

    return (
        <div className="mob-section">
            <div className='mob-contact-container'>
                <div className='mob-contact-box'>
                    <div className='mob-contact-box-coll'>
                        {mobMenuHrefListDefault.map((item) => (
                            <div key={item.title} className='mob-content-box-item'>
                                <div className='mob-content-box-item-title-wrapper'
                                    onClick={() => {
                                        if (item.isSelected && item.subItems) {
                                            toggleSubmenu(item.title)
                                        } else {
                                            console.log('Navigate to:', item.href)
                                        }
                                    }}
                                >
                                    <div className='mob-content-box-item-title'>{item.title}</div>
                                    {item.isSelected && item.subItems && (
                                        <IconFont
                                            className="mob-submenu-arrow"
                                            type={expandedMenus.has(item.title) ? 'icon-up-s' : 'icon-down-s'}
                                        />
                                    )}
                                </div>
                                {item.isSelected && item.subItems && (expandedMenus.has(item.title) || closingMenus.has(item.title)) && (
                                    <div className={`mob-content-submenu ${closingMenus.has(item.title) ? 'closing' : ''}`}>
                                        {item.subItems.map((subItem) => (
                                            <div
                                                key={subItem.title}
                                                className='mob-content-item-text'
                                                onClick={() => {
                                                    // 这里可以添加导航逻辑
                                                    console.log('Navigate to:', subItem.href)
                                                }}
                                            >
                                                {subItem.title}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='mob-contact-box-bot'>
                    <div className='mob-content-us'>
                        <div className='mob-content-us-title'>联系我们</div>
                        <div className='mob-content-us-text'>邮箱：quxin@approaching.ai</div>
                        <div className='mob-content-us-text' onClick={() => window.open(map)}>地址：北京市海淀区学清嘉创大厦 C 座</div>
                    </div>
                    <div className='mob-contact-box-img'>
                        <div className='mob-contact-box-items'>
                            <div className='mob-up-item-box'></div>
                            {/* <div className='mob-content-item-text'>趋境科技</div> */}
                        </div>
                        <div className='mob-contact-box-items'>
                            <div className='mob-up-item-box'></div>
                            {/* <div className='mob-content-item-text'>趋境科技</div> */}
                        </div>
                        <div className='mob-contact-box-items'>
                            <div className='mob-up-item-box'></div>
                            {/* <div className='mob-content-item-text'>趋境科技</div> */}
                        </div>
                        <div className='mob-contact-box-items'>
                            <div className='mob-up-item-box'>
                                <div className='mob-content-box-item-title'>关注我们</div>
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
            </div>
        </div>
    );
}
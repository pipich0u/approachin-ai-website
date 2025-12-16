import { useState } from 'react';
import './index.css';
import logo from '@/assets/svg/logo-black.svg'
import { IconFont } from '@/utils/antdUtils';
interface TopNavProps {
  onNavigate: (index: string) => void;
}

const TopNav = ({ onNavigate }: TopNavProps) => {
  // const [isFirstOpenPage, setIsFirstOpenPage] = useState(true)
  const [openDrawer, setOpenDrawer] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set())

  const menuHrefListDefault = [
    {
      title: '解决方案',
      href: 'pageProduct',
      isSelected: true,
      subItems: [
        { title: 'A·Spark 便携工作站', href: 'aiInference' },
        { title: '大模型推理一体机', href: 'edgeComputing' },
        { title: '推理引擎·KLLM', href: 'smartScheduling' },
        { title: '推理服务平台·AMaaS', href: 'smartScheduling' },
        { title: '专属推理云·AMVaaS', href: 'smartScheduling' },
      ]
    },
    {
      title: '开源社区',
      href: 'pageTechnology',
      isSelected: true,
      subItems: [
        { title: 'KTransformers', href: 'KTransformers' },
        { title: 'Mooncake', href: 'Mooncake' }
      ]
    },
    {
      title: '模型仓库',
      href: 'pageKt',
      isSelected: false
    },
    {
      title: '客户案例',
      href: 'pageInfo',
      isSelected: false
    },
    {
      title: '生态合作',
      href: 'DevelopPage',
      isSelected: false
    },
    {
      title: '趋境资讯',
      href: 'PageTeam',
      isSelected: false
    },
    {
      title: '关于我们',
      href: 'PageTeam',
      isSelected: true,
      subItems: [
        { title: '公司简介', href: 'about' },
        { title: '团队介绍', href: 'team' },
        { title: '联系我们', href: 'contact' }
      ]
    },
  ]

  const toggleSubmenu = (title: string) => {
    const newExpanded = new Set(expandedMenus)
    if (newExpanded.has(title)) {
      newExpanded.delete(title)
    } else {
      newExpanded.add(title)
    }
    setExpandedMenus(newExpanded)
  }

  const handleClose = (callback?: () => void) => {
    setIsClosing(true);
    setTimeout(() => {
      setOpenDrawer(false);
      setIsClosing(false);
      callback?.();
    }, 300); // 匹配 CSS 动画时长
  };

  const menuElement = () => (openDrawer || isClosing) && (
    <div className={`mobile-menu-drawer ${isClosing ? 'closing' : ''}`}>
      <div className="mobile-menu-list">
        {menuHrefListDefault.map((item) => (
          <div key={item.title} className="mobile-menu-item-wrapper">
            <div
              className="mobile-menu-item"
              onClick={() => {
                if (item.isSelected && item.subItems) {
                  toggleSubmenu(item.title);
                } else {
                  handleClose(() => onNavigate(item.href));
                }
              }}
            >
              <span>{item.title}</span>
              {item.isSelected && item.subItems && (
                <IconFont
                  className="submenu-arrow"
                  type={expandedMenus.has(item.title) ? 'icon-up-s' : 'icon-down-s'}
                />
              )}
            </div>
            {item.isSelected && item.subItems && expandedMenus.has(item.title) && (
              <div className="mobile-submenu">
                {item.subItems.map((subItem) => (
                  <div
                    key={subItem.title}
                    className="mobile-submenu-item"
                    onClick={() => {
                      handleClose(() => onNavigate(subItem.href));
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
  );
  return (
    <nav className={`mob-top-nav`}>
      <div className='mob-nav-container'>
        <div className="mob-logo">
          <img src={logo} alt="" onClick={() => { scrollTo(0, 0) }} />
        </div>
        <div className="mob-right">
          <IconFont className='mob-rig-icon' type={openDrawer ? 'icon-no' : 'icon-caidan'}
            onClick={() => {
              if (openDrawer) {
                handleClose();
              } else {
                setOpenDrawer(true);
              }
            }} />
        </div>
      </div>
      {menuElement()}
    </nav>
  );
};

export default TopNav; 
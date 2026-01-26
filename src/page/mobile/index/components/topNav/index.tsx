import { useState } from 'react';
import './index.css';
import logo from '@/assets/svg/logo-black.svg'
import { IconFont } from '@/utils/antdUtils';
import { mobMenuHrefListDefault } from '@/page/textConfig';
import { useNavigate } from 'react-router-dom';
import { trackButtonClick } from '@/utils/umami';

const TopNav = () => {
  // const [isFirstOpenPage, setIsFirstOpenPage] = useState(true)
  const [openDrawer, setOpenDrawer] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set())
  const [closingMenus, setClosingMenus] = useState<Set<string>>(new Set())
  const navigate = useNavigate()

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

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOpenDrawer(false);
      setIsClosing(false);
    }, 300);
  };

  const menuElement = () => (openDrawer || isClosing) && (
    <div className={`mobile-menu-drawer ${isClosing ? 'closing' : ''}`}>
      <div className="mobile-menu-list">
        {mobMenuHrefListDefault.map((item) => (
          <div key={item.title} className="mobile-menu-item-wrapper">
            <div
              className="mobile-menu-item"
              onClick={() => {
                if (item.isSelected && item.subItems) {
                  trackButtonClick(`移动端菜单-${item.title}`, '移动端顶部导航', { action: '展开子菜单' });
                  toggleSubmenu(item.title);
                } else {
                  trackButtonClick(`移动端菜单-${item.title}`, '移动端顶部导航', { href: item.href });
                  navigate(item.href);
                  handleClose();
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
            {item.isSelected && item.subItems && (expandedMenus.has(item.title) || closingMenus.has(item.title)) && (
              <div className={`mobile-submenu ${closingMenus.has(item.title) ? 'closing' : ''}`}>
                {item.subItems.map((subItem) => (
                  <div
                    key={subItem.title}
                    className="mobile-submenu-item"
                    onClick={() => {
                      handleClose();
                      navigate(subItem.href);
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
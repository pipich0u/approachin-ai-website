import { useState } from 'react';
import './index.css';
import logo from '@/assets/svg/logo-black.svg'
import { IconFont } from '@/utils/antdUtils';
import {mobMenuHrefListDefault} from '@/page/textConfig';
const TopNav = () => {
  // const [isFirstOpenPage, setIsFirstOpenPage] = useState(true)
  const [openDrawer, setOpenDrawer] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set())

  const toggleSubmenu = (title: string) => {
    const newExpanded = new Set(expandedMenus)
    if (newExpanded.has(title)) {
      newExpanded.delete(title)
    } else {
      newExpanded.add(title)
    }
    setExpandedMenus(newExpanded)
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
                  toggleSubmenu(item.title);
                } else {
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
            {item.isSelected && item.subItems && expandedMenus.has(item.title) && (
              <div className="mobile-submenu">
                {item.subItems.map((subItem) => (
                  <div
                    key={subItem.title}
                    className="mobile-submenu-item"
                    onClick={() => {
                      handleClose();
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
import { useState } from 'react';
import './index.css';
import logo from '@/assets/images/logo.png'
import mb from '@/assets/svg/mb-nav.svg'
import close from '@/assets/svg/mob-close.svg'
interface TopNavProps {
  onNavigate: (index: string) => void;
}

const TopNav = ({ onNavigate }: TopNavProps) => {
  // const [isFirstOpenPage, setIsFirstOpenPage] = useState(true)
  const [openDrawer, setOpenDrawer] = useState(false)
  const menuHrefListDefault = [
    {
      title: '产品介绍',
      href: 'pageProduct'
    },
    {
      title: '技术方案',
      href: 'pageTechnology'
    },
    {
      title: 'KTransformers',
      href: 'pageKt'
    },
    {
      title: '趋境资讯',
      href: 'pageInfo'

    },
    {
      title: '企业发展',
      href: 'DevelopPage'
    },
    {
      title: '团队介绍',
      href: 'PageTeam'
    }
  ]
  const menuElement = () => openDrawer && (
    <div className="mobile-menu-drawer">
      <div className="mobile-menu-list">
        {menuHrefListDefault.map((item) => (
          <div
            key={item.title}
            onClick={() => {
              setOpenDrawer(false);
              onNavigate(item.href);
            }}
            className="mobile-menu-item"
          >
            {item.title}
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
          <img src={openDrawer ? close : mb} alt="" onClick={() => {
            // setIsFirstOpenPage(false);
            setOpenDrawer(!openDrawer);
          }} />
        </div>
      </div>
      {menuElement()}
    </nav>
  );
};

export default TopNav; 
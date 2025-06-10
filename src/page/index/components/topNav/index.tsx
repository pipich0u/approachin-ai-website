import React, { createRef, forwardRef, useEffect, useImperativeHandle } from 'react';
import './index.css';
import logo from '@/assets/images/logo.png'
import logo_black from '@/assets/svg/logo-black.svg'
import { useLocation, useNavigate } from 'react-router-dom';
interface TopNavProps {
  onNavigate: (index: string) => void;
  activeSection: string;
}

const TopNav = forwardRef(({ onNavigate, activeSection }: TopNavProps, ref) => {
  // const navigate = useNavigate();
  // const [activeSection, setActiveSection] = React.useState(0);
  // const onNavigate = (index: string, nb: number) => {
  //   navigate(index);
  //   setActiveSection(nb)
  // };
  const navItems = [
    { title: '首页', id: 0, href: 'pageIndex' },
    { title: '产品介绍', id: 1, href: 'pageProduct' },
    { title: '技术方案', id: 2, href: 'pageTechnology' },
    { title: 'KTransformers', id: 3, href: 'pageKt' },
    // { title: '合作案例', id: 4 },
    { title: '趋境资讯', id: 4, href: 'pageInfo' },
    { title: '企业发展', id: 5, href: 'DevelopPage' },
    { title: '团队介绍', id: 6, href: 'PageTeam' },
    // { title: '团队介绍', id: 7 },
  ];
  useEffect(() => {
    onNavigate('pageIndex')
  }, [])

  useImperativeHandle(ref, () => {
    return {
      handleNavItemClick: (id: number) => {
        console.log(id, 'nav-id');

        (document.querySelector('#home-nav-' + id) as HTMLDivElement).click()
      }
    }
  })
  return (
    <nav className={`top-nav bg-1 `}>
      <div className='app container'>
        <div className="logo">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="nav-container">
          {navItems.map((item) => (
            <div
              id={'home-nav-' + item.id}
              key={item.id}
              className={`nav-item ${activeSection === item.href ? 'active' : ''}`}
              onClick={() => onNavigate(item.href)}
            >
              {item.title}
              {activeSection === item.href && <div className="nav-underline" />}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
})

export default TopNav; 
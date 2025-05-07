import React, { useEffect, useState } from 'react';
import './index.css';
import logo from '@/assets/images/logo.png'
import logo_black from '@/assets/svg/logo-black.svg'
import mb from '@/assets/svg/mb-nav.svg'
import { useLocation, useNavigate } from 'react-router-dom';
// interface TopNavProps {
//   onNavigate: (index: number) => void;
//   activeSection: number;
// }

const TopNav: React.FC = () => {
  // const navigate = useNavigate();
  // const [activeSection, setActiveSection] = React.useState(0);
  // const onNavigate = (index: string, nb: number) => {
  //   navigate(index);
  //   setActiveSection(nb)
  // };
  const [isFirstOpenPage, setIsFirstOpenPage] = useState(true)
  const [openDrawer, setOpenDrawer] = useState(false)
  const menuHrefListDefault = [{
    title: '产品一',
    href: '#'
  }, {
    title: '产品二',
    href: '#mobile-product-introduce'
  }, {
    title: '产品三',
    href: '#mobile-frmework'
  }, {
    title: '产品四',
    href: '#mobile-ktransformers'
  }, {
    title: '产品无',
    href: '#mobile-example'
  }]
  const navItems = [
    { title: '首页', id: 0 },
    { title: '产品介绍', id: 1 },
    { title: '技术方案', id: 2 },
    { title: 'KTransformers', id: 3 },
    // { title: '合作案例', id: 4 },
    { title: '趋境资讯', id: 4 },
    { title: '企业发展', id: 5 },
    // { title: '团队介绍', id: 7 },
  ];
  // useEffect(() => {
  //   onNavigate(0)
  // }, [])
  const menuElement = () => !isFirstOpenPage ? <div className={'mobile-menu-drawer ' + (openDrawer ? '' : 'closing')}>
    <div className="mobile-menu-list">
      {

        menuHrefListDefault.map(item => <a href={item.href} key={item.title} onClick={() => {
          setOpenDrawer(false)
        }} className="mobile-menu-item">{item.title}</a>)
      }
    </div>
  </div> : null
  return (
    <nav className={`mob-top-nav`}>
      <div className='mob-nav-container'>
        <div className="mob-logo">
          <img src={logo} alt="" onClick={() => { scrollTo(0, 0) }} />
        </div>
        <div className="mob-right">
          <img src={mb} alt="" onClick={() => {
            setIsFirstOpenPage(false)
            setOpenDrawer(!openDrawer)
          }} />
        </div>
      </div>
      {menuElement()}
    </nav>
  );
};

export default TopNav; 
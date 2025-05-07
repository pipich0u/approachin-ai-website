import React, { useEffect } from 'react';
import './index.css';
import logo from '@/assets/images/logo.png'
import logo_black from '@/assets/svg/logo-black.svg'
import { useLocation, useNavigate } from 'react-router-dom';
interface TopNavProps {
  // onNavigate: (index: number) => void;
  // activeSection: number;
}

const TopNavs: React.FC<TopNavProps> = ({ }) => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = React.useState(0);
  const onNavigate = (index: string, nb: number) => {
    navigate(index);
    window.scrollTo(0, 0);
    // setActiveSection(nb)
  };
  const navItems = [
    { title: '首页', id: 0, path: '/' },
    { title: '产品介绍', id: 1, path: '/' },
    { title: '技术方案', id: 2, path: '/' },
    { title: 'KTransformers', id: 3, path: '/' },
    // { title: '合作案例', id: 4, path: '/' },
    { title: '趋境资讯', id: 5, path: '/' },
    // { title: '团队介绍', id: 6, path: '/' },
    // { title: '团队介绍', id: 7, path: '/' }
  ];

  return (
    <nav className={`top-nav  bg-0 `}>
      <div className='app container'>
        <div className="logo">
          <img src={logo_black} alt="" />
        </div>
        <div className="nav-container">
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`nav-items`}
              onClick={() => onNavigate(item.path,item.id)}
            >
              {item.title}
              {activeSection === item.id && <div className="nav-underline" />}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TopNavs; 
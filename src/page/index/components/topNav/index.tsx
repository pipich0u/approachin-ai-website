import React, { useEffect } from 'react';
import './index.css';
import logo from '@/assets/images/logo.png'
import logo_black from '@/assets/svg/logo-black.svg'
import { useLocation, useNavigate } from 'react-router-dom';
interface TopNavProps {
  onNavigate: (index: number) => void;
  activeSection: number;
}

const TopNav: React.FC<TopNavProps> = ({ onNavigate, activeSection }) => {
  // const navigate = useNavigate();
  // const [activeSection, setActiveSection] = React.useState(0);
  // const onNavigate = (index: string, nb: number) => {
  //   navigate(index);
  //   setActiveSection(nb)
  // };
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
  useEffect(() => {
    onNavigate(0)
  }, [])

  return (
    <nav className={`top-nav  bg-1 `}>
      <div className='app container'>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-container">
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => onNavigate(item.id)}
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

export default TopNav; 
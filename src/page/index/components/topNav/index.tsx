import React from 'react';
import './index.css';
import logo from '../../../../assets/images/logo.png'
interface TopNavProps {
  onNavigate: (index: number) => void;
  activeSection: number;
}

const TopNav: React.FC<TopNavProps> = ({ onNavigate, activeSection }) => {
  const navItems = [
    { title: '首页', id: 0 },
    { title: '产品介绍', id: 1 },
    { title: '技术方案', id: 2 },
    { title: 'KTransformers', id: 3 },
    { title: '合作案例', id: 4 },
    { title: '趋境资讯', id: 5 },
    { title: '团队介绍', id: 6 },
    { title: '联系我们', id: 7 }
  ];

  return (
    <nav className={`top-nav ${activeSection === 0 ? 'bg-0' : 'bg-1'}`}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav-container">
        {navItems.map((item, idx) => (
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
    </nav>
  );
};

export default TopNav; 
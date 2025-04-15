import React from 'react';
import './index.css';

interface TopNavProps {
  onNavigate: (index: number) => void;
  activeSection: number;
}

const TopNav: React.FC<TopNavProps> = ({ onNavigate, activeSection }) => {
  const navItems = [
    { title: '首页', id: 0 },
    { title: '产品', id: 1 },
    { title: '技术', id: 2 },
    { title: 'KTransformers', id: 3 },
    { title: '案例', id: 4 },
    { title: '资讯', id: 5 },
    { title: '联系我们', id: 6 }
  ];

  return (
    <nav className="top-nav">
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
    </nav>
  );
};

export default TopNav; 
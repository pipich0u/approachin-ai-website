import React from 'react';
import './index.css';
import logo from '../../../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom';
interface TopNavProps {
  // onNavigate: (index: number) => void;
  // activeSection: number;
}

const TopNav: React.FC<TopNavProps> = ({ }) => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = React.useState(0);
  const onNavigate = (index: string,nb:number) => {
    navigate(index);
    setActiveSection(nb)
  };
  const navItems = [
    { title: '首页', id: 0, path: '/' },
    { title: '产品介绍', id: 1, path: '/introduce' },
    { title: '技术方案', id: 2, path: '/technology' },
    { title: '合作案例', id: 3, path: '/cooperate' },
    { title: '趋境资讯', id: 4, path: '/qujinginfo' },
    { title: '团队介绍', id: 5, path: '/weteam' },
  ];

  return (
    <nav className={`top-nav bg-1 ${activeSection === 0 ? '' : 'bg-1'} `}>
      <div className='app container'>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-container">
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
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

export default TopNav; 
import React, { useEffect } from 'react';
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

  return (
    <nav className={`mob-top-nav`}>
      <div className='mob-nav-container'>
        <div className="mob-logo">
          <img src={logo} alt="" />
        </div>
        <div className="mob-right">
        <img src={mb} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default TopNav; 
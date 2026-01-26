import { useEffect } from 'react';
import './index.css';
import logo from '@/assets/images/logo.png'
import logo_black from '@/assets/svg/logo-black.svg'
import { useNavigate } from 'react-router-dom';
import { trackButtonClick } from '@/utils/umami';

const TopNav = () => {
  const navigate = useNavigate();

  const onNavigate = (index: string, title: string) => {
    trackButtonClick(`顶部导航-${title}`, '首页顶部导航', { href: index, title });
    navigate(index);
  };
  const navItems = [
    { title: '解决方案', id: 0, isSelected: true, href: 'pageIndex' },
    { title: '开源社区', id: 1, isSelected: true, href: 'pageProduct' },
    { title: '模型仓库', id: 2, isSelected: false, href: '/models' },
    { title: '客户案例', id: 3, isSelected: false, href: 'pageKt' },
    { title: '生态合作', id: 4, isSelected: false, href: '/cooperate' },
    { title: '趋境咨询', id: 5, isSelected: false, href: 'DevelopPage' },
    { title: '关于我们', id: 6, isSelected: true, href: 'PageTeam' },
  ];

  useEffect(() => {
    // onNavigate('pageIndex', '首页')
  }, [])

  return (
    <nav className={`top-nav bg-1 `}>
      <div className='app container'>
        <div className="logo" onClick={() => {
          trackButtonClick('Logo点击', '首页顶部导航', { href: '/' });
          navigate('/');
        }} >
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="nav-container">
          {navItems.map((item) => (
            <div
              id={'home-nav-' + item.id}
              key={item.id}
              onClick={() => onNavigate(item.href, item.title)}
            >
              {item.title}
              {<div className="nav-underline" />}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default TopNav; 
import './index.css';

import TopNav from './components/topNav';
import PageIndex from './components/index';
import PageProduct from './components/product';
import PageTechnology from './components/technology';
import PageKt from './components/KT';
import PageContact from './components/contact';
import PageInfo from './components/info';
import DevelopPage from './components/develop';
import PageTeam from './components/team';

export default function MobileIndex() {

  // 滚动到指定组件
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = 60;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - navbarHeight,
      behavior: 'instant'
    });
  }
  };

  return (
    <div className="mobile-container">
      <TopNav />
      <PageIndex />
      <PageProduct />
      <PageTechnology />
      <PageKt />
      <PageInfo />
      <DevelopPage />
      <PageTeam />
      <PageContact />
    </div>
  );
}
import './index.css';

import TopNav from './components/topNav';
import PageIndex from './components/index';
import PageProduct from './components/product';
import PageQuestion from './components/question';
import PageTab from './components/tab';
import PageContact from './components/contact';
import PageCase from './components/case';
import DevelopPage from './components/develop';
import PageTeam from './components/team';
import PageCooperate from './components/PageCooperate';

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
      <PageQuestion />
      <PageTab />
      <PageCase />
      <PageCooperate />
      <DevelopPage />
      <PageTeam />
      <PageContact />
    </div>
  );
}
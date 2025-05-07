import './index.css';
import { useEffect, useRef } from 'react';

import TopNav from './components/topNav';
import PageIndex from './components/index';
import PageProduct from './components/product';
import PageTechnology from './components/technology';
import PageKt from './components/KT';
import PageContact from './components/contact';
import PageInfo from './components/info';
import DevelopPage from './components/develop';

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
      {/* 假设 TopNav 接收 onNavigate 作为 props */}
      <TopNav onNavigate={scrollToSection} />

      <PageIndex id="pageIndex" />
      <PageProduct id="pageProduct" />
      <PageTechnology id="pageTechnology" />
      <PageKt id="pageKt" />
      <PageInfo id="pageInfo" />
      <DevelopPage id="DevelopPage" />
      <PageContact onNavigate={scrollToSection} />
    </div>
  );
}
import './index.css';
import { useEffect } from 'react';
import TopNav from './components/topNav';
import PageIndex from './components/index';
import PageProduct from './components/product';
import PageTechnology from './components/technology';
import PageKt from './components/KT';
import PageContact from './components/contact';
import PageInfo from './components/info';

export default function MobileIndex() {
  return (
    <div className="mobile-container">
      <TopNav />
      <PageIndex />
      <PageProduct />
      <PageTechnology />
      <PageKt />
      <PageInfo />
      <PageContact />
    </div>
  );
} 
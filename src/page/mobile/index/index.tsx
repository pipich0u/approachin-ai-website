import './index.css';

import TopNav from './components/topNav';
import PageIndex from './components/index/index';
import PageProduct from './components/product';
import PageQuestion from './components/question';
import PageTab from './components/tab';
import PageContact from './components/contact';
import PageCase from './components/case';
import DevelopPage from './components/develop';
import PageConsult from './components/consult';
import PageCooperate from './components/PageCooperate';
import SourcePage from './components/source';
import { useEffect } from 'react';
import { trackPageView } from '@/utils/umami';

export default function MobileIndex() {
  useEffect(() => {
    trackPageView('移动端首页')
  }, [])


  return (
    <div className="mobile-container">
      <PageIndex />
      <PageProduct />
      <PageQuestion />
      <PageTab />
      <PageCase />
      <PageCooperate />
      <SourcePage />
      <DevelopPage />
      <PageConsult />
      <PageContact />
    </div>
  );
}
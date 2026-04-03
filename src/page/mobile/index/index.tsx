import './index.css';

import PageIndex from './components/index/index';
import MobStrips from './components/strips';
import PageTab from './components/tab';
import PageContact from './components/contact';
import PageCase from './components/case';
import DevelopPage from './components/develop';
import PageConsult from './components/consult';
import PageCooperate from './components/PageCooperate';
import SourcePage from './components/source';
import MobAiCloud from './components/aiCloud';
import { useEffect } from 'react';
import { trackPageView } from '@/utils/umami';

export default function MobileIndex() {
  useEffect(() => {
    trackPageView('移动端首页')
  }, [])

  return (
    <div className="mobile-container">
      <PageIndex />
      <MobStrips />
      <PageTab />
      <PageCase />
      <PageCooperate />
      <SourcePage />
      <DevelopPage />
      <MobAiCloud />
      <PageConsult />
      <PageContact />
    </div>
  );
}

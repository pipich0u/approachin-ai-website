import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MobileDetect from 'mobile-detect'
import Index from './page/web/index/inex'
import MobileIndex from './page/mobile/index'

const md = new MobileDetect(window.navigator.userAgent)
const isMobile = md.mobile()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isMobile ? <MobileIndex /> : <Index />}
  </StrictMode>,
)

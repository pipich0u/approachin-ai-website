import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './page/index/inex'
import MobileIndex from './page/mobile/index'
import MobileDetect from 'mobile-detect'

const md = new MobileDetect(window.navigator.userAgent)
const isMobile = md.mobile()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isMobile ? <MobileIndex /> : <Index />}
  </StrictMode>,
)

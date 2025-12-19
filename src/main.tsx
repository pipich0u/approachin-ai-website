import '@ant-design/v5-patch-for-react-19';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MobileDetect from 'mobile-detect'
import MobileIndex from './page/mobile/index'
import { BrowserRouter, RouteObject, useRoutes } from 'react-router-dom'
import router from './router'
import './index.less'
import FloatBtnEle from './page/index/components/floatButton';

function DynamicRoutes({ router }: { router: RouteObject[] }) {
  const routes = useRoutes(router)
  return routes
}
const md = new MobileDetect(window.navigator.userAgent)
const isMobile = md.mobile()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isMobile ? <MobileIndex /> : <BrowserRouter>
      <FloatBtnEle />
      <DynamicRoutes router={router} />
    </BrowserRouter>}
  </StrictMode>,
)

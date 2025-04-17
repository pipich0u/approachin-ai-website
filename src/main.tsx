import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MobileDetect from 'mobile-detect'
import Index from './page/index/inex'
import MobileIndex from './page/mobile/index'
import { BrowserRouter, RouterProvider, useRoutes } from 'react-router-dom'
import router from './router'
function DynamicRoutes({ router }: { router: RouteObject[] }) {
  const routes = useRoutes(router)
  return routes
}
const md = new MobileDetect(window.navigator.userAgent)
const isMobile = md.mobile()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isMobile ? <MobileIndex /> : <BrowserRouter>
      <DynamicRoutes router={router} />
    </BrowserRouter>}
  </StrictMode>,
)

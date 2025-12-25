import { Outlet, useLocation } from 'react-router-dom'
import FloatBtnEle from '@/page/pc/index/components/floatButton'
import TopNavs from './index/components/topNavs'
import './index.css'
import ReactLenis from 'lenis/react'
export default function Layout() {
  const location = useLocation()
  const shouldShowTopNavs = location.pathname !== '/models'
  const shouldUseLenis = location.pathname !== '/models'

  return (
    <div className="layout">
      {shouldUseLenis && <ReactLenis root />}
      <div className="layout-main">
        {shouldShowTopNavs && <TopNavs />}
        <div>
          <Outlet />
          <FloatBtnEle />
        </div>
      </div>
    </div>
  )
}

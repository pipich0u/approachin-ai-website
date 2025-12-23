import { Outlet } from 'react-router-dom'
import FloatBtnEle from '@/page/pc/index/components/floatButton'
import TopNavs from './index/components/topNavs'
import './index.css'
import ReactLenis from 'lenis/react'
export default function Layout() {
  return (
    <div className="layout">
      <ReactLenis root />
      <div className="layout-main">
        <TopNavs />
        <div>
          <Outlet />
          <FloatBtnEle />
        </div>
      </div>
    </div>
  )
}

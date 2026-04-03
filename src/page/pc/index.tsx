import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import FloatBtnEle from '@/page/pc/index/components/floatButton'
import TopNavs from './index/components/topNavs'
import './index.css'
import ReactLenis from 'lenis/react'

// 火山引擎同款 rem 等比缩放：基准 1920px = 16px
function useRemScale() {
  useEffect(() => {
    const DESIGN_WIDTH = 1920
    const BASE_SIZE = 16
    const MIN_SIZE = 10
    const MAX_SIZE = 16

    const update = () => {
      const w = window.innerWidth
      const size = Math.max(MIN_SIZE, Math.min((w / DESIGN_WIDTH) * BASE_SIZE, MAX_SIZE))
      document.documentElement.style.fontSize = `${size}px`
    }

    update()
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('resize', update)
      document.documentElement.style.fontSize = ''
    }
  }, [])
}

export default function Layout() {
  useRemScale()
  const location = useLocation()
  const shouldShowTopNavs = location.pathname !== '/models' && location.pathname !== '/admin_qujing_backend'
  const shouldUseLenis = location.pathname !== '/models'

  return (
    <div className="layout">
      {/* {shouldUseLenis && <ReactLenis root options={{
        lerp: 0.12
      }} />} */}
      <div className="layout-main">
        {shouldShowTopNavs && <TopNavs />}
        <div>
          <Outlet />
          {shouldShowTopNavs && <FloatBtnEle />}
        </div>
      </div>
    </div>
  )
}

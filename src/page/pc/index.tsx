import { Outlet } from 'react-router-dom'
import FloatBtnEle from '@/page/pc/index/components/floatButton'

export default function Layout() {
  return (
    <>
      <FloatBtnEle />
      <Outlet />
    </>
  )
}

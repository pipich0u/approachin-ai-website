import { Outlet } from 'react-router-dom'
import TopNav from './index/components/topNav'

export default function MobileLayout() {
  return (
    <div className='w-full h-screen'>
      <TopNav />
      <Outlet />
    </div>
  )
}

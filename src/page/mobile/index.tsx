import { Outlet } from 'react-router-dom'

export default function MobileLayout() {
  return (
    <div className='w-full h-screen'>
      <Outlet />
    </div>
  )
}

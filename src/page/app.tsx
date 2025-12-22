import { useRoutes } from 'react-router-dom'
import MobileDetect from 'mobile-detect'
import { createAppRoutes } from '@/router'

const md = new MobileDetect(window.navigator.userAgent)
const isMobile = md.mobile()

export default function App() {
  return useRoutes(createAppRoutes(!!isMobile))
}

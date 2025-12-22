import { useRoutes } from 'react-router-dom'
import MobileDetect from 'mobile-detect'
import { createAppRoutes } from '@/router'
import { useUmamiPageView } from '@/hooks/useUmamiPageView'

const md = new MobileDetect(window.navigator.userAgent)
const isMobile = md.mobile()

export default function App() {
    useUmamiPageView()
    return useRoutes(createAppRoutes(!!isMobile))
}

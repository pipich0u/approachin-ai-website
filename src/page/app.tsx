import { useRoutes } from 'react-router-dom'
import MobileDetect from 'mobile-detect'
import { createAppRoutes } from '@/router'
import { useUmamiPageView } from '@/hooks/useUmamiPageView'
import { ScrollToTop } from '@/components/ScrollToTop'

const md = new MobileDetect(window.navigator.userAgent)
const isMobile = md.mobile()

export default function App() {
    useUmamiPageView()
    return (
        <>
            <ScrollToTop />
            {useRoutes(createAppRoutes(!!isMobile))}
        </>
    )
}

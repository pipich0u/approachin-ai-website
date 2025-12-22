
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useUmamiPageView() {
  const location = useLocation()

  useEffect(() => {
    if ((window as any).umami) {
      ;(window as any).umami.track()
    }
  }, [location.pathname])
}

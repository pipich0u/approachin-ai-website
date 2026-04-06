import '@ant-design/v5-patch-for-react-19'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.less'
import App from './page/app'

// 预加载首页关键图片
import heroCard1 from '@/assets/images/img/hero_card1.webp'
import heroCard2 from '@/assets/images/img/hero_card2.webp'
import heroCard3 from '@/assets/images/img/hero_card3.webp'

const criticalImages = ['/images/hero_vision_bg.webp', '/images/hero_slide_bg.webp', heroCard1, heroCard2, heroCard3]
criticalImages.forEach(src => { new Image().src = src })

// 素材保护：禁止右键保存图片
document.addEventListener('contextmenu', (e) => {
  if (e.target instanceof HTMLImageElement || e.target instanceof HTMLCanvasElement) {
    e.preventDefault()
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)


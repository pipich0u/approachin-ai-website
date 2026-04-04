import '@ant-design/v5-patch-for-react-19'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.less'
import App from './page/app'

// 预加载首页关键图片，消除加载闪烁
import heroVisionBg from '@/assets/images/img/hero_vision_bg.webp'
import heroCard1 from '@/assets/images/img/hero_card1.webp'
import heroCard2 from '@/assets/images/img/hero_card2.webp'
import heroCard3 from '@/assets/images/img/hero_card3.webp'
;[heroVisionBg, heroCard1, heroCard2, heroCard3].forEach(src => {
  const img = new Image()
  img.src = src
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

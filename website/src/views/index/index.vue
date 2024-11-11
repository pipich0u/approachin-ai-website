<template>
  <div class="container" ref="containerRef">
    <div class="header navbar" :class="{ 'navbar-scrolled': isScrolled }" v-if="!isMobile">
      <div class="logo_box">
        <img src="/public/images/img/logo-fff.png" alt="" />
      </div>
      <div class="nav_box">
        <ul class="nav">
          <li
            class="nav_item"
            :class="{ active: currentActive === index }"
            @click="scrollToComponent(index)"
            v-for="(item, index) in navbar"
            :key="index"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
    <div class="header_phone" :class="{ 'navbar-scrolled-phone': isScrolled }" v-else>
      <div class="logo_box">
        <img src="/public/images/img/logo-fff.png" alt="" />
      </div>
    </div>
    <div class="content" v-if="!isMobile">
      <IndexVue ref="indexRef" />
      <GoodsVue ref="goodsRef" />
      <SkillOneVue ref="skillOneRef" />
      <SkillTwoVue ref="skillTwoRef" />
      <CooperateVue ref="cooperateRef" />
      <InfoVue ref="infoRef" />
      <FooterVue ref="footerRef" />
    </div>
    <div class="content_phone" v-else>
      <IndexPhoneVue />
      <FooterPhoneVue />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import IndexVue from '../../components/index/index.vue'
import IndexPhoneVue from '../../components/phone/index.vue'
import FooterPhoneVue from '../../components/phone/footer.vue'
import GoodsVue from '../../components/index/goods.vue'
import SkillOneVue from '../../components/index/skillone.vue'
import SkillTwoVue from '../../components/index/skilltwo.vue'
import CooperateVue from '../../components/index/cooperate.vue'
import InfoVue from '../../components/index/info.vue'
import FooterVue from '../../components/index/footer.vue'
const isScrolled = ref(false)
const currentActive = ref<number>(0)
const containerRef = ref<HTMLElement | null>(null)
const indexRef = ref<HTMLElement | null>(null)
const goodsRef = ref<HTMLElement | null>(null)
const skillOneRef = ref<HTMLElement | null>(null)
const skillTwoRef = ref<HTMLElement | null>(null)
const cooperateRef = ref<HTMLElement | null>(null)
const infoRef = ref<HTMLElement | null>(null)
const footerRef = ref<HTMLElement | null>(null)
const isPhone = ref(false)

let isThrottled = false
let isScrolling = ref(false)
const navbar = ref([
  { name: '首页', id: 0 },
  { name: '产品', id: 1 },
  { name: '技术', id: 2 },
  { name: 'KTransformers', id: 3 },
  { name: '案例', id: 4 },
  { name: '资讯', id: 5 },
  { name: '联系我们', id: 6 }
])
const handleScroll = () => {
  if (containerRef.value) {
    isScrolled.value = containerRef.value.scrollTop > 0 // 使用 container 的 scrollTop
  }
}

const scrollToComponent = (index: number) => {
  currentActive.value = index
  let el: HTMLElement | null = null
  switch (index) {
    case 0:
      el = indexRef.value
      break
    case 1:
      el = goodsRef.value
      break
    case 2:
      el = skillOneRef.value
      break
    case 3:
      el = skillTwoRef.value
      break
    case 4:
      el = cooperateRef.value
      break
    case 5:
      el = infoRef.value
      break
    case 6:
      el = footerRef.value
      break
    default:
      console.error(`Invalid index: ${index}`)
      return
  }

  if (el) {
    el.$el.scrollIntoView({ behavior: 'smooth' })
  } else {
    console.error(`Element not found for index: ${index}`)
  }
}

const handleWheel = (event: WheelEvent) => {
  // event.preventDefault()

  if (isScrolling.value) {
    // event.preventDefault()
    event.stopPropagation()
    return
  }
  isScrolling.value = true

  const deltaY = event.deltaY

  if (deltaY > 0) {
    scrollToComponent(Math.min(currentActive.value + 1, navbar.value.length - 1))
  } else {
    scrollToComponent(Math.max(currentActive.value - 1, 0))
  }

  setTimeout(() => {
    isScrolling.value = false
  }, 800)
}

const _isMobile = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera
  isPhone.value =
    /android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos|iphone|ipod|ios|ipad|iemobile|opera mobi|windows phone/i.test(
      userAgent
    )
}

document.addEventListener(
  'wheel',
  function (event) {
    event.preventDefault()
  },
  { passive: false }
)

const isMobile = ref(window.innerWidth <= 768);

// 添加事件监听器以响应窗口大小变化
const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};
onMounted(() => {
  if (containerRef.value) {
    containerRef.value.addEventListener('scroll', handleScroll)
  }
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('wheel', handleWheel)
  window.addEventListener('resize', handleResize);
  _isMobile()
})

onUnmounted(() => {
  if (containerRef.value) {
    containerRef.value.removeEventListener('scroll', handleScroll)
  }
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('wheel', handleWheel)
  window.removeEventListener('resize', handleResize);
})
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  .header {
    height: 100px;
    width: calc(100% - 200px);
    padding: 0 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #000;
    position: fixed;
    top: 0;
    transition: background-color 0.5s ease;
    background-color: transparent;
    z-index: 1000; /* 确保导航栏在最前面 */

    .logo_box {
      img {
        user-select: none;
        width: 160px;
        height: 45px;
      }
    }
    .nav_box {
      display: flex;
      align-items: center;
      .nav {
        display: flex;
        align-items: center;
        width: 560px;
        align-items: center;
        justify-content: space-between;
        .nav_item {
          font-family: MiSans;
          font-size: 18px;
          font-weight: 380;
          padding: 10px 0;
          width: fit-content;
          //   margin-right: 40px;
          //   font-size: 16px;
          color: #fff;
          cursor: pointer;
          transition: color 0.3s;
          position: relative;
          &::after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: 0;
            width: 0;
            height: 1px;
            background-color: #fff;
            transition: width 0.3s ease, left 0.3s ease;
          }
          &:hover::after {
            width: 100%;
            left: 0;
          }
        }
        .active {
          border-bottom: #fff 2px solid;
        }
      }
    }
  }
  .header_phone {
    height: 100px;
    width: calc(100% - 40px);
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #000;
    position: fixed;
    top: 0;
    transition: background-color 0.5s ease;
    background-color: transparent;
    z-index: 1000; /* 确保导航栏在最前面 */
    .logo_box {
      img {
        user-select: none;
        width: 160px;
        height: 45px;
      }
    }
  }
  .navbar-scrolled {
    background-color: rgba(0, 0, 0, 0.8); /* 滚动后背景色 */
  }
  .navbar-scrolled-phone {
    background-color: rgba(0, 0, 0, 1); /* 滚动后背景色 */
  }
  .content {
    width: 100%;
    height: 100%;
  }
}
</style>
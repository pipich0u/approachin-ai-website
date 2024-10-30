<template>
  <div class="container">
    <div class="header navbar" :class="{ 'navbar-scrolled': isScrolled }">
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
    <div class="content">
      <IndexVue ref="indexRef" />
      <GoodsVue ref="goodsRef" />
      <SkillOneVue ref="skillOneRef" />
      <SkillTwoVue />
      <CooperateVue ref="cooperateRef" />
      <InfoVue ref="infoRef" />
      <FooterVue ref="footerRef" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import IndexVue from '../../components/index/index.vue'
import GoodsVue from '../../components/index/goods.vue'
import SkillOneVue from '../../components/index/skillone.vue'
import SkillTwoVue from '../../components/index/skilltwo.vue'
import CooperateVue from '../../components/index/cooperate.vue'
import InfoVue from '../../components/index/info.vue'
import FooterVue from '../../components/index/footer.vue'
const isScrolled = ref(false)
const currentActive = ref<number>(0)

const indexRef = ref<HTMLElement | null>(null)
const goodsRef = ref<HTMLElement | null>(null)
const skillOneRef = ref<HTMLElement | null>(null)
const cooperateRef = ref<HTMLElement | null>(null)
const infoRef = ref<HTMLElement | null>(null)
const footerRef = ref<HTMLElement | null>(null)
let isThrottled = false
const navbar = ref([
  { name: '首页', id: 0 },
  { name: '产品', id: 1 },
  { name: '技术', id: 2 },
  { name: '案例', id: 3 },
  { name: '资讯', id: 4 },
  { name: '联系我们', id: 5 }
])
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
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
      el = cooperateRef.value
      break
    case 4:
      el = infoRef.value
      break
    case 5:
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
const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean
  return function (this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

const handleWheel = (event: WheelEvent) => {
  event.preventDefault()

  if (isThrottled) return
  isThrottled = true

  const deltaY = event.deltaY

  // 根据滚动方向决定翻页
  if (deltaY > 0) {
    // 向下滚动
    scrollToComponent(Math.min(currentActive.value + 1, navbar.value.length - 1))
  } else {
    // 向上滚动
    scrollToComponent(Math.max(currentActive.value - 1, 0))
  }

  setTimeout(() => {
    isThrottled = false
  }, 500)
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('wheel', handleWheel)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('wheel', handleWheel)
})
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // overflow: hidden;
  // overflow-y: scroll;
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
  .navbar-scrolled {
    background-color: rgba(0, 0, 0, 0.8); /* 滚动后背景色 */
  }
  .content {
    width: 100%;
    height: 100%;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
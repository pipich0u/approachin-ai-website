<template>
  <div class="home_content">
    <div class="home_content__header">
      <div class="home_content__header-logo">
        <div class="logo">
          <img src="/images/GroupBlack.png" alt="" />
        </div>
        <div class="tabbar">
          <ul>
            <li
              v-for="item in childrenRouter"
              :key="item.path"
              :class="{ active: route.path === item.path }"
              @click="navgit(item.path)"
            >
              {{ item.name }}
            </li>
          </ul>
          <div class="language">
            <i class="icon iconfont icon-en" v-if="!flag" @click="changeLanguage"></i>
            <i class="icon iconfont icon-cn" v-if="flag" @click="changeLanguage"></i>
          </div>
        </div>
      </div>
    </div>
    <el-scrollbar ref="scrollbarRef">
      <div class="home_content__main">
        <RouterView />
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter, RouterView } from 'vue-router'
import { ref, onMounted, watch } from 'vue'
import { childrenRouter } from '@/router'
import footerVue from '../components/footer/index.vue'
import { useI18n } from 'vue-i18n'
//state

const { t, locale } = useI18n()
const flag = ref(true)
const changeLanguage = () => {
  if (flag.value) {
    locale.value = 'zh'
    localStorage.setItem('lang', 'zh')
    flag.value = false
  } else {
    locale.value = 'en'
    flag.value = true
    localStorage.setItem('lang', 'en')
  }
}
const route = useRoute()
const router = useRouter()
const scrollbarRef = ref()

//func
const navgit = (path: string) => {
  router.push(path)
}

//
watch(route, () => {
  scrollbarRef.value!.setScrollTop(0)
})
onMounted(() => {})
</script>
<style lang="scss" scoped>
.home_content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .home_content__header {
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #eef0fe;
    height: 5.9281rem !important;
    // position: fixed;
    justify-content: center;

    .home_content__header-logo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      background-color: #eef0fe;
      .logo {
        width: 14.6875rem;
        height: 1.875rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 18.75rem;
        img {
          width: 143px;
          height: 40px;
        }
      }
      .tabbar {
        margin-right: 18.75rem;
        // width: 28.125rem;
        display: flex;
        align-items: center;
        ul {
          display: flex;
          justify-content: space-around;
          align-items: center;
          li {
            color: black;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            padding: 12px 18.5px;
            border-radius: 10px;
            margin-left: 10px;
            user-select: none;
          }
          li.active {
            background: rgba(226, 229, 255, 1);
          }
          li:hover {
            transition: 0.3s all;
            background: rgba(226, 229, 255, 1);
          }
        }
        .language {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          .icon {
            font-size: 1.125rem;
            color: #333;
            font-weight: 500;
            cursor: pointer;
            &:active {
              scale: 0.9;
            }
          }
        }
      }
    }
  }
  .home_content__main {
    display: flex;
    flex: 1;
  }
}
</style>

<template>
  <div class="home_content">
    <div class="home_content__header">
      <div class="home_content__header-logo">
        <div class="logo">
          <img src="/images/GroupBlack.png" alt="" />
        </div>
        <div class="tabbar">
          <!-- <ul>
            <li
              v-for="item in childrenRouter"
              :key="item.path"
              :class="{ active: route.path === item.path }"
              @click="navgit(item.path)"
            >
              {{ item.name }}
            </li>
          </ul> -->
          <!-- <div class="toggle-box">
            <div class="toggle" @click="showmod">
              <i class="icon iconfont icon-gengduo"></i>
            </div>
            <ul v-if="mod">
              <li
                v-for="item in childrenRouter"
                :key="item.path"
                :class="{ active: route.path === item.path }"
                @click="navgit(item.path)"
              >
                {{ item.name }}
              </li>
              <li @click="changeLanguage">
                切换语言
                <i class="icon iconfont icon-zhongyingwenqiehuan-zhongwen" v-if="!flag"></i>
                <i class="icon iconfont icon-zhongyingwenqiehuan-yingwen" v-if="flag"></i>
              </li>
            </ul>
          </div> -->
          <!-- <div class="language" style="margin-left: 10px">
            <i class="icon iconfont icon-en" v-if="!flag" @click="changeLanguage"></i>
            <i class="icon iconfont icon-cn" v-if="flag" @click="changeLanguage"></i>
          </div> -->
        </div>
      </div>
    </div>
    <div class="home_content__main ">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter, RouterView } from 'vue-router'
import { ref, onMounted, watch } from 'vue'
import { childrenRouter } from '@/router'
import footerVue from '../components/footer/index.vue'
import { useI18n } from 'vue-i18n'
//state
const mod = ref(false)
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
const showmod = (e: any) => {
  mod.value = !mod.value
  if (mod.value) {
    document.addEventListener('click', function (e) {
      if ((e.srcElement as HTMLElement)?.className !== 'icon iconfont icon-gengduo') {
        mod.value = false
      }
    })
  }
}
//
watch(route, () => {
  scrollbarRef.value!.setScrollTop(0)
})
onMounted(() => {})
</script>
<style lang="scss" scoped>
@media only screen and (min-width: 767px) {
  .home_content {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .home_content__header {
      width: 100%;
      display: flex;
      flex-direction: column;
      background: #eef0fe;
      height: 5.9281rem !important;
      position: fixed;
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
          margin-left: 10%;
          img {
            width: 200px;
            height: 56.8px;
          }
        }
        .toggle-box {
          display: none;
        }
        .tabbar {
          margin-right: 10%;
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
}
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .home_content {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .home_content__header {
      width: 100%;
      display: flex;
      flex-direction: column;
      background: #eef0fe;
      height: 4rem !important;
      position: fixed;
      justify-content: center;

      .home_content__header-logo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        background-color: #eef0fe;
        padding: 0% 5%;
        .logo {
          width: 5.3125rem;
          height: 1.875rem;
          display: flex;
          align-items: center;
          img {
            width: 155px;
            height: 45px;
          }
        }

        .tabbar {
          display: flex;
          align-items: center;
          justify-content: center;
          .toggle-box {
            position: relative;
            width: 2rem;
            .toggle {
              cursor: pointer;
              width: 1.875rem;
              height: 1.875rem;
              display: flex;
              justify-content: center;
              align-items: center;
              .icon {
                font-size: 26px;
              }
            }
            ul {
              border-radius: 0.3125rem;
              transition: 1s ease-in-out;
              left: -120%;
              top: 120%;
              position: absolute;
              display: flex;
              flex-direction: column;
              width: 250%;
              height: 80px;
              background: #fff;
              z-index: 9999;
              align-items: center;
              justify-content: center;
              li {
                width: 100%;
                color: black;
                font-size: 0.625rem;
                font-weight: bold;
                cursor: pointer;
                user-select: none;
                line-height: 1.25rem;
                &:hover {
                  background: rgba(226, 229, 255, 1);
                }
              }
            }
          }
          > ul {
            display: none;
            // display: flex;
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
            display: none;
          }
        }
      }
    }
    .home_content__main {
      display: flex;
      flex: 1;
    }
  }
}
</style>

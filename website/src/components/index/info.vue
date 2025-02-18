<template>
  <div class="info_content">
    <h2>企业资讯</h2>
    <div class="swiper">
      <!-- :autoplay="false" -->
      <el-carousel
        :interval="4000"
        indicator-position="outside"
        class="swiper_img"
        :autoplay="true"
      >
        <el-carousel-item v-for="(item, index) in imgList" :key="index">
          <img :src="item.src" alt="" class="img" />
          <div class="info_desc">
            <div class="desc_content" @click="navigateTo(item.url)">
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const imgList = ref([
  {
    src: '/public/images/img/zixun1.jpg',
    title: '“ 36kr',
    desc: '趋境科技受邀参与36氪WISE2024商业之王大会，谈AI大模型产业落地',
    url: 'https://mp.weixin.qq.com/s/K9yJtg_a9CDcvHli9A1B7g'
  },
  {
    src: '/public/images/img/zixun2.jpg',
    title: '“ 以存换算',
    desc: ' 降低大模型落地门槛，清华系又跑出一家明星公司',
    url: 'https://mp.weixin.qq.com/s/54E4fdYXJKl1oCH8J7L00g'
  },
  {
    src: '/public/images/img/zixun3.jpg',
    title: '“ KVCache',
    desc: '趋境科技深度参与开源共建以 KVCache 为中心的推理架构 Mooncake',
    url: 'https://mp.weixin.qq.com/s/Pr83lj1Ya5xM-8NPcZMxCw'
  },
  {
    src: '/public/images/img/zixun4.jpg',
    title: ' ',
    desc: ' 趋境科技入选「2024年度最佳新锐AI企业」',
    url: 'https://mp.weixin.qq.com/s/DUGB_e2gCg3A-st_Y3Lijw'
  }
])

const navigateTo = (url: string) => {
  window.open(url)
}
</script>


<style scoped lang="scss">
:deep(.el-carousel__indicators) {
  display: none;
}
:deep(.el-carousel__container) {
  height: 100%;
}
@media (min-width: 2560px) {
  .swiper {
    .swiper_img {
      max-width: 2300px !important;
      .el-carousel__item {
        width: 100%;
        max-width: 2300px !important;
        img {
          object-fit: contain;
        }
      }
    }
  }
}
@media only screen and (min-width: 1920px) {
  .info_content {
    width: calc(100% - 200px);
    height: calc(100vh - 50px);
    padding: 50px 100px;
    background: #000;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    h2 {
      height: 80px;
      display: flex;
      align-items: center;
      margin-top: 50px;
      font-family: MiSans;
      font-size: 38px;
      font-weight: 520;
      line-height: 84px;
      letter-spacing: 0.02em;
      text-align: left;
    }
    .swiper {
      width: 100%;
      margin-top: 30px;
      flex: 1;
      height: calc(100% - 130px);
      display: flex;
      justify-content: center;
      // align-items: flex-end;
      .swiper_img {
        width: 100%;
        max-width: 1580px;
        height: 100%;
        .el-carousel__item {
          width: 100%;
          max-width: 1680px;
          // height: 650px;
          height: 90%;
          display: flex;
          // justify-content: center;
          // align-items: center;
          // position: relative; /* 设置为相对定位，以便子元素绝对定位 */
          // overflow: initial;

          img {
            width: 100%;
            height: 100%;
            position: relative;
            object-fit: contain;
          }
          .info_desc {
            width: 100%;
            height: 150px;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5));
            top: calc(100% - 150px); /* 距离底部30px */
            position: absolute; /* 绝对定位 */
            left: 0; /* 距离左侧50px */
            color: white; /* 文字颜色 */
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            div {
              width: 80%;
              display: flex;
              align-items: flex-start;
              flex-direction: column;
              cursor: pointer;
              h3 {
                font-family: MiSans;
                font-size: 48px;
                font-weight: 450;
                line-height: 90px;
                letter-spacing: 0.02em;
              }
              p {
                display: flex;
                align-items: flex-start;
                font-family: MiSans;
                font-size: 24px;
                font-weight: 380;
                line-height: 48px;
                letter-spacing: 0.02em;
                margin-left: 5 0px;
              }
            }
          }
        }
      }
    }
  }
}
@media only screen and (min-width: 1200px) and (max-width: 1919px) {
  .info_content {
    width: calc(100% - 200px);
    height: calc(100vh - 50px);
    padding: 50px 100px;
    background: #000;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    h2 {
      height: 80px;
      display: flex;
      align-items: center;
      margin-top: 50px;
      font-family: MiSans;
      font-size: 38px;
      font-weight: 520;
      line-height: 84px;
      letter-spacing: 0.02em;
      text-align: left;
    }
    .swiper {
      width: 100%;
      margin-top: 30px;
      flex: 1;
      height: calc(100% - 130px);
      display: flex;
      justify-content: center;
      // align-items: flex-end;
      .swiper_img {
        width: 100%;
        max-width: 1580px;
        height: 100%;
        .el-carousel__item {
          width: 100%;
          max-width: 1680px;
          // height: 650px;
          height: 90%;
          display: flex;
          // justify-content: center;
          // align-items: center;
          // position: relative; /* 设置为相对定位，以便子元素绝对定位 */
          // overflow: initial;

          img {
            width: 100%;
            height: 100%;
            position: relative;
            object-fit: contain;
          }
          .info_desc {
            width: 100%;
            height: 150px;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5));
            top: calc(100% - 150px); /* 距离底部30px */
            position: absolute;
            left: 0; /* 距离左侧50px */
            color: white; /* 文字颜色 */
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            div {
              width: 80%;
              cursor: pointer;
              display: flex;
              align-items: flex-start;
              flex-direction: column;
              h3 {
                font-family: MiSans;
                font-size: 48px;
                font-weight: 450;
                line-height: 90px;
                letter-spacing: 0.02em;
              }
              p {
                display: flex;
                align-items: flex-start;
                font-family: MiSans;
                font-size: 24px;
                font-weight: 380;
                line-height: 48px;
                letter-spacing: 0.02em;
                margin-left: 5 0px;
              }
            }
          }
        }
      }
    }
  }
}
@media only screen and (min-width: 767px) and (max-width: 1199px) {
  .info_content {
    width: calc(100% - 100px);
    height: calc(100vh - 50px);
    padding: 50px;
    background: #000;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    h2 {
      height: 80px;
      display: flex;
      align-items: center;
      margin-top: 50px;
      font-family: MiSans;
      font-size: 38px;
      font-weight: 520;
      line-height: 84px;
      letter-spacing: 0.02em;
      text-align: left;
    }
    .swiper {
      width: 100%;
      margin-top: 30px;
      flex: 1;
      height: calc(100% - 130px);
      display: flex;
      justify-content: center;
      // align-items: flex-end;
      .swiper_img {
        width: 100%;
        max-width: 1580px;
        height: 100%;
        .el-carousel__item {
          width: 100%;
          max-width: 1680px;
          // height: 650px;
          height: 90%;
          display: flex;
          // justify-content: center;
          // align-items: center;
          // position: relative; /* 设置为相对定位，以便子元素绝对定位 */
          // overflow: initial;

          img {
            width: 100%;
            height: 100%;
            position: relative;
            object-fit: contain;
          }
          .info_desc {
            width: 100%;
            height: 120px;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5));
            top: calc(100% - 120px); /* 距离底部30px */
            position: absolute;
            left: 0; /* 距离左侧50px */
            color: white; /* 文字颜色 */
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            div {
              width: 80%;
              cursor: pointer;
              display: flex;
              align-items: flex-start;
              flex-direction: column;
              h3 {
                font-family: MiSans;
                font-size: 38px;
                font-weight: 450;
                line-height: 48px;
                letter-spacing: 0.02em;
              }
              p {
                display: flex;
                align-items: flex-start;
                font-family: MiSans;
                font-size: 22px;
                font-weight: 380;
                line-height: 42px;
                letter-spacing: 0.02em;
                margin-left: 5 0px;
              }
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 766px) {
  .info_content {
    width: calc(100% - 100px);
    height: calc(100vh - 50px);
    padding: 50px;
    background: #000;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    h2 {
      height: 80px;
      display: flex;
      align-items: center;
      margin-top: 50px;
      font-family: MiSans;
      font-size: 32px;
      font-weight: 520;
      line-height: 84px;
      letter-spacing: 0.02em;
      text-align: left;
    }
    .swiper {
      width: 100%;
      margin-top: 30px;
      flex: 1;
      height: calc(100% - 130px);
      display: flex;
      justify-content: center;
      // align-items: flex-end;
      .swiper_img {
        width: 100%;
        max-width: 1580px;
        height: 100%;
        .el-carousel__item {
          width: 100%;
          max-width: 1680px;
          // height: 650px;
          height: 90%;
          display: flex;
          img {
            width: 100%;
            height: 80%;
            object-fit: contain;
            position: relative;
          }
          .info_desc {
            width: 100%;
            height: 100px;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5));
            top: calc(100% - 100px); /* 距离底部30px */
            position: absolute; /* 绝对定位 */
            // top: 0; /* 距离底部30px */
            left: 0; /* 距离左侧50px */
            color: white; /* 文字颜色 */
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            div {
              width: 90%;
              cursor: pointer;
              display: flex;
              align-items: flex-start;
              flex-direction: column;
              h3 {
                font-family: MiSans;
                font-size: 28px;
                font-weight: 450;
                line-height: 48px;
                letter-spacing: 0.02em;
              }
              p {
                display: flex;
                align-items: flex-start;
                font-family: MiSans;
                font-size: 16px;
                font-weight: 380;
                line-height: 28px;
                letter-spacing: 0.02em;
                margin-left: 5 0px;
              }
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-height: 755px) {
  .info_content {
    width: calc(100% - 100px);
    height: calc(100vh - 50px);
    padding: 100px 50px 50px 50px;
    background: #000;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    h2 {
      height: 60px;
      display: flex;
      align-items: center;
      margin-top: 3px;
      font-family: MiSans;
      font-size: 38px;
      font-weight: 520;
      line-height: 64px;
      letter-spacing: 0.02em;
      text-align: left;
    }
    .swiper {
      width: 100%;
      margin-top: 10px;
      flex: 1;
      height: calc(100% - 80px);
      display: flex;
      justify-content: center;
      // align-items: flex-end;
      .swiper_img {
        width: 100%;
        max-width: 1580px;
        height: 80%;
        .el-carousel__item {
          width: 100%;
          max-width: 1680px;
          // height: 650px;
          height: 90%;
          display: flex;

          img {
            width: 100%;
            height: 100%;
            position: relative;
            object-fit: contain;
          }
          .info_desc {
            width: 100%;
            height: 100px;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5));
            top: calc(100% - 100px); /* 距离底部30px */
            position: absolute; /* 绝对定位 */
            left: 0; /* 距离左侧50px */
            color: white; /* 文字颜色 */
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            div {
              width: fit-content;
              display: flex;
              cursor: pointer;
              align-items: flex-start;
              flex-direction: column;
              h3 {
                font-family: MiSans;
                font-size: 24px;
                font-weight: 450;
                line-height: 32px;
                letter-spacing: 0.02em;
              }
              p {
                display: flex;
                align-items: flex-start;
                font-family: MiSans;
                font-size: 18px;
                font-weight: 380;
                line-height: 32px;
                letter-spacing: 0.02em;
                margin-left: 5 0px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
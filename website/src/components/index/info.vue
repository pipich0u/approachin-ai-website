<template>
  <div class="info_content">
    <h2>企业资讯</h2>
    <div class="swiper">
      <el-carousel
        :interval="4000"
        :autoplay="false"
        indicator-position="outside"
        class="swiper_img"
      >
        <el-carousel-item v-for="(item, index) in imgList" :key="index">
          <img :src="item.src" alt="" class="img" />
          <div class="info_desc">
            <div>
              <h3>{{ item.title }}</h3>
            </div>
            <p>{{ item.desc }}</p>
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
    src: '/public/images/img/zixun2.png',
    title: '“ 36kr',
    desc: '大模型推理成本降10倍、速度快20倍，AI Infra公司「趋境科技」在推理端开创模型落地新路径'
  },
  {
    src: '/public/images/img/zixun3.png',
    title: '“ 36kr',
    desc: 'OpenAI o1引爆推理算力新革命，趋境科技发布新产品助力企业实现高效推理 '
  },
  {
    src: '/public/images/img/zixun1.png',
    title: '“ 36kr',
    desc: '清华系公司联合，单4090让安全大模型进入千亿时代 \n —— \n 长亭x趋境'
  }
])
</script>


<style scoped lang="scss">
.info_content {
  width: calc(100% - 200px);
  height: calc(100vh - 200px);
  padding: 100px;
  background: #000;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
    height: calc(100% - 80px);
    .swiper_img {
      width: 100%;
      height: 100%;
      .el-carousel__item {
        width: 100%;
        height: 558px;
        display: flex;
        // position: relative; /* 设置为相对定位，以便子元素绝对定位 */
        // overflow: initial;

        img {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .info_desc {
          width: 100%;
          height: 100%;
          position: absolute; /* 绝对定位 */
          top: 0; /* 距离底部30px */
          left: 0; /* 距离左侧50px */
          color: white; /* 文字颜色 */
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          div {
            width: 70%;
            display: flex;
            align-items: flex-start;
            h3 {
              font-family: MiSans;
              font-size: 48px;
              font-weight: 450;
              line-height: 90px;
              letter-spacing: 0.02em;
            }
          }
          p {
            width: 70%;
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
:deep(.el-carousel__indicators) {
  display: none;
}
</style>
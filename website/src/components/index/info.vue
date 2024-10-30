<template>
  <div class="info_content">
    <h2>企业资讯</h2>
    <div class="swiper">
      <el-carousel :interval="4000" indicator-position="outside">
        <el-carousel-item v-for="(item, index) in imgList" :key="index">
          <img :src="item.src" alt="" class="img" />
          <div class="info_desc">
            <h3>{{ item.title }}</h3>
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
    title: '“36kr',
    desc: '大模型推理成本降10倍、速度快20倍，AI Infra公司「趋境科技」在推理端开创模型落地新路径'
  },
  {
    src: '/public/images/img/zixun3.png',
    title: '“36kr',
    desc: 'OpenAI o1引爆推理算力新革命，趋境科技发布新产品助力企业实现高效推理 '
  },
  {
    src: '/public/images/img/zixun1.png',
    title: '“36kr',
    desc: '清华系公司联合，单4090让安全大模型进入千亿时代\n——\n长亭x趋境'
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
    flex: 1;
  }
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item {
  width: 100%;
  height: 100%;
  overflow: initial;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
<template>
  <div class="cpt_content">
    <h2>企业合作案例</h2>
    <div class="content">
      <div class="item" v-for="(item, index) in itemList" :key="index" v-animate>
        <img :src="item.img" alt="" />
        <div class="desc" v-animate>
          <div class="title">{{ item.text }}</div>
          <div class="text">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const itemList = ref([
  {
    img: '/public/images/img/hezuo1.png',
    text: '升级原有企业系统',
    title:
      '长亭科技与趋境科技联合发布“问津千亿安全大模型解决方案”，利用趋境科技以存换算全系统异构推理框架，助力其安全大模型的部署资源成本降低50%，利用一张4090D 即可运行原本4张卡也无法运行的千亿安全大模型，安全能力大幅升级，并助推其更多业务加入大模型能力。'
  },
  {
    img: '/public/images/img/hezuo2.png',
    text: '部署企业专属知识大脑',
    title:
      '某科技企业客户通过趋境科技大模型知识推理一体机，成本低至市场 10 倍部署私有大模型，整合所有企业文档，构建私有大模型平台。自带搜索功能，查询从自然语言询问到自然语言回答，总结、改写、润色、纠错等功能。内置一系列办公 Agent 助手，同时可灵活自定义，辅助日常办公。'
  },
  {
    img: '/public/images/img/hezuo3.png',
    text: '低成本对接现有业务',
    title:
      '某家电行业客户通过趋境科技大模型知识推理一体机提供客服功能，对内承接产品培训、业务培训、产品问答等智能客服能力，对外提供产品咨询、售后、复购等智能客服服务。用户等待时延从原本的 30多秒降低到5秒以内；推理机器成本，从原来的 A800机器降低为4090D机器，成本降低60% 以上。'
  }
])
</script>

<style scoped lang="scss">
.cpt_content {
  width: calc(100% - 200px);
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 100px;
  background: #000;
  color: white;
  background-image: radial-gradient(
    closest-side,
    rgba(31, 13, 107, 0.9),
    rgba(31, 13, 107, 0.6),
    rgba(31, 13, 107, 0)
  );
  background-size: 110vmax 80vmax;
  background-position: center 10vmax;
  background-repeat: no-repeat;
  overflow: hidden;
  h2 {
    font-family: MiSans;
    font-size: 50px;
    font-weight: 520;
    line-height: 120px;
    letter-spacing: 0.02em;
    text-align: center;
  }
  .content {
    width: 100%;
    height: calc(100% - 120px);
    display: flex;
    justify-content: center;
    align-items: center;
    .item {
      width: 30%;
      // height: calc(100% - 20px);
      margin: 0 20px;
      position: relative;
      border-radius: 28px;
      img {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        border-radius: 28px;
        user-select: none;
      }
      .desc {
        width: calc(100% - 80px);
        height: fit-content;
        display: flex;
        flex-direction: column;
        // justify-content: space-around;
        align-items: flex-start;
        // position: absolute;
        // top: 38%;
        // left: 0;
        padding: 0 40px;
        // background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
        border-radius: 28px;
        .title {
          font-family: MiSans;
          font-size: 24px;
          font-weight: 520;
          line-height: 60px;
          letter-spacing: 0.02em;
          text-align: left;
          position: relative;
          margin-top: 60%;
          &::before {
            content: '';
            position: absolute;
            top: 10px;
            left: -10px;
            width: 15px;
            height: 15px;
            border-top: 2px solid rgba(176, 164, 255, 1);
            border-left: 2px solid rgba(176, 164, 255, 1);
          }
        }
        .text {
          position: relative;
          font-family: MiSans;
          font-size: 18px;
          font-weight: 330;
          line-height: 40.5px;
          letter-spacing: 0.02em;
          text-align: left;
        }
      }
    }
  }
}
@media (min-width: 1920px) {
}

@media (min-width: 2560px) {
  .content {
    margin-top: 50px;
    align-items: flex-start !important;
  }
}
</style>
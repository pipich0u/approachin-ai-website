<template>
  <div class="goods_content">
    <div class="goods_content_title">
      <h2>大模型知识 <span>推理一体机</span></h2>
      <h2>提供企业专属推理平台</h2>
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.goods_content {
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  .goods_content_title {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      font-family: MiSans;
      font-size: 56px;
      font-weight: 520;
      line-height: 84px;
      letter-spacing: 0.02em;
      text-align: left;
      span {
        color: #4017e5;
      }
    }
  }
}
</style>
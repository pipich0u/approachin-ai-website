<template>
  <div>
    <div class="footer fontf">
      <a href="https://beian.miit.gov.cn/" targe="_blank"> 京公网安备11010802044671号 </a>
      <a href="https://beian.miit.gov.cn/" targe="_blank"> 京ICP备2024077296号-1 </a>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .footer {
    margin-top: 1.25rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 40px;
    > a {
      color: #000;
      font-size: 10px;
    }
  }
}
@media only screen and (min-width: 767px) {
  .footer {
    margin-top: 1.25rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 40px;
    > a {
      color: #000;
      font-size: 14px;
    }
  }
}
</style>
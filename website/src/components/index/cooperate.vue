<template>
  <div class="cpt_content">
    <h2>企业合作案例</h2>
    <div class="content">
      <div class="item">
        <img src="" alt="" />
        <div class="desc">
          <div class="title"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.cpt_content {
  width: calc(100% - 200px);
  height: calc(100vh - 200px);
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
}
</style>
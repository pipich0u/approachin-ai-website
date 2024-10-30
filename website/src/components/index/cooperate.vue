<template>
  <div class="cpt_content"></div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.cpt_content {
  width: 100%;
  height: 100vh;
  background: #000;
  color: white;
  background-image: radial-gradient(
    closest-side,
    rgba(64, 23, 229, 0.4),
    rgba(64, 23, 229, 0.3),
    rgba(64, 23, 229, 0)
  );
  background-size: 80vmax 70vmax;
  background-position: center 25vmax;
  background-repeat: no-repeat;
}
</style>
<template>
  <div class="start">
    <div class="main">
      <div class="welcome fontf">
        {{ $t('home.welcome.title') }}<span>AI</span>{{ $t('home.welcome.word') }}
      </div>
      <div class="text fontf">
        {{ $t('home.text') }}
      </div>
      <button class="pc" @click="navigatorToCommunity">
        <span class="span-mother">
          <span>G</span>
          <span>e</span>
          <span>t</span>
          <span>&nbsp;</span>
          <span>S</span>
          <span>t</span>
          <span>a</span>
          <span>r</span>
          <span>t</span>
          <span>e</span>
          <span>d</span>
        </span>
        <span class="span-mother2">
          <span>G</span>
          <span>e</span>
          <span>t</span>
          <span>&nbsp;</span>
          <span>S</span>
          <span>t</span>
          <span>a</span>
          <span>r</span>
          <span>t</span>
          <span>e</span>
          <span>d</span>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const router = useRouter()

const navigatorToCommunity = () => {
  router.push('/index/community')
}
</script>

<style scoped lang="scss">
.start {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .main {
    margin-top: 14.6875rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .welcome {
      font-size: 80px;
      font-weight: 600;
      line-height: 157.34px;
      letter-spacing: 0.04em;
      text-align: center;
      color: #000;
      span {
        font-size: 80px;
        font-weight: 700;
        line-height: 157.34px;
        letter-spacing: 0.04em;
        text-align: center;
        color: #5417fe;
      }
    }
    .text {
      margin-top: 10px;
      margin-bottom: 20px;
      width: 760px;
      height: 64px;
      font-size: 20px;
      font-weight: 400;
      line-height: 31.82px;
      text-align: center;
      color: #000;
    }
    .mod {
      display: none;
    }
    button {
      font-size: 24px;
      font-weight: 500;
      line-height: 31.82px;
      text-align: center;
      width: 280px;
      height: 70px;
      margin-top: 100px;
      border-radius: 20px;
      background: linear-gradient(to right, rgba(54, 98, 255, 1), rgba(132, 63, 243, 1));
      color: #ffffff;
      cursor: pointer;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button .span-mother {
      display: flex;
      overflow: hidden;
    }

    button:hover .span-mother {
      position: absolute;
    }

    button:hover .span-mother span {
      transform: translateY(1.2em);
    }

    button .span-mother span:nth-child(1) {
      transition: 0.1s;
    }

    button .span-mother span:nth-child(2) {
      transition: 0.2s;
    }

    button .span-mother span:nth-child(3) {
      transition: 0.3s;
    }

    button .span-mother span:nth-child(4) {
      transition: 0.4s;
    }

    button .span-mother span:nth-child(5) {
      transition: 0.5s;
    }

    button .span-mother span:nth-child(6) {
      transition: 0.6s;
    }
    button .span-mother span:nth-child(7) {
      transition: 0.7s;
    }

    button .span-mother span:nth-child(8) {
      transition: 0.8s;
    }

    button .span-mother span:nth-child(9) {
      transition: 0.9s;
    }

    button .span-mother span:nth-child(10) {
      transition: 1s;
    }

    button .span-mother span:nth-child(11) {
      transition: 1.1s;
    }

    button .span-mother2 {
      display: flex;
      position: absolute;
      overflow: hidden;
    }

    button .span-mother2 span {
      transform: translateY(-1.2em);
    }

    button:hover .span-mother2 span {
      transform: translateY(0);
    }

    button .span-mother2 span {
      transition: 0.1s;
    }

    button .span-mother2 span:nth-child(2) {
      transition: 0.2s;
    }

    button .span-mother2 span:nth-child(3) {
      transition: 0.3s;
    }

    button .span-mother2 span:nth-child(4) {
      transition: 0.4s;
    }

    button .span-mother2 span:nth-child(5) {
      transition: 0.5s;
    }

    button .span-mother2 span:nth-child(6) {
      transition: 0.6s;
    }
    button .span-mother2 span:nth-child(7) {
      transition: 0.7s;
    }

    button .span-mother2 span:nth-child(8) {
      transition: 0.8s;
    }

    button .span-mother2 span:nth-child(9) {
      transition: 0.9s;
    }

    button .span-mother2 span:nth-child(10) {
      transition: 1s;
    }

    button .span-mother2 span:nth-child(11) {
      transition: 1.1s;
    }
  }
}
.fontf {
  user-select: none;
}
</style>
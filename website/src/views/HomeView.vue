<template>
  <div class="container">
    <div class="top_nav">
      <div class="logo">
        <img src="/images/iii.png" alt="" />
        <div class="left">
          <span class="fontf company">趋境科技</span>
          <span class="fontf">Approaching.ai</span>
        </div>
      </div>
      <div class="tab">
        <ul class="ul">
          <li class="fontf">Home</li>
          <li class="fontf" @click="gotogithub">Community</li>
          <li class="fontf not">About us</li>
        </ul>
        <div class="menu">
          <input type="checkbox" id="checkbox2" />
          <label class="toggle toggle2" for="checkbox2" @click="onshow">
            <div id="bar4" class="bars"></div>
            <div id="bar5" class="bars"></div>
            <div id="bar6" class="bars"></div>
          </label>
          <div class="menu-content" v-show="show">
            <ul>
              <li class="fontf">Home</li>
              <li class="fontf" @click="gotogithub">Community</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="welcome fontf">加速到来你的<span>AI</span>世界</div>
      <div class="text fontf">
        An accelerated, accessible, affordable approach to AI
      </div>
      <!-- <button>Comming Soon</button> -->
      <button class="pc">
        <span class="span-mother">
          <span>C</span>
          <span>o</span>
          <span>m</span>
          <span>m</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
          <span>&nbsp;</span>
          <span>S</span>
          <span>o</span>
          <span>o</span>
          <span>n</span>
        </span>
        <span class="span-mother2">
          <span>C</span>
          <span>o</span>
          <span>m</span>
          <span>m</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
          <span>&nbsp;</span>
          <span>S</span>
          <span>o</span>
          <span>o</span>
          <span>n</span>
        </span>
      </button>
      <button class="mod">Comming Soon</button>
    </div>
    <div class="footer fontf">
      <a href="https://beian.miit.gov.cn/" targe="_blank">
        京公网安备11010802044671号
      </a>
      <a href="https://beian.miit.gov.cn/" targe="_blank">
        京ICP备2024077296号-1
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
let show = ref(false);
const gotogithub = () => {
  window.open("https://github.com/kvcache-ai", "_blank");
};
const onshow = () => {
  show.value = !show.value;
};
</script>

<style scoped lang="scss">
.fontf {
  font-family: MiSans;
  user-select: none;
}
@media only screen and (min-width: 767px) {
  .container {
    width: 100%;
    height: 100%;
    background: none;
    position: relative;
    margin: 0;
    padding: 0;
    .top_nav {
      position: fixed;
      width: 100%;
      height: 58px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        display: flex;
        align-items: center;
        margin-top: 60px;
        margin-left: 103px;
        img {
          width: 65px;
          height: 65px;
        }
        .left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .company {
            position: relative;
            overflow: hidden;
            display: block;
            cursor: pointer;
          }
          .company::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: #000;
            transform: translateX(-100%);
            transition: transform 0.3s;
          }

          .company:hover::after {
            transform: translateX(0);
          }
          span {
            text-align: left;
            color: #000;
          }
          span:nth-child(1) {
            font-size: 24px;
            font-weight: 600;
            line-height: 31.82px;
          }
          span:nth-child(2) {
            font-size: 16px;
            font-weight: 500;
            line-height: 21.22px;
          }
        }
      }
      .tab {
        width: 422px;
        height: 27px;
        margin-right: 120px;
        margin-top: 80px;
        .menu {
          display: none;
        }
        ul {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-evenly;
          li {
            font-size: 20px;
            font-weight: 600;
            line-height: 26.52px;
            text-align: center;
            cursor: pointer;
            transition: all 0.25s ease-out;
          }
          li:nth-child(1):hover {
            transform: translateY(-3px);
            color: #5417fe;
          }
          li:nth-child(2):hover {
            transform: translateY(-3px);
            color: #5417fe;
          }
          .not {
            cursor: no-drop;
          }
        }
      }
    }
    .main {
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
        background: #000;
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

      button .span-mother span:nth-child(12) {
        transition: 1.2s;
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

      button .span-mother2 span:nth-child(12) {
        transition: 1.2s;
      }
    }
    .footer {
      position: fixed;
      bottom: 5%;
      left: 50%;
      transform: translateX(-50%);
      > a {
        color: #ffffff;
        font-size: 14px;
      }
    }
  }
}
@media only screen and (min-width: 375px) and (max-width: 767px) {
  .container {
    width: 100%;
    height: 100%;
    background: none;
    position: relative;
    margin: 0;
    padding: 0;
    .top_nav {
      position: fixed;
      width: 100%;
      height: 58px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        display: flex;
        align-items: center;
        margin-top: 60px;
        margin-left: 10px;
        img {
          width: 50px;
          height: 50px;
        }
        .left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .company {
            position: relative;
            overflow: hidden;
            display: block;
            cursor: pointer;
          }
          .company::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: #000;
            transform: translateX(-100%);
            transition: transform 0.3s;
          }

          .company:hover::after {
            transform: translateX(0);
          }
          span {
            text-align: left;
            color: #000;
          }
          span:nth-child(1) {
            font-size: 16px;
            font-weight: 600;
            line-height: 31.82px;
          }
          span:nth-child(2) {
            font-size: 14px;
            font-weight: 500;
            line-height: 21.22px;
          }
        }
      }
      .tab {
        width: 50px;
        height: 27px;
        margin-top: 60px;
        .menu {
          display: flex;
          position: relative;
          #checkbox2 {
            display: none;
          }
          @keyframes moveRightToLeft {
            from {
              right: -100px;
            }
            to {
              right: 0;
            }
          }
          .menu-content {
            width: 100px;
            height: 100px;
            background: rgba(255, 255, 255, 0.7);
            border: 1px solid #5417fe;
            border-radius: 10px 0 0 10px;
            border-right: none;
            position: absolute;
            right: 0;
            top: 105%; 
            animation: moveRightToLeft 2s alternate;
            ul {
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              align-items: center;
              li {
                font-size: 12px;
              }
              li:active {
                color: #5417fe;
              }
            }
          }
          .toggle2 {
            position: relative;
            width: 30px;
            height: 30px;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap:10px;
            transition-duration: 0.5s;
          }

          .bars {
            width: 100%;
            height: 3px;
            background-color: #5417fe;
            border-radius: 6px;
          }

          #bar5 {
            transition-duration: 0.8s;
          }

          #bar4,
          #bar6 {
            width: 80%;
          }

          #checkbox2:checked + .toggle2 .bars {
            position: absolute;
            transition-duration: 0.5s;
          }

          #checkbox2:checked + .toggle2 #bar5 {
            transform: scaleX(0);
            transition-duration: 0.5s;
          }

          #checkbox2:checked + .toggle2 #bar4 {
            width: 100%;
            transform: rotate(45deg);
            transition-duration: 0.5s;
          }

          #checkbox2:checked + .toggle2 #bar6 {
            width: 100%;
            transform: rotate(-45deg);
            transition-duration: 0.5s;
          }

          #checkbox2:checked + .toggle2 {
            transition-duration: 0.5s;
            transform: rotate(180deg);
          }
        }
        .ul {
          display: none;
        }
      }
    }
    .main {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .welcome {
        font-size: 24px;
        font-weight: 600;
        line-height: 70px;
        letter-spacing: 0.04em;
        text-align: center;
        color: #000;
        span {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-align: center;
          color: #5417fe;
        }
      }
      .text {
        width: 100%;
        padding: 5% 0;
        height: 64px;
        font-size: 18px;
        font-weight: 400;
        line-height: 31.82px;
        text-align: center;
        color: #000;
      }
      button {
        font-size: 16px;
        font-weight: 500;
        line-height: 30px;
        text-align: center;
        width: 180px;
        height: 50px;
        margin-top: 100px;
        border-radius: 15px;
        background: #000;
        color: #ffffff;
        cursor: pointer;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .pc {
        display: none;
      }
    }
    .footer {
      position: fixed;
      bottom: 5%;
      left: 50%;
      transform: translateX(-50%);
      > a {
        color: #ffffff;
        font-size: 12px;
      }
    }
  }
}
</style>

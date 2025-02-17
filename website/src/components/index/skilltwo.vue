<template>
  <div class="skill_content">
    <div class="header">
      <div class="title">开源个人版异构协同推理框架</div>
      <div class="ktr">KTransformers</div>
    </div>
    <div class="content">
      <div class="left">
        <img src="/public/images/img/jishu.png" alt="" v-animate="'left'" />
      </div>
      <div class="right">
        <div class="item">
          <img src="/public/images/img/yuan.png" alt="" />
          <div class="text">
            仅需单个消费级 GPU 即可在本地运行 Mixtral 8x22B 和 DeepSeek-Coder-V2
            等千亿级大模型，性能数倍于 Llama.cpp。
          </div>
        </div>
        <div class="item">
          <img src="/public/images/img/yuan.png" alt="" />
          <div class="text">
            业界首个仅需单 GPU 卡跑1M超长上下文的高性能推理框架，生成速度达 16.91 token/s，10 倍于
            Llama.cpp，同时维持接近满分的“大海捞针”能力。
          </div>
        </div>
        <div class="item">
          <img src="/public/images/img/yuan.png" alt="" />
          <div class="text">
            Prefill 和 Generate 性能大幅领先业界方案：Prefill（响应延迟）相比业界方案快 6 倍
            以上、Generate（生成速度）相比业界方案快 3.48 倍 以上。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.skill_content {
  min-height: 675px;
  overflow: hidden;
  overflow-y: auto;
}
@media only screen and (min-width: 1920px) {
  .skill_content {
    width: calc(100% - 200px);
    height: calc(100vh - 200px);
    padding: 100px;
    background: #000;
    color: white;
    position: relative;
    .header {
      width: 100%;
      height: 150px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .ktr {
        color: rgba(178, 158, 255, 1);
      }
      .title,
      .ktr {
        font-family: MiSans;
        font-size: 46px;
        font-weight: 520;
        line-height: 62px;
        letter-spacing: 0.02em;
        text-align: left;
      }
    }
    .content {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: calc(100vh - 350px);

      .right {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        .item {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          img {
            user-select: none;
            width: 50px;
            height: 34px;
          }
          .text {
            margin-top: 30px;
            font-family: MiSans;
            font-size: 24px;
            font-weight: 330;
            line-height: 38px;
            letter-spacing: 0.02em;
            text-align: left;
          }
        }
      }
      .left {
        width: 50%;
        height: 100%;
        position: relative;
        img {
          width: 100%;
          left: -100px;
          bottom: -20px;
          position: absolute;
        }
      }
      .right {
        .item {
          img {
            user-select: none;
            width: 50px;
            height: 34px;
          }
          .text {
            margin-top: 30px;
            font-size: 35px !important;
            // line-height: 60.5px !important;
          }
        }
      }
    }
  }
}
@media only screen and (min-width: 1200px) and (max-width: 1919px) {
  .skill_content {
    width: calc(100% - 200px);
    height: calc(100vh - 200px);
    padding: 100px;
    background: #000;
    color: white;
    position: relative;
    .header {
      width: 100%;
      height: 150px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .ktr {
        color: rgba(178, 158, 255, 1);
      }
      .title,
      .ktr {
        font-family: MiSans;
        font-size: 44px;
        font-weight: 520;
        line-height: 58px;
        letter-spacing: 0.02em;
        text-align: left;
      }
    }
    .content {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: calc(100vh - 350px);

      .right {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        .item {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          img {
            user-select: none;
            width: 50px;
            height: 34px;
          }
          .text {
            margin-top: 30px;
            font-family: MiSans;
            font-size: 22px;
            font-weight: 330;
            line-height: 38px;
            letter-spacing: 0.02em;
            text-align: left;
          }
        }
      }
      .left {
        width: 50%;
        height: 100%;
        position: relative;
        img {
          width: 100%;
          left: -100px;
          bottom: 10vh;
          position: absolute;
        }
      }
    }
  }
}
@media only screen and (min-width: 767px) and (max-width: 1199px) {
  .skill_content {
    width: calc(100% - 100px);
    height: calc(100vh - 200px);
    padding: 100px 50px;
    background: #000;
    color: white;
    position: relative;
    .header {
      width: 100%;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .ktr {
        color: rgba(178, 158, 255, 1);
      }
      .title,
      .ktr {
        font-family: MiSans;
        font-size: 44px;
        font-weight: 520;
        line-height: 52px;
        letter-spacing: 0.02em;
        text-align: left;
      }
    }
    .content {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: calc(100vh - 350px);

      .right {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        .item {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          img {
            user-select: none;
            width: 50px;
            height: 34px;
          }
          .text {
            margin-top: 15px;
            font-family: MiSans;
            font-size: 16px;
            font-weight: 330;
            line-height: 32px;
            letter-spacing: 0.02em;
            text-align: left;
          }
        }
      }
      .left {
        width: 50%;
        height: 100%;
        position: relative;
        img {
          width: calc(100% + 80px);
          left: -100px;
          top: 18vh;
          position: absolute;
        }
      }
    }
  }
}
@media only screen and (max-width: 766px) {
  .skill_content {
    width: calc(100% - 100px);
    height: fit-content;
    padding: 100px 50px;
    background: #000;
    color: white;
    position: relative;
    .header {
      width: 100%;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .title,
      .ktr {
        font-family: MiSans;
        font-size: 32px;
        font-weight: 520;
        line-height: 42px;
        text-align: left;
      }
      .ktr {
        color: rgba(178, 158, 255, 1);
      }
    }
    .content {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: fit-content;

      .right {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        .item {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          img {
            user-select: none;
            width: 30px;
            height: 24px;
          }
          .text {
            margin: 10px 0;
            font-family: MiSans;
            font-size: 14px;
            font-weight: 330;
            line-height: 24px;
            letter-spacing: 0.02em;
            text-align: left;
          }
        }
      }
      .left {
        // margin-top: 20px;
        width: 80%;
        height: fit-content;
        position: relative;
        img {
          width: calc(80% + 80px);
          left: -100px;
          top: 20px;
          position: absolute;
        }
      }
    }
  }
}
@media only screen and (max-height: 824px) {
  .skill_content {
    .content {
      .right {
        width: 100%;
      }
    }
  }
}
</style>
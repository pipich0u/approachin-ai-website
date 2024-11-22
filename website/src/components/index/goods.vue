<template>
  <div class="goods_content">
    <div class="goods_content_title">
      <h2>大模型知识<span>推理一体机</span></h2>
      <h2>提供企业专属推理平台</h2>
    </div>
    <div class="content">
      <div class="content_left">
        <div class="item">
          <div class="title">首创以存换算全系统推理架构</div>
          <div class="text">成本降低 10 倍；响应延迟降低 20 倍</div>
        </div>
        <div class="item">
          <div class="title">软硬一体交付 开箱即用</div>
          <div class="text">
            多种算力配置，兼容业界主流大模型的不同参数，丰富的 API
            接口，提供使用页面，并内置搜索、支持Agent 使用与创建等功能
          </div>
        </div>
        <div class="item">
          <div class="title">企业专属大模型推理平台</div>
          <div class="text">私有化部署，数据安全与隐私有保障轻松构建企业的专属知识大脑</div>
        </div>
      </div>
      <div class="content_right">
        <img src="/public/images/img/zhiwen.png" alt="" class="img1" v-animate="'right'" />
        <div class="img2">
          <img src="/public/images/img/chanp1.png" alt="" class="img21" v-animate />
          <img src="/public/images/img/chanp2.png" alt="" class="img22" v-animate />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@media (max-width: 1280px) {
  .content_left {
    .item {
      margin-top: 30px;
      .title {
        font-size: 16px;
        font-weight: 520;
        line-height: 25px;
        letter-spacing: 0.02em;
      }
      .text {
        width: 450px;
        font-size: 12px;
        font-weight: 330;
        line-height: 20px;
      }
    }
  }
  .img1 {
    position: absolute;
    top: 0px;
    right: -100px;
    width: 356px;
    // height: 526px;
  }
  .img2 {
    position: absolute;
    right: 50px;
    top: 140px;
    width: 398px;
    img {
      width: 100%;
      user-select: none;
    }
  }
}
@media (min-width: 1280px) {
  .content_left {
    .item {
      margin-top: 30px;
      .title {
        font-size: 16px;
        font-weight: 520;
        line-height: 25px;
        letter-spacing: 0.02em;
      }
      .text {
        width: 450px;
        font-size: 12px;
        font-weight: 330;
        line-height: 20px;
      }
    }
  }
  .img1 {
    position: absolute;
    top: 0px;
    right: -100px;
    width: 356px;
    // height: 526px;
  }
  .img2 {
    position: absolute;
    right: 50px;
    top: 140px;
    width: 398px;
    img {
      width: 100%;
      user-select: none;
    }
  }
}
@media only screen and (min-width: 1920px) {
  .goods_content {
    width: calc(100% - 200px);
    height: calc(100vh - 200px);
    padding: 100px;
    background: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-image: radial-gradient(
        closest-side,
        rgba(178, 241, 234, 0.45),
        rgba(178, 241, 234, 0.35),
        rgba(178, 241, 234, 0.25),
        rgba(178, 241, 234, 0)
      ),
      radial-gradient(
        closest-side,
        rgba(178, 98, 255, 0.45),
        rgba(178, 98, 255, 0.35),
        rgba(178, 98, 255, 0.25),
        rgba(178, 98, 255, 0)
      ),
      radial-gradient(
        closest-side,
        rgba(255, 185, 135, 0.45),
        rgba(255, 185, 135, 0.35),
        rgba(255, 185, 135, 0.25),
        rgba(255, 185, 135, 0)
      );
    background-size: 60vmax 30vmax, 60vmax 30vmax, 60vmax 30vmax;
    background-position: 60vmax 5vmax, 40vmax 20vmax, 20vmax 8vmax;
    background-repeat: no-repeat;

    .goods_content_title {
      width: 100%;
      height: 170px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      h2 {
        color: white;
        font-family: MiSans;
        font-size: 46px;
        font-weight: 520;
        line-height: 64px;
        letter-spacing: 0.02em;
        text-align: left;
        span {
          color: #b19dff;
        }
      }
    }
    .content {
      width: 100%;
      height: calc(100% - 270px);
      position: relative;
      display: flex;
      justify-content: space-between;
      // align-items: center;
      .content_left {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        .item {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          margin-top: 30px;
          .title {
            color: white;
            font-family: MiSans;
            font-size: 28px;
            font-weight: 520;
            line-height: 60px;
            letter-spacing: 0.02em;
            text-align: left;
          }
          .text {
            width: 550px;
            color: #9e9d9c;
            font-family: MiSans VF;
            font-size: 20px;
            font-weight: 330;
            display: flex;
            flex-wrap: wrap;
            line-height: 39.69px;
            text-align: left;
          }
        }
      }
      .content_right {
        position: relative;
        .img1 {
          position: absolute;
          top: 0px;
          right: -100px;
          width: 856px;
          // height: 526px;
        }
        .img2 {
          position: absolute;
          right: 200px;
          top: 500px;
          width: 798px;
          img {
            width: 100%;
            user-select: none;
          }
        }
      }
    }
  }
}
@media only screen and (min-width: 1200px) and (max-width: 1919px) {
  .goods_content {
    width: calc(100% - 200px);
    height: calc(100vh - 200px);
    padding: 100px;
    background: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-image: radial-gradient(
        closest-side,
        rgba(178, 241, 234, 0.45),
        rgba(178, 241, 234, 0.35),
        rgba(178, 241, 234, 0.25),
        rgba(178, 241, 234, 0)
      ),
      radial-gradient(
        closest-side,
        rgba(178, 98, 255, 0.45),
        rgba(178, 98, 255, 0.35),
        rgba(178, 98, 255, 0.25),
        rgba(178, 98, 255, 0)
      ),
      radial-gradient(
        closest-side,
        rgba(255, 185, 135, 0.45),
        rgba(255, 185, 135, 0.35),
        rgba(255, 185, 135, 0.25),
        rgba(255, 185, 135, 0)
      );
    background-size: 60vmax 30vmax, 60vmax 30vmax, 60vmax 30vmax;
    background-position: 60vmax 10vmax, 40vmax 20vmax, 20vmax 8vmax;
    background-repeat: no-repeat;

    .goods_content_title {
      width: 100%;
      height: 170px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      h2 {
        color: white;
        font-family: MiSans;
        font-size: 42px;
        font-weight: 520;
        line-height: 64px;
        letter-spacing: 0.02em;
        text-align: left;
        span {
          color: #b19dff;
        }
      }
    }
    .content {
      width: 100%;
      height: calc(100% - 270px);
      position: relative;
      display: flex;
      justify-content: space-between;
      .content_left {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        .item {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          margin-top: 30px;
          .title {
            color: white;
            font-family: MiSans;
            font-size: 24px;
            font-weight: 520;
            line-height: 54px;
            letter-spacing: 0.02em;
            text-align: left;
          }
          .text {
            width: 450px;
            color: #9e9d9c;
            font-family: MiSans VF;
            font-size: 18px;
            font-weight: 330;
            display: flex;
            flex-wrap: wrap;
            line-height: 25px;
            text-align: left;
          }
        }
      }
      .content_right {
        position: relative;
        .img1 {
          position: absolute;
          top: 0px;
          right: -100px;
          width: 626px;
          // height: 526px;
        }
        .img2 {
          position: absolute;
          right: 120px;
          top: 350px;
          width: 447px;
          img {
            width: 100%;
            user-select: none;
          }
        }
      }
    }
  }
}
@media only screen and (min-width: 767px) and (max-width: 1199px) {
  .goods_content {
    width: calc(100% - 100px);
    height: calc(100vh - 200px);
    padding: 100px 50px;
    background: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-image: radial-gradient(
        closest-side,
        rgba(178, 241, 234, 0.45),
        rgba(178, 241, 234, 0.35),
        rgba(178, 241, 234, 0.25),
        rgba(178, 241, 234, 0)
      ),
      radial-gradient(
        closest-side,
        rgba(178, 98, 255, 0.45),
        rgba(178, 98, 255, 0.35),
        rgba(178, 98, 255, 0.25),
        rgba(178, 98, 255, 0)
      ),
      radial-gradient(
        closest-side,
        rgba(255, 185, 135, 0.45),
        rgba(255, 185, 135, 0.35),
        rgba(255, 185, 135, 0.25),
        rgba(255, 185, 135, 0)
      );
    background-size: 60vmax 30vmax, 60vmax 30vmax, 60vmax 30vmax;
    background-position: 60vmax 10vmax, 40vmax 20vmax, 20vmax 8vmax;
    background-repeat: no-repeat;

    .goods_content_title {
      width: 100%;
      height: 170px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      h2 {
        color: white;
        font-family: MiSans;
        font-size: 38px;
        font-weight: 520;
        line-height: 64px;
        letter-spacing: 0.02em;
        text-align: left;
        span {
          color: #b19dff;
        }
      }
    }
    .content {
      width: 100%;
      height: calc(100% - 270px);
      position: relative;
      display: flex;
      justify-content: space-between;
      .content_left {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        .item {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          margin-top: 30px;
          .title {
            color: white;
            font-family: MiSans;
            font-size: 20px;
            font-weight: 520;
            line-height: 40px;
            letter-spacing: 0.02em;
            text-align: left;
          }
          .text {
            width: 350px;
            color: #9e9d9c;
            font-family: MiSans VF;
            font-size: 14px;
            font-weight: 330;
            display: flex;
            flex-wrap: wrap;
            line-height: 25px;
            text-align: left;
          }
        }
      }
      .content_right {
        position: relative;
        .img1 {
          position: absolute;
          top: 0px;
          right: -100px;
          width: 426px;
          // height: 526px;
        }

        .img2 {
          position: absolute;
          right: -100px;
          top: 300px;
          width: 347px;
          img {
            width: 100%;
            user-select: none;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 766px) {
  .goods_content {
    width: calc(100% - 100px);
    height: fit-content;
    padding: 100px 50px;
    background: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    .goods_content_title {
      width: 100%;
      height: 170px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      h2 {
        color: white;
        font-family: MiSans;
        font-size: 46px;
        font-weight: 520;
        line-height: 69px;
        letter-spacing: 0.02em;
        text-align: left;
        span {
          color: #b19dff;
        }
      }
    }
    .content {
      width: 100%;
      height: calc(100% - 270px);
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .content_left {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        .item {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          // margin-top: 30px;
          border-bottom: 1px solid #272830;
          padding: 40px 0;
          .title {
            color: white;
            font-family: MiSans;
            font-size: 32px;
            font-weight: 520;
            line-height: 48px;
            letter-spacing: 0.02em;
            text-align: left;
          }
          .text {
            // width: 350px;
            width: 100%;
            color: #9e9d9c;
            font-family: MiSans VF;
            font-size: 20px;
            font-weight: 330;
            display: flex;
            flex-wrap: wrap;
            line-height: 30px;
            text-align: left;
            margin-top: 10px;
          }
        }
      }
      .content_right {
        margin-top: 20px;
        width: 100%;
        height: 306px;
        position: relative;
        z-index: 999;
        // background-image: radial-gradient(
        //     closest-side,
        //     rgba(178, 241, 234, 0.45),
        //     rgba(178, 241, 234, 0.35),
        //     rgba(178, 241, 234, 0.25),
        //     rgba(178, 241, 234, 0)
        //   ),
        //   radial-gradient(
        //     closest-side,
        //     rgba(178, 98, 255, 0.45),
        //     rgba(178, 98, 255, 0.35),
        //     rgba(178, 98, 255, 0.25),
        //     rgba(178, 98, 255, 0)
        //   ),
        //   radial-gradient(
        //     closest-side,
        //     rgba(255, 185, 135, 0.45),
        //     rgba(255, 185, 135, 0.35),
        //     rgba(255, 185, 135, 0.25),
        //     rgba(255, 185, 135, 0)
        //   );
        // background-size: 80vmax 35vmax, 60vmax 35vmax, 60vmax 35vmax;
        // background-position: -2vmax 1vmax,10vmax 1vmax;
        // background-repeat: no-repeat;
        .img1 {
          position: absolute;
          top: 0px;
          right: -50px;
          width: 326px;
          // height: 526px;
        }
        .img2 {
          position: absolute;
          right: 120px;
          top: 200px;
          width: 247px;
          // background-image: radial-gradient(
          //     closest-side,
          //     rgba(178, 241, 234, 0.45),
          //     rgba(178, 241, 234, 0.35),
          //     rgba(178, 241, 234, 0.25),
          //     rgba(178, 241, 234, 0)
          //   ),
          //   radial-gradient(
          //     closest-side,
          //     rgba(178, 98, 255, 0.45),
          //     rgba(178, 98, 255, 0.35),
          //     rgba(178, 98, 255, 0.25),
          //     rgba(178, 98, 255, 0)
          //   ),
          //   radial-gradient(
          //     closest-side,
          //     rgba(255, 185, 135, 0.45),
          //     rgba(255, 185, 135, 0.35),
          //     rgba(255, 185, 135, 0.25),
          //     rgba(255, 185, 135, 0)
          //   );
          img {
            width: 100%;
            user-select: none;
          }
        }
      }
    }
  }
}
</style>
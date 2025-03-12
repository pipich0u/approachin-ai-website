<template>
  <div class="footer_content">
    <div class="footer_left">
      <div class="logo">
        <img src="/public/images/img/logo-fff.png" alt="" />
      </div>
      <div class="info">
        北京趋境科技有限责任公司，成立于 2024
        年，基于业界首创的全系统推理架构推出“大模型知识推理一体机”，为用户提供开箱即用的大模型落地解决方案。
      </div>
      <div class="info">
        公司创始团队均来自清华大学，在
        AI、体系结构、系统软件等相关的技术系统和软件领域，有多年学术与产业实践经验。
      </div>
      <div class="footer_bottom">
        <a href="https://beian.miit.gov.cn/" targe="_blank"> 京ICP备2024077296号-1 </a>
        <div class="ggb">
          <img src="/public/images/img/ggb.png" alt="" /><a
            href="https://beian.miit.gov.cn/"
            targe="_blank"
          >
            京公网安备11010802044671号
          </a>
        </div>
        <p>&copy; 2024 趋境科技. 保留所有权利.</p>
      </div>
    </div>
    <div class="footer_right">
      <div class="we_email we">
        <div class="title">企业邮箱</div>
        <div class="text">market@approaching.com</div>
      </div>
      <div class="we_address we">
        <div class="title">企业地址</div>
        <div class="text">北京市海淀区优盛大厦D座12层</div>
      </div>
      <div class="we_wx we bt-1">
        <div class="title">产品预约试用</div>
        <div class="img">
          <img src="/public/images/qiyewenxin.jpg" alt="" />
        </div>
      </div>
      <div class="we_gzh we bt-1">
        <div class="title">微信公众号</div>
        <div class="img">
          <img src="/public/images/img/gzh.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@media only screen and (min-width: 1920px) {
  .footer_content {
    width: calc(100% - 200px);
    padding: 0 100px;
    height: 550px;
    background: #0d052e;
    color: white;

    background-image: radial-gradient(
      closest-side,
      rgba(81, 57, 230, 0.4),
      rgba(81, 57, 230, 0.3),
      rgba(81, 57, 230, 0)
    );
    background-size: 80vmax 70vmax;
    background-position: 18vmax 12vmax;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-between;
    position: relative;

    .footer_left {
      margin-top: 90px;
      width: 550px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .footer_bottom {
        width: fit-content;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        // flex-direction: column;
        .ggb {
          margin-left: 10px;
          display: flex;
          align-items: center;
          img {
            width: 18px;
          }
        }
        a {
          line-height: 24px;
          color: #fff;
        }
      }
      .logo {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        img {
          width: 284px;
          height: 80px;
        }
      }
      .info {
        font-family: MiSans;
        font-size: 18px;
        font-weight: 305;
        line-height: 40px;
        letter-spacing: 0.02em;
        text-align: left;
        color: rgb(173, 170, 185);
      }
    }
    .footer_right {
      margin-top: 90px;
      flex: 1;
      display: flex;
      justify-content: space-between;
      .we {
        margin-left: 134px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .img {
          width: 100px;
          img {
            width: 100%;
          }
        }
        .title {
          margin-bottom: 65px;
          font-family: MiSans VF;
          font-size: 18px;
          font-weight: 380;
          line-height: 23.4px;
          letter-spacing: 0.06em;
          text-align: left;
          color: rgb(153, 145, 185);
        }
        .text {
          font-family: MiSans VF;
          font-size: 18px;
          font-weight: 380;
          line-height: 23.4px;
          letter-spacing: 0.06em;
          text-align: left;
        }
      }
    }
  }
}
@media only screen and (min-width: 1200px) and (max-width: 1919px) {
  .footer_content {
    width: calc(100% - 200px);
    padding: 0 100px;
    height: 550px;
    background: #0d052e;
    color: white;

    background-image: radial-gradient(
      closest-side,
      rgba(81, 57, 230, 0.4),
      rgba(81, 57, 230, 0.3),
      rgba(81, 57, 230, 0)
    );
    background-size: 80vmax 70vmax;
    background-position: 18vmax 12vmax;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-between;
    position: relative;

    .footer_left {
      margin-top: 90px;
      width: 500px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .footer_bottom {
        width: fit-content;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        // flex-direction: column;
        .ggb {
          margin-left: 10px;
          display: flex;
          align-items: center;
          img {
            width: 18px;
          }
        }
        a {
          line-height: 24px;
          color: #fff;
        }
      }
      .logo {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        img {
          width: 284px;
          height: 80px;
        }
      }
      .info {
        font-family: MiSans;
        font-size: 18px;
        font-weight: 305;
        line-height: 40px;
        letter-spacing: 0.02em;
        text-align: left;
        color: rgb(173, 170, 185);
      }
    }
    .footer_right {
      margin-top: 90px;
      flex: 1;
      display: flex;
      justify-content: space-between;
      .we {
        margin-left: 34px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .img {
          width: 100px;
          img {
            width: 100%;
          }
        }
        .title {
          margin-bottom: 65px;
          font-family: MiSans VF;
          font-size: 18px;
          font-weight: 380;
          line-height: 23.4px;
          letter-spacing: 0.06em;
          text-align: left;
          color: rgb(153, 145, 185);
        }
        .text {
          font-family: MiSans VF;
          font-size: 18px;
          font-weight: 380;
          line-height: 23.4px;
          letter-spacing: 0.06em;
          text-align: left;
        }
      }
    }
  }
}
@media only screen and (min-width: 767px) and (max-width: 1199px) {
  .footer_content {
    width: calc(100% - 100px);
    padding: 20px 50px;
    height: 500px;
    background: #0d052e;
    color: white;

    background-image: radial-gradient(
      closest-side,
      rgba(81, 57, 230, 0.4),
      rgba(81, 57, 230, 0.3),
      rgba(81, 57, 230, 0)
    );
    background-size: 80vmax 70vmax;
    background-position: 18vmax 12vmax;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-between;
    position: relative;

    .footer_left {
      margin-top: 20px;
      width: 400px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      .footer_bottom {
        width: fit-content;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        font-size: 12px;
        // flex-direction: column;
        position: absolute;
        bottom: 10px;
        .ggb {
          margin-left: 5px;
          display: flex;
          align-items: center;
          font-size: 12px;
          img {
            width: 12px;
          }
        }
        a {
          line-height: 20px;
          color: #fff;
        }
      }
      .logo {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        // margin-bottom: 20px;
        img {
          width: 200px;
          height: 56px;
        }
      }
      .info {
        font-family: MiSans;
        font-size: 16px;
        font-weight: 305;
        line-height: 24px;
        letter-spacing: 0.02em;
        text-align: left;
        color: rgb(173, 170, 185);
      }
    }
    .footer_right {
      margin-left: 100px;
      // margin-top: 50px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .we {
        height: 100px;
        margin-left: 10px;
        display: flex;
        // flex-direction: column;
        align-items: flex-start;
        .img {
          width: 100px;
          img {
            width: 100%;
          }
        }
        .title {
          // margin-bottom: 65px;
          width: 100px;
          font-family: MiSans VF;
          font-size: 18px;
          font-weight: 380;
          line-height: 23.4px;
          letter-spacing: 0.06em;
          color: rgb(153, 145, 185);
        }
        .text {
          margin-left: 20px;
          margin-top: 10px;
          font-family: MiSans VF;
          font-size: 18px;
          font-weight: 380;
          line-height: 23.4px;
          letter-spacing: 0.06em;
        }
        .img {
          margin-left: 20px;
          margin-top: 20px;
          img {
            width: 80px;
          }
        }
      }
      .bit-1 {
        display: flex;
        flex-direction: row !important;
        align-items: center;

      }
    }
  }
}
@media only screen and (max-width: 766px) {
  .footer_content {
    width: calc(100% - 100px);
    padding: 40px 50px;
    height: fit-content;
    background: #0d052e;
    color: white;

    background-image: radial-gradient(
      closest-side,
      rgba(81, 57, 230, 0.4),
      rgba(81, 57, 230, 0.3),
      rgba(81, 57, 230, 0)
    );
    background-size: 80vmax 70vmax;
    background-position: 18vmax 12vmax;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    .footer_left {
      margin-top: 20px;
      // width: 550px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .footer_bottom {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        width: fit-content;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        font-size: 12px;
        // text-align: center;
        justify-content: center;
        // flex-direction: column;
        .ggb {
          margin-left: 10px;
          display: flex;
          align-items: center;
          img {
            width: 18px;
          }
        }
        a {
          line-height: 24px;
          color: #fff;
        }
      }
      .logo {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        img {
          width: 200px;
          height: 56px;
        }
      }
      .info {
        font-family: MiSans;
        font-size: 14px;
        font-weight: 305;
        line-height: 24px;
        letter-spacing: 0.02em;
        text-align: left;
        color: rgb(173, 170, 185);
      }
    }
    .footer_right {
      margin-top: 20px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .we {
        // margin-left: 134px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 10px 0;
        .img {
          width: 80px;
          img {
            width: 100%;
          }
        }
        .title {
          // margin-bottom: 15px;
          font-family: MiSans VF;
          font-size: 16px;
          font-weight: 380;
          line-height: 23.4px;
          letter-spacing: 0.06em;
          text-align: left;
          color: rgb(153, 145, 185);
        }
        .text {
          font-family: MiSans VF;
          font-size: 14px;
          font-weight: 380;
          line-height: 23.4px;
          letter-spacing: 0.06em;
          text-align: left;
          margin-left: 10px;
          margin-top: 20px;
        }
        .img {
          margin-left: 10px;

          img {
            margin-top: 20px;
            width: 80px;
            border-radius: 12px;
          }
        }
      }
    }
  }
}
</style>                  
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
      <div class="we_gzh we">
        <div class="title">微信公众号</div>
        <div>
          <img src="/public/images/img/gzh.png" alt="" />
        </div>
      </div>
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
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.footer_content {
  width: calc(100% - 40px);
  padding: 0 20px 20px 20px;
  height: fit-content;
  background: #0d052e;
  color: white;

  background-image: radial-gradient(
    closest-side,
    rgba(81, 57, 230, 0.4),
    rgba(81, 57, 230, 0.3),
    rgba(81, 57, 230, 0)
  );
  background-size: 40vmax 35vmax;
  background-position: 18vmax 12vmax;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  //   justify-content: center;
  align-items: center;
  position: relative;

  .footer_left {
    margin-top: 10px;
    // width: 550px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: fit-content;
    .logo {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      img {
        width: 142px;
        height: 40px;
      }
    }
    .info {
      font-family: MiSans;
      font-size: 16px;
      font-weight: 305;
      line-height: 28px;
      letter-spacing: 0.02em;
      text-align: left;
      color: rgb(173, 170, 185);
    }
  }
  .footer_right {
    width: 100%;
    margin-top: 20px;
    // flex: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    // justify-content: space-between;
    .we {
      width: 100%;
      margin-top: 10px;
      height: 80px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .title {
        margin-bottom: 15px;
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
        font-size: 14px;
        font-weight: 380;
        line-height: 23.4px;
        letter-spacing: 0.06em;
        text-align: left;
      }
    }
    .we_gzh {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      height: 100px;
      img {
        width: 80px;
        height: 80px;
        margin-left: 20px;
      }
    }
  }
  .footer_bottom {
    width: fit-content;
    margin-top: 20px;
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: #ccc;
    // flex-direction: column;
    .ggb {
      //   margin-left: 10px;
      display: flex;
      align-items: center;
      img {
        width: 18px;
      }
    }
    a {
      line-height: 24px;
      color: #ccc;
    }
  }
}
</style>                  
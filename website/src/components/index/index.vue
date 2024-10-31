<template>
  <div class="index_content">
    <div class="index_content_title">
      <div class="content_text">
        <h1>加速到来你的 AI 世界</h1>
        <p class="p1">An accelerated, accessible, affordable approach to AI</p>
        <p class="p2"></p>
        <p class="p3">提供高性能、低成本、高效率，落地私有化大模型的最佳选择</p>
      </div>
      <div class="content_line">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
    <div class="index_content_footer">
      <img src="/public/images/img/index_line.png" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
 
<style scoped lang="scss">
.index_content {
  width: calc(100% - 200px);
  height: calc(100vh - 200px);
  background: radial-gradient(
      closest-side,
      rgba(178, 98, 255, 0.5),
      rgba(178, 98, 255, 0.4),
      rgba(232, 230, 255, 0)
    ),
    linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    linear-gradient(180deg, #4000c8 0%, #120039 100%);
  background-size: 120vmax 60vmax, cover, cover;
  background-position: center -45vmax, center, center;
  background-repeat: no-repeat, no-repeat, no-repeat;

  // background-image: radial-gradient(
  //   closest-side,
  //   rgba(178, 98, 255, 0.4),
  //   rgba(255, 255, 255, 0.3),
  //   rgba(232, 230, 255, 0)
  // );
  // background-size: 80vmax 70vmax;
  // background-position: center -45vmax;
  // background-repeat: no-repeat;
  // background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
  //   linear-gradient(180deg, #4000c8 0%, #120039 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px;
  @keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em; /* 字母间距从负值开始 */
      opacity: 0; /* 初始透明度为0 */
    }
    100% {
      letter-spacing: normal; /* 字母间距恢复正常 */
      opacity: 1; /* 最终透明度为1 */
    }
  }
  .index_content_title {
    width: 100%;
    margin-top: 28px;
    display: flex;
    flex: 1;
    justify-content: space-between;
    .content_text {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      // align-items: center;
      color: #fff;
      h1 {
        color: #fff;
        font-family: MiSans;
        font-size: 82px;
        font-weight: 380;
        line-height: 160px;
        text-align: left;
        user-select: none;
        animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
        display: inline-block;
      }
      .p1 {
        animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both; /* 添加动画 */
        display: inline-block;
        font-family: MiSans;
        font-size: 46px;
        font-weight: 250;
        line-height: 84px;
        text-align: left;
      }
      .p2 {
        margin: 70px 0;
        width: 100px;
        border: 1px solid #fff;
        user-select: none;
      }
      .p3 {
        margin-top: 10px;
        font-family: MiSans;
        font-size: 24px;
        font-weight: 305;
        line-height: 24px;
        letter-spacing: 0.02em;
        text-align: left;
        color: #9dbaf0;
        user-select: none;
      }
    }
    .content_line {
      position: relative;
      width: 400px;
      height: 100%;
      // overflow: hidden;
      @keyframes meteor-fall {
        from {
          bottom: -100px; /* Start below the viewport */
        }
        to {
          bottom: 110%; /* End above the viewport */
        }
      }
      .line {
        position: absolute;
        //  position: fixed;
        bottom: -100px; /* Start below the viewport */
        left: 50%; /* Start in the middle of the viewport */
        width: 2px; /* Width of the meteor */
        height: 100px; /* Length of the meteor */
        background: linear-gradient(180deg, #cf9fff, rgba(207, 159, 255, 0.2)); /* Meteor color */
        transform: translateX(-50%); /* Center the meteor horizontally */
        animation: meteor-fall 2s linear infinite; /* Apply the falling animation */
        // top: 100%;
        // width: 0px; /* 初始宽度 */
        // height: 100px; /* 初始高度 */
        // // background: linear-gradient(90deg, transparent 50%, orange 50%); /* 创建虚线效果 */
        // background-size: 4px 4px; /* 设置虚线的大小 */
        // overflow: hidden; /* To hide the overflow of the animation */

        // background: repeating-linear-gradient(
        //     0deg,
        //     transparent,
        //     transparent 4px,
        //     #cf9fff 4px,
        //     #cf9fff 8px
        //   ),
        //   linear-gradient(180deg, #cf9fff -80.23%, rgba(207, 159, 255, 0.2) 100%);
        // background-size: 100% 16px;
        // animation: line-move 5s linear infinite; /* 应用动画 */
      }

      .line:nth-child(1) {
        left: 10%;
        width: 1px;
        height: 80px;
        // top: 0%;
        animation-duration: 2s;
        height: 195px;
      }

      .line:nth-child(2) {
        left: 30%;
        // top: 20%;
        width: 3px;
        height: 120px;
        animation-duration: 3s;
        height: 279px;
      }

      .line:nth-child(3) {
        left: 50%;
        width: 2px;
        // top: 8%;
        height: 100px;
        animation-duration: 2.6s;
        height: 185px;
      }

      .line:nth-child(4) {
        left: 70%;
        // top: 25%;
        width: 1.5px;
        height: 90px;
        animation-duration: 4.5s;
        height: 325px;
      }

      .line:nth-child(5) {
        left: 90%;
        width: 2.5px;
        height: 110px;
        // top: 8%;
        animation-duration: 1.5s;
        height: 200px;
      }

      .line:nth-child(6) {
        left: 20%;
        width: 1px;
        // top: 35%;
        animation-duration: 3.5s;
        height: 280px;
      }
      @keyframes line-move {
        from {
          transform: translateY(0);
          opacity: 1;
        }
        to {
          transform: translateY(-1000px);
          opacity: 0;
        }
      }
    }
  }
  .index_content_footer {
    width: 100%;
    height: 100px;
    img {
      width: 100%;
      height: 100px;
      user-select: none;
    }
  }
}
</style>
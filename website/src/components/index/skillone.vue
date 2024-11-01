<template>
  <div class="skill_content">
    <div class="title">
      <h2>业界首创以存换算<span>全系统推理架构</span></h2>
      <div>
        全系统协同优化，紧密联动&nbsp; HBM / DRAM / SSD&nbsp; 和&nbsp; CPU / GPU / NPU&nbsp;
      </div>
      <div>全系统异构设备，突破显存容量的限制，充分释放全系统的存力和算力</div>
    </div>
    <div class="content">
      <div class="top">
        <div class="item it" v-animate>
          <div class="num">-90%</div>
          <div class="text">计算量</div>
        </div>
        <div class="item it" v-animate>
          <div class="num">-90%</div>
          <div class="text">成本</div>
        </div>
        <div class="items it" v-animate>
          <div class="num">+90%</div>
          <div class="text">性能推理</div>
        </div>
      </div>
      <div class="bottom">
        <div class="box" v-animate>
          <div class="box_title">以存换算</div>
          <div class="txt">大模型从死记硬背到融合推理</div>
          <div class="title_content">
            面对全新的问题也可以从历史相关信息中提取可复用的部分内容，与现场信息进行在线融合计算。显著提升可复用的历史计算结果，10倍降低计算量。
          </div>
        </div>
        <div class="box" v-animate>
          <div class="box_title">全系统异构协同架构</div>
          <div class="txt">充分释放全系统算力</div>
          <div class="title_content">
            高性能推理架构，高效融合来自存储、CPU、GPU、NPU 的全系统算力。
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
  width: calc(100% - 200px);
  height: calc(100vh - 200px);
  padding: 100px;
  background: #000;
  color: white;
  .title {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-family: MiSans;
      font-size: 48px;
      font-weight: 520;
      line-height: 80px;
      letter-spacing: 0.02em;
      text-align: left;
      span {
        color: rgba(177, 157, 255, 1);
      }
    }
    div {
      // width: 60%;
      display: flex;
      align-items: flex-start;
      font-family: MiSans;
      font-size: 24px;
      font-weight: 330;
      line-height: 32 px;
      letter-spacing: 0.02em;
      text-align: left;
      color: #a8a8a9;
    }
  }
  .content {
    width: 100%;
    height: calc(100% - 200px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .top {
      width: 100%;
      height: 290px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      // background: #343436;
      border-radius: 8px;
      // padding: 0 100px;
      .it {
        width: 25%;
        height: calc(280px - 80px);
        display: flex;
        flex-direction: column;
        border-radius: 59px;
        background-image: url('/public/images/img/jiantou.png'),
          linear-gradient(59.7deg, #303030 -40.74%, #000000 106.58%);
        background-size: 400px 80%, cover;
        background-repeat: no-repeat, no-repeat;
        background-position: 70% 50%, center;
        padding: 40px 50px;
        color: #d0d0d0;
        user-select: none;
        .text {
          font-family: MiSans;
          font-size: 36px;
          font-weight: 520;
          line-height: 60px;
          letter-spacing: 0.02em;
          text-align: left;
          color: white;
          margin-left: 30px;
        }
        .num {
          margin-left: 30px;
          margin-top: 30px;
          font-family: MiSans;
          font-size: 70px;
          font-weight: 520;
          line-height: 80px;
          letter-spacing: 0.02em;
          text-align: left;
        }
      }
      .items {
        transform: rotateX(0deg);
        justify-content: flex-end;
        align-items: flex-start;
        background-image: linear-gradient(59.7deg, #303030 -40.74%, #000000 106.58%);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        justify-content: flex-start;
        &::before {
          content: ''; /* 伪元素内容为空 */
          position: absolute; /* 绝对定位 */
          top: 0; /* 距离顶部0 */
          left: 0; /* 距离左侧0 */
          width: 100%; /* 设置伪元素宽度为100% */
          height: 100%; /* 设置伪元素高度为100% */
          background-image: url('/public/images/img/jiantou.png');
          background-size: 400px 80%;
          background-repeat: no-repeat;
          background-position: 70% 50%;
          transform: scale(1, -1); /* 将伪元素同时旋转180度 */
        }
        .num {
          margin-top: -20px;
        }
      }
    }
    .bottom {
      width: 100%;
      // height: calc(100% - 290px);
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      .box {
        width: 40%;
        height: calc(280px - 80px);
        padding: 40px 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        background-image: linear-gradient(59.7deg, #303030 -40.74%, #000000 106.58%);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 50px;
        align-items: flex-start;
        .box_title {
          font-family: MiSans;
          font-size: 30px;
          font-weight: 520;
          line-height: 60px;
          letter-spacing: 0.02em;
          text-align: left;
          position: relative;
          &::before {
            content: '';
            position: absolute;
            top: 20px;
            left: -10px;
            width: 5px;
            height: 10px;
            border-top: 3px solid #fff;
            border-left: 3px solid #fff;
          }

          &::after {
            content: '';
            position: absolute;
            bottom: 10px; /* 设置为右下角 */
            right: -10px; /* 设置为右下角 */
            width: 5px;
            height: 10px;
            border-bottom: 3px solid #fff; /* 下边框 */
            border-right: 3px solid #fff; /* 右边框 */
          }
        }
        .txt {
          font-family: MiSans;
          font-size: 24px;
          font-weight: 330;
          line-height: 45px;
          letter-spacing: 0.02em;
          text-align: left;
          columns: #e8e8e8;
        }
        .title_content {
          width: 80%;
          color: #a3a3a3;
          font-family: MiSans;
          font-size: 20px;
          font-weight: 305;
          line-height: 40.5px;
          letter-spacing: 0.02em;
          text-align: left;
        }
      }
    }
  }
}
</style>
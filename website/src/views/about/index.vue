<template>
  <div class="container">
    <div class="banner">
      <div class="logo">
        <img src="../../../public/images/v3.png" alt="" />
      </div>
      <div class="info">
        <p>
          趋境科技成立于 2024
          年，专注大模型推理加速服务，助力大模型低成本落地。公司创始团队均来自清华大学，在
          AI、体系结构、系统软件等相关的技术系统和软件领域，有多年学术与产业实践经验。
        </p>
      </div>
      <div class="arrowTransform">
        <a class="arrowTransform_style"></a>
      </div>
    </div>
    <div>
      <div class="title">
        <h1>--------- 产品展示 ---------</h1>
      </div>
    </div>
    <div class="product">
      <div class="left">
        <div class="content">
          <p>
            趋境科技联合清华发布开源项目KTransformers：高性能推理框架
            <a href="https://github.com/kvcache-ai/ktransformers" style="text-decoration: underline"
              >https://github.com/kvcache-ai/ktransformers</a
            >
          </p>
        </div>
        <div class="img">
          <img src="../../../public/images/chanp.gif" alt="" />
        </div>
        <div class="content">
          <p>
            仅需单个消费级 GPU 即可在本地运行千亿级大模型，性能数倍于
            Llama.cpp，使千亿大模型部署成本降低10倍。在长达 1M
            的超长上下文推理任务中，成为业界首个仅需单 GPU 卡的高性能推理框架，生成速度超过 16
            token/s，比 Llama.cpp 快10倍以上，同时维持接近满分的“大海捞针”能力。
          </p>
        </div>
        <div class="img">
          <img src="../../../public/images/job.jpg" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="img">
          <img src="../../../public/images/123.png" alt="" style="height: auto" />
        </div>
        <div class="content">
          <p>
            该架构能够通过协同存储、CPU、GPU、NPU等多种设备，充分释放异构算力，显著降低
            RAG（检索增强生成）等关键大模型应用场景的运算成本 10
            倍以上，有效解决大模型公司以及金融、安全、电信、教培等行业大模型落地的“最后一公里”难题。
          </p>
        </div>
        <div class="img">
          <img src="../../../public/images/see.png" alt="" />
        </div>
        <div class="content">
          <p>
            趋境科技基于业界首创的全系统推理架构推出“大模型知识推理一体机”，为用户提供开箱即用的大模型落地解决方案。
          </p>
        </div>
      </div>
      <div class="phone">
        <div class="content">
          <p>
            趋境科技联合清华发布开源项目KTransformers:高性能推理框架
            <a href="https://github.com/kvcache-ai/ktransformers"
              >https://github.com/kvcache-ai/ktransformers</a
            >
          </p>
          <img src="../../../public/images/123.png" alt="" />
        </div>
        <div class="content">
          <p>
            该架构能够通过协同存储、CPU、GPU、NPU等多种设备,充分释放异构算力,显著降低
            RAG（检索增强生成）等关键大模型应用场景的运算成本 10
            倍以上,有效解决大模型公司以及金融、安全、电信、教培等行业大模型落地的“最后一公里”难题。
          </p>
          <img src="../../../public/images/chanp.gif" alt="" />
        </div>
        <div class="content">
          <p>
            仅需单个消费级 GPU 即可在本地运行千亿级大模型，性能数倍于
            Llama.cpp,使千亿大模型部署成本降低10倍。在长达 1M
            的超长上下文推理任务中,成为业界首个仅需单 GPU 卡的高性能推理框架,生成速度超过 16
            token/s,比 Llama.cpp 快10倍以上,同时维持接近满分的“大海捞针”能力。
          </p>
          <img src="../../../public/images/see.png" alt="" />
        </div>
        <div class="content">
          <p>
            趋境科技基于业界首创的全系统推理架构推出“大模型知识推理一体机”，为用户提供开箱即用的大模型落地解决方案。
          </p>
          <img src="../../../public/images/job.jpg" alt="" />
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-section">
          <h3>关于我们</h3>
          <p>
            趋境科技专注于大模型推理加速服务，助力大模型低成本落地。
            我们的团队致力于为客户提供最佳的服务体验。
          </p>
        </div>

        <div class="footer-section">
          <h3>联系方式</h3>
          <p><strong>邮箱:</strong> market@approaching.ai</p>
          <!-- <p><strong>地址:</strong> </p> -->
        </div>

        <div class="footer-section">
          <h3>关注我们</h3>
          <div class="social-links">
            <span href="#" class="social-icon">微信公众号: <a href="#">趋境科技</a></span>
          </div>
          <div class="code">
            <div>扫描二维码关注我们</div>
            <img src="../../../public/images/code.png" alt="" />
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2024 趋境科技. 保留所有权利.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@media only screen and (min-width: 1200px) {
  .container {
    padding: 5% 0% 0px 0%;
    display: flex;
    flex-direction: column;
    width: calc(100% - 0%);
    opacity: 0; /* 初始透明度 */
    transform: translateY(20px); /* 向下移动 */
    animation: fadeInUp 0.5s forwards; /* 动画效果 */
    @keyframes fadeInUp {
      to {
        opacity: 1; /* 最终透明度 */
        transform: translateY(0); /* 恢复位置 */
      }
    }
    //   margin: auto;
    //   max-width: 900px;
    //   background: #f9f9f9; /* 背景色 */
    //   border-radius: 10px; /* 圆角 */
    //   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* 阴影效果 */
    .banner {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      // justify-content: ;
      align-items: center;
      .logo {
        width: 300px;
        height: 300px;
        //   border-radius: 50%;
        //   background: rgba(186, 204, 217, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        img {
          width: 80%;
          height: 80%;
          // border-radius: 50%;
        }
      }
      .info {
        margin-top: 100px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          width: 800px;
          line-height: 50px;
          font-size: 24px;
        }
      }
    }
    .title {
      width: 100%;
      line-height: 100px;
      h1 {
        text-align: center; /* 不居中 */
        font-size: 36px;
        color: #333;
      }
    }
    .product {
      margin-top: 50px;
      width: 70%;
      margin: 50px 15%;

      display: flex;
      justify-content: center;
      .phone {
        display: none;
      }
      .left,
      .right {
        width: 50%;
        // border-right: 1px solid #333;
      }
      .img {
        width: 100%;
        height: 400px;
        overflow: hidden;
        border-bottom: 1px solid #333;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .content {
        //   box-shadow: 0.125rem 0.125rem 1.25rem rgba(170, 167, 167, 0.8);
        width: calc(100% - 40px);
        height: 400px;
        display: flex;
        //   background: #fff;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        padding: 0 20px;
        overflow: hidden;
        //   border-bottom: 1px solid #333;
        p {
          width: 400px;
          line-height: 35px;
        }
      }
    }
    .contact-info {
      display: flex;
      width: 100%;
      height: 200px;
      align-items: center;
      justify-content: space-around;
      background: rgba($color: #f1f1f1, $alpha: 0.3);
    }
  }
}
@media only screen and (min-width: 320px) and (max-width: 1200px) {
  .container {
    padding: 20px 20px 0px 20px;
    display: flex;
    flex-direction: column;
    width: calc(100% - 40px);
    opacity: 0; /* 初始透明度 */
    transform: translateY(20px); /* 向下移动 */
    animation: fadeInUp 0.5s forwards; /* 动画效果 */
    @keyframes fadeInUp {
      to {
        opacity: 1; /* 最终透明度 */
        transform: translateY(0); /* 恢复位置 */
      }
    }
    //   margin: auto;
    //   max-width: 900px;
    //   background: #f9f9f9; /* 背景色 */
    //   border-radius: 10px; /* 圆角 */
    //   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* 阴影效果 */
    .banner {
      width: calc(100vw - 40px);
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .logo {
        width: 100px;
        height: 100px;
        //   border-radius: 50%;
        //   background: rgba(186, 204, 217, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        img {
          width: 80%;
          height: 80%;
          // border-radius: 50%;
        }
      }
      .info {
        margin-top: 100px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          width: 800px;
          line-height: 50px;
          font-size: 18px;
        }
      }
    }
    .title {
      width: 100%;
      line-height: 100px;
      h1 {
        text-align: center; /* 不居中 */
        font-size: 20px;
        color: #333;
      }
    }
    .product {
      margin-top: 50px;
      width: calc(100% - 20px);
      margin: 50px 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .left,
      .right {
        display: none;
      }
      .content {
        width: 100%;
        // height: 400px;
        display: flex;
        flex-direction: column;
        //   background: #fff;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        padding: 10px 0;
        overflow: hidden;
        border-bottom: 1px solid #333;
        p {
          width: 80%;
          line-height: 35px;
        }
        img {
          width: 80%;
          height: 80%;
        }
      }
    }
    .contact-info {
      display: flex;
      width: 100%;
      height: 200px;
      align-items: center;
      justify-content: space-around;
      background: rgba($color: #f1f1f1, $alpha: 0.3);
    }
  }
}
.arrowTransform {
  animation: bounce-inSS 2s infinite; /* 启动动画特效 */
  width: 90px;
  height: 50px;
  margin: 0 auto;
  margin-top: 90px;
}
/* 箭头效果的盒子 */
.arrowTransform_style {
  display: block;
  margin: 0 auto;
  width: 20px;
  height: 20px;
  border-right: 3px solid;
  border-top: 3px solid;
  -webkit-transform: rotate(135deg); /* 箭头方向可以自由切换角度 */
  transform: rotate(135deg);
  
  color: #333;
}

@keyframes bounce-inSS {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px); /* 向上移动 */
  }
}
</style>
<style scoped lang="scss">
.footer {
  width: calc(100% - 40px);
  background-color: #333;
  color: #fff;
  padding: 30px 20px;
  //   margin: 0 -5%;
}
.footer-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap; /* 响应式设计 */
}

.footer-section {
  flex: 1;
  min-width: 200px; /* 最小宽度 */
  margin-right: 20px;
  .code {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin-top: 10px;
      width: 100px;
      height: 100%;
    }
  }
  h3 {
    border-bottom: 2px solid #4caf50; /* 底部边框 */
    padding-bottom: 10px;
    margin-bottom: 15px;
    font-size: 20px;
    color: #4caf50; /* 标题颜色 */
  }

  p {
    margin: 5px 0;
    line-height: 1.6; /* 行高 */
    font-size: 16px;
    color: #ccc; /* 字体颜色 */
  }
}

.social-links {
  display: flex;
  flex-direction: column;

  .social-icon {
    margin-bottom: 10px;
    color: #4caf50; /* 社交链接颜色 */
    text-decoration: none;
    transition: color 0.3s;
    a {
      color: #4caf50;
    }
    &:hover {
      color: #fff; /* 悬停时改变颜色 */
      text-decoration: underline; /* 添加下划线 */
      a {
        color: #fff;
      }
    }
  }
}

.footer-bottom {
  text-align: center;
}
</style>
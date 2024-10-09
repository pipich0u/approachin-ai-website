<template>
  <div class="start">
    <!-- <el-scrollbar ref="scrollbarRef" style="width: 100%; height: 100%" @scroll="scroll"> -->
    <div class="main">
      <div class="welcome fontf">
        {{ $t('home.welcome.title') }}<span>AI</span>{{ $t('home.welcome.word') }}
      </div>
      <div class="text fontf">
        <!-- {{ $t('home.text') }} -->
        An accelerated, accessible, affordable approach to AI
        <!-- Grow smarter, grow faster as we need Solutions at the right place, we are empowering all
        your digital twin needs -->
      </div>
      <!-- @click="navigatorToCommunity" -->
      <button class="pc">
        <span class="span-mother">
          <span>C</span>
          <span>o</span>
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
      <div class="arrowTransform" @click="onScroll">
        <a class="arrowTransform_style"></a>
      </div>
    </div>
    <footer class="footer" ref="footer">
      <div class="footer-container">
        <div class="footer-section">
          <h3>关于我们</h3>
          <p>
            趋境科技专注大模型推理加速服务，助力大模型低成本落地。公司创始团队均来自清华大学，在
            AI、体系结构、系统软件等领域有多年学术与产业实践经验。
            趋境科技首创全系统推理架构，并推出“大模型知识推理一体机”，提供开箱即用的大模型落地解决方案，协同存储、CPU、GPU、NPU等多种设备，充分释放异构算力，大模型部署成本降低10倍以上。
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
            <!-- <div>扫描二维码关注我们</div> -->
            <img src="../../../public/images/code.png" alt="" />
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <a href="https://beian.miit.gov.cn/" targe="_blank"> 京公网安备11010802044671号 </a>
        <a href="https://beian.miit.gov.cn/" targe="_blank"> 京ICP备2024077296号-1 </a>
        <p>&copy; 2024 趋境科技. 保留所有权利.</p>
      </div>
    </footer>
    <!-- </el-scrollbar> -->
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import FooterVue from '../../components/footer/index.vue'
import { ElScrollbar } from 'element-plus'
const { t } = useI18n()
const router = useRouter()
const value = ref(0)

const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()
const footer = ref()

const scroll = ({ scrollTop }) => {
  value.value = scrollTop
}
const onScroll = () => {
  // scrollbarRef.value!.setScrollTop(323)
  footer.value.scrollIntoView({
    behavior: 'smooth'
  })
}

const navigatorToCommunity = () => {
  router.push('/index/community')
}
const _isMobile = () => {
  let flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
  return flag
}
//
onMounted(() => {})
</script>

<style scoped lang="scss">
@media only screen and (min-width: 767px) {
  .start {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .main {
      margin-top: 15.245rem;
      width: 100%;
      height: calc(100vh - 15.245rem);
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
        position: relative;
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
}
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .start {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .main {
      margin-top: 7rem;
      padding: 0 5%;
      height: calc(100vh - 4rem - 48px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .welcome {
        font-size: 3rem;
        font-weight: 600;
        line-height: 3rem;
        letter-spacing: 0.04em;
        text-align: center;
        color: #000;
        span {
          font-size: 3rem;
          font-weight: 700;
          line-height: 3rem;
          letter-spacing: 0.04em;
          text-align: center;
          color: #5417fe;
        }
      }
      .text {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        // width: 100%;
        padding: 0 3%;
        // height: 64px;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
        text-align: center;
        color: #000;
      }
      .mod {
        display: none;
      }
      button {
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 1.5rem;
        text-align: center;
        width: 11.25rem;
        height: 3.125rem;
        margin-top: 2rem;
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
}
.fontf {
  user-select: none;
}
.arrowTransform {
  animation: bounce-inSS 2s infinite; /* 启动动画特效 */
  width: 90px;
  height: 125px;
  margin: 0 auto;
  margin-top: 120px;
  // padding: 10% 0;
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
  cursor: pointer;
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

  padding: 20px 20px; // 增加内边距

  // box-shadow: #00000026 0px 15px 0px;
  // background: linear-gradient(to bottom, #eef0fe 25%, rgb(159, 180, 255) 100%);
  // background: linear-gradient(to bottom, rgb(218, 227, 255), rgb(228, 211, 255));
  background: #3c3d37;
  color: #fff;
  // height: 100%;

  // margin: 5% 0%;
}
.footer-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap; /* 响应式设计 */
}

.footer-section {
  flex: 1;
  min-width: 220px; // 增加最小宽度
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
  .code {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin-top: 10px;
      width: 120px; // 增加二维码宽度
      height: auto; // 自适应高度
    }
  }
  h3 {
    border-bottom: 1px solid #fcfaee; /* 底部边框 */
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-size: 22px;
    color: #fcfaee; /* 标题颜色 */
  }

  p {
    margin: 5px 0;
    line-height: 1.6; /* 行高 */
    font-size: 14px;
    color: #fcfaee; /* 字体颜色 */
  }
}

.social-links {
  display: flex;
  flex-direction: column;

  .social-icon {
    margin-bottom: 10px;
    color: #fcfaee;
    text-decoration: none;
    transition: color 0.3s;
    font-size: 14px;
    a {
      color: #fcfaee;
    }
    &:hover {
      color: #aff6ff; /* 悬停时改变颜色 */
      text-decoration: underline; /* 添加下划线 */
      a {
        color: #aff6ff;
      }
    }
  }
}

.footer-bottom {
  text-align: center;
  font-size: 12px;
  a {
    color: #999;
    line-height: 25px;
    &:hover {
      color: #0086f6;
    }
  }
  p {
    color: #999;
    &:hover {
      color: #0086f6;
    }
  }
}
</style>

<style lang="scss">
html,
body {
  scrollbar-width: none; // 隐藏滚动条（Firefox）
  -ms-overflow-style: none; // 隐藏滚动条（Internet Explorer和Edge）
}
html::-webkit-scrollbar {
  display: none; // 隐藏滚动条（Chrome, Safari, Opera）
}
</style>
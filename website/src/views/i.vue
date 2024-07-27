
<template>
  <div>
    <div class="home-content">
      <div class="logo-box">
        <div class="logo clearfix">
          <img src="../assets/image/iii.png" alt="" />
        </div>
      </div>
      <h1 class="Company-name">Approaching.ai</h1>
      <div class="Company">趋境科技</div>
      <div class="motto">加速来到你的AI世界</div>
      <hr />
    </div>
    <div class="companyLogo">
      <img src="../assets/image/iii.png" alt="" />
      <div>
        <div class="company">趋境科技</div>
        <h1 class="name">Approaching.ai</h1>
      </div>
    </div>
    <ul class="nav">
      <li class="item">
        <a href="">123</a>
      </li>
      <li class="item">
        <a href="">123</a>
      </li>
      <li class="item">
        <a href="">123</a>
      </li>
    </ul>
    <div class="footer">
      <a href="https://beian.miit.gov.cn/" targe="_blank">
        京公网安备11010802044671号
      </a>
      <a href="https://beian.miit.gov.cn/" targe="_blank">
        京ICP备2024077296号-1
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.clearfix {
  &:after {
    clear: both;
    content: "\20";
    display: block;
    height: 0;
    visibility: hidden;
  }
}
.footer {
  position: fixed;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  > a {
    color: #ffffff;
  }
}
.home-content {
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  width: 100%;
  height: 300px;
  text-align: center;
  .Company {
    font-size: 26px;
    font-weight: bold;
    font-style: normal;
    color: #686868;
    position: relative;
    overflow: hidden;
     text-transform: uppercase;
     display: block;
  }
  .Company::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 90%;
    height: 3px;
    background-color: #000;
    transform: translateX(-100%);
    transition: transform 0.3s;
  }

  .Company::after {
    transform: translateX(0);
  }
  .logo-box {
    div {
      text-decoration: none;

      img {
        display: inline-block;
        margin-left: 20px;
        width: 180px;
        height: 180px;
        -o-object-fit: cover;
        object-fit: cover;
        overflow: hidden;
        transition: transform 0.3s ease;
        //  background: url(../assets/image/three.png) no-repeat 0 0 / 100px 100px;
      }
      img:hover {
        transform: scale(1.1);
        // background: url(../assets/image/black.png) no-repeat 0 0 / 100px 100px;
      }
    }
  }
  h1 {
    font-size: 26px;
    font-weight: bold;
    font-style: normal;
    height: 50px;
    color: #777;
  }
  .motto {
    // font-size: 16px;
    font-weight: 600;
    margin-bottom: 26px;
    color: #585858;
    margin-top: 50px;
    display: inline-block;
    cursor: pointer;
  }
  .motto::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 95%;
    transform: translateY(-50%);
    transform: translateX(-50%);
    width: 0;
    height: 1px;
    background: black;
    transition: width 0.3s ease;
  }

  .motto:hover::after {
    width: 140px;
  }

  @keyframes underline-animation {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  .motto.underline-animation::after {
    animation: underline-animation 0.3s ease forwards;
  }

  hr {
    max-width: 500px;
    text-align: center;
    margin: 0 auto;
    height: 2px;
    margin-top: -1px;
    border: none;
    background-image: linear-gradient(0deg, transparent, #d5d5d5, transparent);
    background-image: -webkit-linear-gradient(
      0deg,
      transparent,
      #fff,
      transparent
    );
  }
}
.CompanyLogo {
  position: fixed;
  left: 103px;
  top: 60px;
  width: 170px;
  height: 58px;
}
.nav {
  position: fixed;
  right: 100px;
  top: 30px;
  max-width: 400px;
  margin: 0 auto;
  line-height: 40px;
  padding: 0 10px;
  .item {
    display: inline-block;
    font-size: 18px;
    a {
      font-size: 16px;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      color: black;
      transition-duration: 0.5s;
      margin: 0 5px;
    }
    a:hover {
      color: #7c9399;
    }
  }
  .item:last-child span {
    display: none;
  }
  .item span {
    color: #bbb;
  }
}
</style>
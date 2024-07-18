<script setup lang="ts">
</script>

<template>
  <div>
    <div class="home-content">
      <div class="logo-box">
        <a class="logo" href="/">
          <img src="../assets/image/three.png" alt="" />
        </a>
      </div>
      <h1 class="Company-name">KVCache.ai</h1>
      <div class="motto">智能核心，引领潮流</div>
      <hr />
    </div>
    <!-- <ul class="nav">
      <li class="item">
        <a href="">123</a>
      </li>
      <li class="item">
        <a href="">123</a>
      </li>
      <li class="item">
        <a href="">123</a>
      </li>
    </ul> -->
  </div>
</template>
<style lang="scss" scoped>
.home-content {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 300px;
  text-align: center;
  .logo-box {
    a {
      text-decoration: none;
      img {
        display: inline-block;
        // width: 100px;
        // height: 100px;
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
    // font-size: 26px;
    font-weight: bold;
    font-style: normal;
    line-height: 50px;
    height: 50px;
    margin-bottom: 10px;
    color: rgb(255, 255, 255);
  }
  .motto {
    // font-size: 16px;
    font-weight: 200;
    margin-bottom: 26px;
    color: #ffffff;
    display: inline-block;
    cursor: pointer;
  }
  .motto::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 65%;
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
    max-width: 400px;
    text-align: center;
    margin: 0 auto;
    height: 1px;
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
      transition-propety: background-color;
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
<script setup></script>

<template>
  <div class="container">
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 300px;
  height: 300px;
  background: #000;
  .ball {
    width: 10px;
    height: 10px;
    margin: 10px auto;
    border-radius: 50px;
    background: #fff;
    &:nth-child(2n + 1) {
      animation: right 1s infinite ease-in-out;
    }
    &:nth-child(2n) {
      animation: left 1s infinite ease-in-out;
    }
  }
  @keyframes right {
    0% {
      transform: translate(-15px);
    }
    50% {
      transform: translate(15px);
    }
    100% {
      transform: translate(-15px);
    }
  }
  @keyframes left {
    0% {
      transform: translate(15px);
    }
    50% {
      transform: translate(-15px);
    }
    100% {
      transform: translate(15px);
    }
  }
}
</style>

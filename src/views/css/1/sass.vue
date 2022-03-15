<script setup></script>

<template>
  <div class="container">
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
  </div>
</template>

<style scoped lang="scss">
$delays: (
  right 1s,
  left 1.1s,
  right 1.05s,
  left 1.15s,
  right 1.1s,
  left 1.05s,
  right 1s
);

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
    // &:nth-child(2n + 1) {
    //   animation-name: right 0 infinite ease-in-out;
    // }
    // &:nth-child(2n) {
    //   animation-name: left 0 infinite ease-in-out;
    // }
    @each $delay in $delays {
      $index: index($delays, $delay);
      &:nth-child(#{$index}) {
        animation: $delay infinite ease-in-out;
      }
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

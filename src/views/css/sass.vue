<script setup>
import { onMounted } from 'vue';
onMounted(() => {
  let icons = document.querySelectorAll('.container');
  icons.forEach((item) => {
    item.addEventListener(
      'click',
      function (e) {
        console.log('click');
        // e.preventDefault();
        const that = this;
        const curClass = that.getAttribute('class');
        that.setAttribute(
          'class',
          curClass.indexOf('active') > -1
            ? curClass.replace(' active', '')
            : curClass + ' active'
        );
      },
      false
    );
  });
});
</script>

<template>
  <div class="bg">
    <div class="container">
      <img
        class="apple-1"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/80625/apple.svg"
        alt="Apple Icon"
      />
    </div>
    <div class="container">
      <img
        class="lime-1"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/80625/lime.svg"
        alt="Lime Icon"
      />
    </div>
    <div class="container">
      <img
        class="apple-1"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/80625/apple.svg"
        alt="Apple Icon"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg {
  display: flex;
  background: #e3da74;
  width: 600px;
  justify-content: space-between;
  padding: 0 200px;
  height: 400px;
  align-items: center;
  .container {
    .apple-1 {
      width: 45px;
      transform: rotate(-40deg);
    }
    .lime-1 {
      tranform: rotate(-20deg);
    }
    // .lime-1 {
    //   transform: rotate(-20deg);
    //   opacity: 0;
    //   width: 55px;
    // }
  }
  .active {
    .apple-1 {
      animation: add-apple-1 2s forwards;
    }
    // .lime-1 {
    //   animation: lime-appear 1s 1s forwards;
    // }
  }
}
@keyframes add-apple-1 {
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(57px);
    opacity: 1;
  }
}
// @keyframes lime-appear {
//   50% {
//     opacity: 1;
//     transform: scale(0.5);
//   }
//   100% {
//     opacity: 1;
//   }
// }
</style>

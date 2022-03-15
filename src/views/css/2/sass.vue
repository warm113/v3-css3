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
      <!-- <div class="center-line"></div> -->
      <svg
        class="cart-icon-2"
        version="1.1"
        width="150px"
        height="150px"
        viewBox="0 0 90.156 89.89"
      >
        <line
          class="center-line"
          fill="none"
          stroke="#FFFFFF"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          x1="30.863"
          y1="20.74"
          x2="30.863"
          y2="58.63"
        />
      </svg>
    </div>
    <div class="container">
      <div class="one">1</div>
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
      transform: rotate(-20deg);
      opacity: 0;
      width: 55px;
    }
    .center-line {
      // width: 60px;
      // height: 5px;
      // background: #fff;
      // border-radius: 10px;
      stroke-dasharray: 50;
    }
    .one {
      color: #ef9234;
      font-size: 55px;
      opacity: 0;
      transform: scale(0.1) rotate(260deg);
    }
  }
  .active {
    .apple-1 {
      animation: add-apple-1 2s forwards;
    }
    .lime-1 {
      animation: lime-appear 1s 1s forwards;
    }
    .center-line {
      animation: draw-cart 3s forwards;
    }
    .one {
      animation: count 1500ms 500ms forwards;
    }
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
@keyframes lime-appear {
  50% {
    opacity: 1;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
  }
}
@keyframes draw-cart {
  0% {
    stroke-dashoffset: 0;
  }
  25% {
    stroke-dashoffset: 50;
  }
  50% {
    stroke-dashoffset: 50;
  }
  75% {
    stroke-dashoffset: 50;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes count {
  50% {
    opacity: 1;
    transform: translateY(-45px);
  }
  100% {
    opacity: 1;
    transform: translateY(15px);
  }
}
</style>

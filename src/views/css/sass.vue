<script setup></script>

<template>
  <div class="space">
    <div class="mars"></div>
  </div>
</template>

<style scoped lang="scss">
$space: #435d70;
$space-shadow: #374d5c;
$ship: #eee;
$mars: #ff5f40;
$alien: #1aae1e;
$gray: #aaa;
$timing: 12s;
$curve1: cubic-bezier(0.455, 0.03, 0.615, 0.555);
$curve2: cubic-bezier(0.645, 0.045, 0.355, 1);

.space {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $space;
  overflow: hidden;
  .mars {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
  }
}
</style>

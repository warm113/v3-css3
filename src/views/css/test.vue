<script setup>
import { onMounted } from 'vue';
let num = 0;
const handleAdd = () => {
  const loop = () => {
    num++;
    console.log(num);
    if (num < 56) {
      window.requestAnimationFrame(loop);
    }
  };
  loop();
};
onMounted(() => {
  handleAdd();
});
</script>

<template></template>

<style scoped lang="scss"></style>

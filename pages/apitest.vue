<template>
  <!-- 导航栏 -->
  <nev></nev> 
<!-- 随机狗狗图片 -->
<div class="dogimg" >
 <el-image style="width: 300px; height: 300px" :src="message" fit="fill" />
  </div>
</template>

<script setup lang="ts">
// 测试公共api接口，获取随机狗狗图片 (
const {data} = await useFetch('https://dog.ceo/api/breeds/image/random');

const {message,status} = data.value;
console.log(message);
</script>

<style lang="scss" scoped>
/* 样式 */
// 图片居中展示
.dogimg {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
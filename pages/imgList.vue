<template>
  <nev></nev>


  <!-- {{ result.list }} -->
  <!-- <div   v-for="(item,index) in result.list" :key="index"> -->
  <!-- <el-image  style="width: 200px; height: 200px" :src="item.url" fit="fill" /> -->

  <div class="imgList">
    <!-- <imgListitem v-for="(item,index) in result.list" :key="index" :URL="item.url" :title="item.title">  </imgListitem> -->
    <imgListItem v-for="(item, index) in items" :key="index" :index="index" :URL="item.url" :title="item.title" :URLList="imgList">  </imgListItem>
    
   
  </div>
</template>

<script setup lang="ts">
// TypeScript 代码
// const {data} = await useFetch('https://api.apiopen.top/api/getImages');
// const {result,message} = data.value;
// console.log(data.value);
//  console.log(result.list);
// console.log(message);

// 从公共ts文件中导入imgData函数，获取图片数据，引入ts文件内容 ，不用注册和专门引入 
const items =imgData();




// 定义一个数组，将items的URL存入数组
const imgList = items.map(item => item.url);


</script>

<style lang="scss" scoped>
/* 样式 */

.imgList {
  // 不换行 并排显示


  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
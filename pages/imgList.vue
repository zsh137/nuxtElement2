<template>
  <nev></nev>


  <!-- {{ result.list }} -->
  <!-- <div   v-for="(item,index) in result.list" :key="index"> -->
  <!-- <el-image  style="width: 200px; height: 200px" :src="item.url" fit="fill" /> -->

  <div class="imgList">
    <!-- <imgListitem v-for="(item,index) in result.list" :key="index" :URL="item.url" :title="item.title">  </imgListitem> -->
    <imgListItem v-for="(item, index) in items" :key="index" :URL="item.url" :title="item.title"/>
    
   
  </div>
</template>

<script setup lang="ts">
// TypeScript 代码
// const {data} = await useFetch('https://api.apiopen.top/api/getImages');
// const {result,message} = data.value;
// console.log(data.value);
//  console.log(result.list);
// console.log(message);


const items = [
  {
    id: 14925,
    title: "女孩 天空 星星 云彩 4K",
    url: "https://pic.netbian.com/uploads/allimg/170628/160315-149863699572a5.jpg",
    type: "comic"
  },
  {
    id: 13483,
    title: "Violet Evergarden 紫罗",
    url: "https://pic.netbian.com/uploads/allimg/180718/231123-1531926683e817.jpg",
    type: "comic"
  },
  {
    id: 12807,
    title: "森林 河水 小木屋 动漫插",
    url: "https://pic.netbian.com/uploads/allimg/190614/204554-1560516354e91c.jpg",
    type: "comic"
  },
  {
    id: 1880,
    title: "趴在玻璃桌面上的柔顺长",
    url: "https://pic.netbian.com/uploads/allimg/170613/120812-149732689284b5.jpg",
    type: "beauty"
  },
  {
    id: 18144,
    title: "王一博古装3k全面屏手机",
    url: "https://pic.netbian.com/uploads/allimg/210407/224957-1617806997d698.jpg",
    type: "phone"
  },
  {
    id: 15391,
    title: "《流浪地球》IMAX版海报",
    url: "https://pic.netbian.com/uploads/allimg/190213/215457-1550066097ce1d.jpg",
    type: "movie"
  },
  {
    id: 3690,
    title: "戴帽子清新可爱美女4k图",
    url: "https://pic.netbian.com/uploads/allimg/170424/103651-14930014110315.jpg",
    type: "beauty"
  },
  {
    id: 2679,
    title: "女孩,眼睛,脸绘画的图片",
    url: "https://pic.netbian.com/uploads/allimg/160710/232408-14681642488544.jpg",
    type: "beauty"
  },
  {
    id: 12647,
    title: "粉色裙子女孩天使4k壁纸",
    url: "https://pic.netbian.com/uploads/allimg/191107/224336-1573137816ba01.jpg",
    type: "comic"
  },
  {
    id: 311,
    title: "陆萱萱 居家美女闭眼 小",
    url: "https://pic.netbian.com/uploads/allimg/200929/001923-1601309963a2b9.jpg",
    type: "beauty"
  }
];

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
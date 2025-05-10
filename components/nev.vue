
<template>

  <div class="h-6" />
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item index="1"> <nuxt-link to="/"> 主页 </nuxt-link></el-menu-item>
    <el-menu-item index="2"> <nuxt-link to="publicNotice"> 公告公示 </nuxt-link></el-menu-item>
    <el-menu-item index="3"> <nuxt-link to="apitest"> 随机狗狗图 </nuxt-link></el-menu-item> 
    <el-menu-item index="4"> <nuxt-link to="imgList"> 图片墙 </nuxt-link></el-menu-item> 
    <el-menu-item index="5"> <nuxt-link to="about"> 关于</nuxt-link></el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>



<style lang="scss" scoped>
/* 样式 */
a, .nuxt-link {
  text-decoration: none; //取消超链接下划线 取消下划线
}
</style>
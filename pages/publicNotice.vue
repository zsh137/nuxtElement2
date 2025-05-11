<template>
  <nev></nev>
  <div>

    <h1>公告</h1>
    <div>
    <el-icon><edit /></el-icon>
  </div>

  <ClientOnly>
    <el-icon><edit /></el-icon>
  </ClientOnly>
  </div>
  <!-- 引用全局参数相对固定的参数 -->
  {{ useRuntimeConfig().public.projectCompany }}
</template>

<script setup lang="ts">
// TypeScript 代码
import { Edit } from '@element-plus/icons-vue'; // 导入所需图标
</script>

<style lang="scss" scoped>
/* 样式 */

</style>
<template>
  <nev></nev>
  <div>

    <h1>公告</h1>
    <div style="width: 100px;height: 100px;background-color: #f0f0f0;"  class="xxx" 
    >
      <el-icon>
        <edit />
      </el-icon>
    </div>


  </div>
  <!-- 引用全局参数相对固定的参数 -->
  {{ useRuntimeConfig().public.projectCompany }}
</template>

<script setup lang="ts">
const isHovered = ref(false); // 定义变量
import 'animate.css';
// TypeScript 代码
import { Edit } from '@element-plus/icons-vue'; // 导入所需图标
</script>

<style lang="scss" scoped>

  .xxx {
      position: relative;
      top: 0;
      left: 0;
      z-index: 1;
      transition: all 0.3s ease;
      opacity: 1;
      &:hover {
        // transform: scale(1.1);
        // opacity: 0.8;
        animation:rubberBand;
        animation-duration: 1s;
      }

 }

</style>
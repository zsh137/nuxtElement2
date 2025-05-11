<template>
    <nev></nev>
    
    <h1>首页</h1>
    <el-icon><WarningFilled /></el-icon>
    <el-button @click="ElMessage('hello')">button</el-button>
    <ElButton :icon="ElIconEditPen" type="success" @click="ElMessage('成功啦')">button</ElButton>
    <LazyElButton type="warning" @click="open2">lazy button</LazyElButton>

    <h3>hello</h3>
    <div>
    <el-icon><edit /></el-icon>
  </div>
</template>
<script lang="ts" setup>
import { Edit, WarningFilled } from '@element-plus/icons-vue'; // 导入所需图标
const open1 = () => {
  ElNotification({
    title: 'Title',
    message: h('i', { style: 'color: teal' }, 'This is a reminder'),
  })
}

const open2 = () => {
  ElNotification({
    title: 'Prompt',
    message: '444422222This fadsf is a message that does not automatically close',
    duration: 0,
  })
}
</script>

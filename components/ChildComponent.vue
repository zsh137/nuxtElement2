<template>
  <div>{{ name }}</div> <!-- 显示传入的 name -->
</template>

<script setup>
// 定义 props 接收 name
const props = defineProps({
  name: {
    type: String,
    required: true
  }
});
</script>
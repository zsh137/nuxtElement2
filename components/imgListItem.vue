<template>
    <div>
        <!-- 调用该组件时候，需要 传入的图片路径、图片标题、图片描述 -->


        <div class="img-item-box">
            <h5 class="img-title">{{ title }}</h5>
            <!-- 点击在新窗口中打开图片 -->
            <!-- <el-image class="img-item" :src="URL" style="width: 200px; height: 200px;" @click="goToDetail(URL)"></el-image> -->
     

         
            <el-image class="img-item" :src="URL" style="width: 150px; height: 150px;" @click="showPreview = true"></el-image>

            <!-- h3 显示在 el-image 组件左上角 -->

            <!-- 预览元素 -->
            <el-image-viewer  v-if="showPreview" :url-list="URLList" show-progress
 :initial-index="index"  @close="showPreview = false" />
        </div>
    </div>
</template>

<script setup lang="ts">
const showPreview = ref(false)
// 定义 props 接收 url、title、type   组件传参
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    URL: {
        type: String,
        required: true
    },
    URLList: {
        type: Array,
        required: true
    },
    // 用于确定当前图片的索引
    index: {
        type: String,
        required: true
    }

});

// 跳转到详情页
const router = useRouter();
const goToDetail = (URL) => {
    // 打开网页
    window.open(`${URL}`); // 打开新页面

};

</script>

<style lang="scss" scoped>
/* 样式 */
.img-item {
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    // 和img-title元素重叠
    position: relative;
    z-index: 3;
    margin-bottom: 20px;
    
    cursor: pointer;
}

.img-title {
    position: absolute;
    top: 20px;
    left: 0;
    background-color: rgba(248, 222, 222, 0.9);
    color: #010c04;
    padding: 0px;
    border-radius: 10px 10px 0 0;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    width: 100%;
    height: 20px;
    line-height: 20px;
    margin-top: -20px;
    z-index: 5;

}

.img-item-box {
    position: relative;
    // 添加鼠标移入动画，使用animate.css库
   &:hover {
        animation:rubberBand;
        animation-duration: 1s;
      }
}
</style>
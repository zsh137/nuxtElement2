<template>
    <div>
        <!-- 调用该组件时候，需要 传入的图片路径、图片标题、图片描述 -->


        <div class="img-item-box">
            <!-- 点击图片打开图片详情 -->

            <h5 class="img-title">{{ title }}</h5>
            <el-image class="img-item" :src="URL" style="width: 200px; height: 200px;" @click="goToDetail(URL)"></el-image>
             

            <!-- h3 显示在 el-image 组件左上角 -->

        </div>
    </div>
</template>

<script setup lang="ts">

// 定义 props 接收 url、title、type   组件传参
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    URL: {
        type: String,
        required: true
    }
});

// 跳转到详情页
const router = useRouter();
const goToDetail = (URL) => {
    // 打开网页
    window.open(`${URL}`); // 打开新页面
//   router.push(`${URl}`); // 跳转到动态路由
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
    margin-bottom: 30px;


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
}
</style>
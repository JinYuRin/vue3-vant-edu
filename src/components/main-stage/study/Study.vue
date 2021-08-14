<!--  -->
<template>
  <div class="page bg-light px-4 py-5">
    <div class="function-ports rounded-lg px-2 py-3 bg-white">
      <van-config-provider :theme-vars="themeVars">
        <van-grid :border="false" :column-num="5">
          <!-- hover如果不消失就要使用到active了 -->
          <van-grid-item
            v-for="port in functionPorts"
            :key="port.id"
            :icon="port.icon"
            :text="port.text"
            :id="port.icon"
          />
        </van-grid>
      </van-config-provider>
    </div>
    <div class="my-5 flex justify-between w-100">
      <!-- 尝试使用css选择器选择第二个span类型的元素 -->
      <div class="font">
        <span class="mr-3">我的课程</span>
        <span class="text-light-muted">我的专栏</span>
      </div>
      <div class="font text-light-muted">
        <span class="mr-1">全部</span><van-icon name="filter-o" />
      </div>
    </div>
  </div>
</template>

<script>
const themeVars = {
  "grid-item-content-padding": "0 0",
  // "grid-item-content-active-color": "#f2f3f5",
  // "grid-item-content-active-color": "",
};
export default {
  setup() {
    return {
      themeVars,
      functionPorts: [
        { icon: "like-o", text: "收藏", id: 0 },
        { icon: "question-o", text: "问答", id: 1 },
        { icon: "edit", text: "笔记", id: 2 },
        { icon: "records", text: "手记", id: 3 },
        { icon: "back-top", text: "下载", id: 4 },
      ],
    };
  },
};
</script>
<style>
.page {
  /* height: 80vh; */
  min-height: 90vh;
}
.function-ports {
  /* 去查box-shadow */
  box-shadow: 0 2px 4px 0 rgba(43, 51, 59, 0.1);
  /* box-shadow: 0 2px 4px 0 rgba(43, 51, 59, 0.1),
    0 4px 8px 0 rgba(43, 51, 59, 0.1), 0 8px 16px 0 rgba(43, 51, 59, 0.1),
    0 12px 24px 0 rgba(43, 51, 59, 0.1); */
}
/* .function-ports .van-grid-item:active {
  background-color: #f2f3f5;
} */
/* active点击到释放,hover光标悬浮,link未访问的连接,visited已访问的连接 */
.function-ports .van-grid-item__content:active {
  background-color: #f8f9fa;
}
/* 找不到下载的icon 翻转该icon */
/* 查这个i标签是什么来头 */
#back-top i {
  /* 以图片正中心为旋转点翻转180deg度 */
  transform: rotate(180deg);
}
</style>
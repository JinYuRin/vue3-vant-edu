<!-- 抽离课程卡片，需要根据需要定制成多种卡片 -->
<template>
  <van-card @click="cardClick" price="348" title="2021必学 2小时带你极速入门CSS">
    <!-- 注意这里的插槽用法 -->
    <template #thumb>
      <van-image
        style="width: 100%; height: 100%"
        src="http://lencent.top/public/lilong/cover2.png"
        fit="contain"
      />
    </template>
    <template #tags>
      <div class="mt-1">
        <van-tag class="mr-1" text-color="#f7f8f9">林瑾瑜</van-tag>
        <van-tag color="white" text-color="black">高级</van-tag>
      </div>
    </template>
    <template #footer>
      <div
        class="position-absolute font-sm text-light-muted"
        style="bottom: 25rem; right: 35rem"
      >
        1457人学习
      </div>
    </template>
  </van-card>
</template>

<script>
export default {
  setup(props, context) {
    const { emit } = context;
    const cardClick = () => {
      emit("cardClick");
    };
    return { cardClick };
  },
};
</script>
<style scoped>
</style>
<template>
  <!-- 这种典型的固定在整个页面的布局完全可以用定位 或者用flex-1 -->
  <!-- 搜索栏 -->
  <van-search
    shape="round"
    v-model="value"
    placeholder="vue · react · node.js"
  />
  <!-- TODO在手机端上出现问题，需要解决可能需要参照小程序的布局 -->
  <div class="category flex-1 flex">
    <van-sidebar id="sidebar" v-model="active">
      <van-sidebar-item
        v-for="(cate, index) in cateList"
        :key="index"
        :title="cate"
      />
    </van-sidebar>
    <div class="p-3">
      <van-grid :border="false" :column-num="3">
        <van-grid-item
          v-for="value in 4"
          :key="value"
          icon="wechat"
          text="微信开发"
        />
      </van-grid>
    </div>
  </div>
</template>

<script>
// import { useRoute } from "vue-router";
// !route 和router的api是分开的
// import { toRefs } from "vue";
// import { useStore } from "vuex";
import { ref } from "vue";

export default {
  setup() {
    const cateList = [
      "前端开发",
      "后端开发",
      "移动开发",
      "计算机基础",
      "前沿技术",
      "云计算&大数据",
      "运维&测试",
      "数据库",
      "UI设计&多媒体",
      "游戏",
    ];
    const active = ref(0);
    return { active, cateList };
  },
};
</script>
<style scoped>
#sidebar {
  background-color: #f7f8fa;
  width: 220rem;
  /* height: 90%; */
}
#sidebar .van-sidebar-item--select {
  color: #ee0a24;
}
</style>
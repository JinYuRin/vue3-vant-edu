<template>
  <div class="MainStage flex flex-column">
    <!--使用transition标签做动画过渡的必须是是单一根节点的-->
    <!-- <Home/> -->
    <router-view />
    <div class="placeholder w-100" />
    <Docker />
  </div>
</template>

<script>
import Home from "../components/main-stage/home/Home";
import Docker from "../components/Docker";

export default {
  name: "MainStage",
  //  我对页面和组件的标准是，完全不同的页面才可以是页面views，就算是home，cart二级页面也要放到components去
  components: {
    Home,
    Docker,
  },
};
</script>

<style scoped>
.MainStage {
  height: 100vh;
}
.placeholder {
  /* 麻蛋，全局变量还能被我用的??? */
  height: var(--van-tabbar-height);
}
</style>

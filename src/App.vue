<template>
  <!--  又解决了一个疑问，在Vue3中可以写多个根节点的，并且无id:app时会自动产生根节点进行挂载
  根据报错信息翻转使用router-view和transition，证明router-view是用component实现的
  TODO：你需要解决如何在同个页面里有两个v-if的组件会报动画过渡警告的问题
  -->
  <router-view />
  <!--  <router-view v-slot="{ Component }">-->
  <!--    <transition name="n">-->
  <!--      <component :is="Component"/>-->
  <!--    </transition>-->
  <!--  </router-view>-->
</template>
<style lang="scss" scoped>
/*@import "App";*/
.n-enter-from {
  opacity: 0;
}

.n-enter-to {
  opacity: 1;
}

.n-enter-active {
  transition: 0.5s opacity ease;
}

/*.v-leave-to {*/
/*  opacity: 0;*/
/*}*/

/*.v-leave-active {*/
/*  transition: 0.5s opacity ease;*/
/*}*/
</style>
<script>
// import Docker from './components/Docker'
// import Home from './components/main-stage/home/Home'
// import MainStage from './views/MainStage'
// import Login from './views/Login'
import { toRefs } from "vue";
import { useStore } from "vuex";
// import { useRouter } from "vue-router";
// import { useRoute } from "vue-router";

export default {
  components: {
    // Docker,
    // Home,
    // Login,
    // MainStage
  },
  setup() {
    // console.log(useRouter());
    // console.log(useRoute());
    // const route = useRoute();
    // console.log(useStore().state.isLogon)
    const store = useStore();
    // console.log(store.state.isLogon)
    const { isLogon } = toRefs(store.state);
    //  toRefs和toRef都是解构目标并做成响应式对象
    return {
      isLogon,
    };
  },
};
</script>

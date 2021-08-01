<template>
  <div class="wrapper">
    <StaticPart />
    <!-- <Nearby/> -->
    <!-- <van-button type="primary">主要按钮</van-button> -->
    <!-- <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" /> -->
  </div>
</template>
<script>
import StaticPart from "./StaticPart";
// import Nearby from './Nearby'
// import { Shop } from '../../../models/shop'
//
// const getHotList = async () => {
//   return await Shop.getHotList()
// }
// getHotList()//  应该采用哪个生命周期函数呢
export default {
  name: "Home",
  components: {
    StaticPart,
    // Nearby
  },
  // async mounted () { // mounted页面挂载好再抓取数据会好些吧
  //   const hotList = await getHotList()
  //   console.log(hotList?.data?.data)//  可选链
  // }
};
</script>

<style lang="scss" scoped>
@import "@/style/viriables";
@import "@/style/mixins";

.wrapper {
  overflow: auto;
  box-sizing: border-box;
  color: $content-fontcolor;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  bottom: 0.5rem;
  // padding: 0 0.18rem;
}
</style>

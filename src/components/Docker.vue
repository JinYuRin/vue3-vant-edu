<template>
  <van-tabbar v-model="active">
    <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item name="search" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item name="friends" icon="desktop-o">学习</van-tabbar-item>
    <van-tabbar-item name="setting" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Docker",
  setup() {
    const active = ref("home");
    return { active };
  },
};
</script>

<style lang="scss" scoped>
@import "../style/viriables";

.docker {
  color: $content-fontcolor;
  display: flex;
  /*内部元素采用flex布局一种弹性自适应布局,默认是row行内布局*/
  box-sizing: border-box;
  /*box-sizing顾名思义就是盒模型的大小，border-box以border边为大小,宽度和高度将包含
  内边距和边框的的宽度，content-box将高宽只给与实际内容框，内边距和边框会另外绘制
  所以整体高度就只有0.49rem
  */
  position: absolute;
  /*position位置的定义absolute在一个页面的绝对位置 需要配合LRTB方位使用
  定位标准为文档流，如果预留位置给他将能有tarbar的效果
  fixed定位标准为浏览器窗口，无论文档流什么位置如果滑动页面始终在窗口内显示
  只有relative不脱离文档流，针对正常的位置进行调整
  ps:float也会脱离文档流，但是其他元素进行渲染的时候会给他留足够位置
  */
  left: 0;
  /*left::0 加上宽度100%就可以完成占领整个屏幕宽度*/
  bottom: 0;
  /*设置定位元素下 外 边 距 边 界 与其包含块下边界之间*/
  padding: 0 0.18rem;
  /*padding其实是一个重载函数，参数数量决定函数 两个参数是水平和左右的padding*/
  width: 100%;
  height: 0.49rem;
  /*0.49rem=49px,因为设定了base.scss*/
  border-top: 0.01rem solid #f1f1f1;
  /*solid是虚线1px颜色#f1f1f1  */
  /*background-color: green;*/
  &__item {
    /*flex布局下的flex:1是等份分布的意思  */
    flex: 1;
    /*设置text-align在水平线上的布局*/
    text-align: center;
    /*样式是会叠加的,且这里采用了scss的写法，将只定义docker__item下的iconfont*/
    .iconfont {
      font-size: 0.2rem;
      /*margin和padding的参数顺序为上右下左或垂直和水平*/
      margin: 0.07rem 0 0.02rem 0;
    }

    &--active {
      color: #1fa4fc;
    }
  }

  &__title {
    /*浏览器默认最小的字体12px,但是我需要10px*/
    font-size: 0.2rem;
    /*scale(0.5,0.5)这个函数将横向和纵向都缩放一定的比率*/
    transform: scale(0.5, 0.5);
    /*缩放函数还要加用缩放中心transform-origin为中心的顶部*/
    transform-origin: center top;
  }
}
</style>

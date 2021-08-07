<template>
  <div class="page p-5">
    <!-- 更新时间 -->
    <div class="updateTime font-sm text-muted flex align-center">
      2021-05-11
      <span class="ml-2">更新</span>
    </div>
    <!-- 文章标题 -->
    <div class="title my-2">01 开篇词：谷歌面试官带你100道算法题进大厂</div>
    <!-- 文章配图 -->
    <van-image class="my-3" radius="15rem" fit="contain" :src="img" />
    <!-- 文章 -->
    <div class="article">
      <!-- 文章章节 -->
      <div
        class="article-section"
        v-for="(section, index) in bookResource"
        :key="index"
        v-html="section"
      ></div>
    </div>
  </div>
  <!-- 底部购买栏 -->
  <van-config-provider :theme-vars="themeVars">
    <van-submit-bar
      :price="6800"
      :label="' '"
      :text-align="'left'"
      button-text="立即购买"
      button-type="primary"
    />
  </van-config-provider>
</template>

<script>
import img from "../assets/book-reading.jpg";
import bookResource from "../assets/book-resource";
// *vantUI提供的外部样式属性，类似于小程序的外部样式类,有部分属于全局组件样式(虽然仅限van-config-provider内)
const themeVars = {
  "submit-bar-price-color": "#3388ff",
  "submit-bar-button-width": "340rem",
};
export default {
  setup() {
    console.log(bookResource);
    return {
      themeVars,
      img,
      bookResource,
    };
  },
};
</script>
<style>
.page {
  margin-bottom: 100rem;
}
.updateTime::before {
  content: "";
  width: 2rem;
  height: 23rem;
  background: #37f;
  display: inline-block;
  border-radius: 30rem;
  margin-right: 15rem;
}
.title {
  font-size: 55rem;
  line-height: 1.4;
}
/**
针对v-html的样式类不起作用的解决方案：
1、scoped属性导致css仅对当前组件生效（用css3的属性选择器+生成的随机属性实现的），而html绑定渲染出的内容可以理解为是子组件的内容，子组件不会被加上对应的属性，所以不会应用css.解决的话把scoped属性去掉就行了
2、而如果在组件中使用了v-html，要为news.dec中的标签添加CSS样式，我们需要在写样式的时候添加>>>：
*/
/* >>> p{} */
.article-section-content {
  font-size: 32rem;
  line-height: 1.9;
  font-weight: 352;
  /* 去查这个什么意思 */
  word-break: break-all;
  color: #2b333b;
  /* 文本空格 */
  letter-spacing: 1.1px;
}
.article-section-h {
  font-size: 45rem;
  font-weight: 340;
}
</style>
<template>
  <div class="page p-5">
    <!-- 更新时间 -->
    <div class="updateTime font-sm text-muted">
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
      <div class="article-section">
        <!-- 文章正文 -->
        <p class="article-section-content">
          各位小伙伴，大家好。我是Google 的资深工程师 &
          面试官，今天想跟大家聊一聊应聘技术岗的一些事，包括一点经验技巧，以及我整理出的必问必考的算法问题。根据经验，我精选了100道算法题目，希望大家能吃透、理解。我的想法是题目要刷，但不在多而在精，融汇贯通最好。
          <br />
          我想学习本课程的大多数小伙伴，都是有计划进军大厂，想在某大厂发光发热的热血少年。而我在加入
          Google
          之前，也曾仅仅是某外包公司的合同工，有幸的是后来就职于某著名电商平台。从外包公司到Google,
          除了技术上要跟紧时代,
          算法基础是不能落下的。所以，今天重点来给大家讲讲怎么刷算法题，希望可以通过这个专栏，将我的心得与大家分享一二。
          <br />
          现在，先要与各位小伙伴一起厘清思路，从宏观层面总览本课程的目标、计划、重难点等。希望通过对本专栏的学习，能为大家的面带来帮助。
        </p>
      </div>
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
// *vantUI提供的外部样式属性，类似于小程序的外部样式类,有部分属于全局组件样式(虽然仅限van-config-provider内)
const themeVars = {
  "submit-bar-price-color": "#3388ff",
  "submit-bar-button-width": "340rem",
};
export default {
  setup() {
    return {
      themeVars,
      img,
    };
  },
};
</script>
<style scoped>
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
</style>
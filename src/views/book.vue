<!-- 专栏详情  -->
<template>
  <van-config-provider :theme-vars="themeVars">
    <!-- 详情头部 -->
    <!-- 添加class|style|id都会丢到组件的最外层 -->
    <van-card id="book-card">
      <template #title>
        <!-- 本页内的class应该写在最前面 -->
        <div class="card-title font-weight-bold pb-2">
          {{ headers.title }}
        </div>
      </template>
      <!-- 仔细检查发现.van-card__thumb宽度是决定了size的,所以才解决了问题
            如果要使用样式穿透，最好了解一下目标组件的属性对样式的影响
         -->
      <template #thumb>
        <van-image
          style="width: 100%; height: 100%"
          :src="headers.img"
          fit="contain"
        />
      </template>
      <template #desc>
        <div class="border-top py-2">
          <div class="card-desc p-1 mb-1 rounded text-muted">
            {{ headers.desc }}
          </div>
          <div class="p-1 font-sm text-muted flex align-center">
            <van-image
              class="mr-2"
              round
              width="40rem"
              height="40rem"
              :src="headers.author.avatar"
            />
            {{ headers.author.name }}·{{ headers.author.identity }}
          </div>
        </div>
      </template>
      <template #footer>
        <div class="text-left font-sm text-light-muted py-3 flex align-center">
          共计{{ headers.totalPart }}节 · 已更新{{ headers.latestPart }}节 ·
          {{ headers.subscribes }}人已订阅
          <span class="ml-auto"
            >收藏<span
              ><van-icon
                :name="headers.isFav ? 'like' : 'like-o'"
                :color="headers.isFav ? 'red' : ''" /></span
          ></span>
        </div>
      </template>
    </van-card>
    <van-tabs
      id="tabs"
      v-model:active="activeName"
      :line-width="'20rem'"
      title-active-color="#3388ff"
    >
      <van-tab title="详情" name="a">
        <div class="mt-1 px-5">
          <div class="font-md font-weight-bold py-2">课程亮点：</div>
          <ul id="feats" class="pl-3">
            <li class="font">内容全面，涵盖初中级前端进阶必备知识</li>
            <li class="font">掌握分布式高可用、高并发、分布式设计精髓</li>
            <li class="font">大厂架构师自身HR、带你了解面试套路</li>
            <li class="font">内容全面，涵盖初中级前端进阶必备知识</li>
          </ul>
        </div>
        <div class="mt-2 px-5">
          <div class="font-md font-weight-bold py-2">课程简介：</div>
          <div class="body-detail-intro font">
            如果你也有过盲目刷题的经历，就会懂，没有明确目标的努力是有多么地费力！固然也有人靠题海战术成功上岸，但如果有个靠谱的捷径
          </div>
        </div>
        <div class="mt-2 px-5">
          <div class="font-md font-weight-bold py-2">适合人群</div>
          <ul id="customers" class="pl-3">
            <li class="font">想要学习前端的在校学生</li>
            <li class="font">不想要学习前端的在校学生</li>
          </ul>
        </div>
        <div class="mt-2 px-5">
          <div class="font-md font-weight-bold py-2">购买须知：</div>
          <ol id="tips" class="pl-3">
            <li class="font" type="1">
              本专栏为图文形式内容服务，共计 32 小节
            </li>
            <li class="font" type="1">
              本专栏为图文形式内容服务，共计 32 小节
            </li>
          </ol>
        </div>
      </van-tab>
      <van-tab name="b">
        <template #title>
          <div>
            <div>目录</div>
            <div class="tab-tag__center">
              <van-tag round type="primary">试读</van-tag>
            </div>
          </div>
        </template>
        <div class="catalogue-tip my-3 flex align-center font-sm text-muted">
          <span class="font-lg text-blue ml-5 font-weight-bold">0&nbsp;/</span>
          <span class="font text-blue font-weight-bold">&nbsp;2</span>
          <span class="ml-2"
            >登录后可任选
            <span class="font-lg text-blue font-weight-bold">2</span>
            个小节免费阅读
          </span>
        </div>
        <div class="zhangs p-5 pt-0">
          <div
            v-for="zhang in body.catalogue.zhangs"
            :key="zhang.index"
            class="zhang"
          >
            <h2 class="zhang-title text-blue mb-3">{{ zhang.zhangName }}</h2>
            <div class="jies-wrapper p-2 rounded">
              <div
                class="jie mb-2"
                v-for="jie in zhang.jies"
                :key="jie.index"
                @click="toBookReading"
              >
                <div class="jie-title font text-muted">
                  {{ jie.title }}
                </div>
                <div
                  class="
                    border-bottom
                    text-left
                    font-sm
                    text-light-muted
                    py-2
                    flex
                    align-center
                  "
                >
                  <span>2021-05</span>
                  <span class="ml-4"
                    ><span><van-icon name="user-o" /></span> 1291</span
                  >
                  <span class="ml-auto">
                    <van-tag plain round type="primary" size="medium"
                      >学习</van-tag
                    >
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab name="c">
        <template #title>
          <div>
            <div>留言</div>
            <div class="tab-tag__right">
              <van-tag round type="primary">0</van-tag>
            </div>
          </div>
        </template>
      </van-tab>
    </van-tabs>

    <!-- 底部购买栏 -->
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
import { get } from "vant/lib/utils";
import { useRouter } from "vue-router";
// *vantUI提供的外部样式属性，类似于小程序的外部样式类,有部分属于全局组件样式(虽然仅限van-config-provider内)
const themeVars = {
  "submit-bar-price-color": "#3388ff",
  "submit-bar-button-width": "340rem",
  "card-padding": "50rem 50rem 10rem 50rem",
  "card-font-size": "30rem",
  "card-background-color": "none",
  "card-thumb-size": "230rem",
  "tabs-bottom-bar-color": "#37F",
};
// 模拟从后台拿到数据
// 非响应式对象就不要使用ref和reactive了
const bookDetailEffect = () => {
  // 还会有一些异步方法,怕踩坑可以不用写async,尝试写then吧
  let bookDetail = {
    headers: {
      img: "http://lencent.top/public/lilong/cover3.png",
      title: "解锁前端面试体系核心攻略32讲义",
      desc: "拉开你与普通面试者的差距",
      author: {
        avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
        name: "瑾瑜",
        identity: "腾讯前端工程师 ",
      },
      isFav: true,
      subscribes: 1011,
      totalPart: 30,
      latestPart: 29,
    },
    body: {
      detail: {},
      // 目录
      catalogue: {
        zhangs: [
          {
            index: 0,
            zhangName: "做好准备（2节）",
            totalJie: 2,
            jies: [
              { index: 0, title: "01 开篇词：谷歌面试官带你100道算法题进大厂" },
              {
                index: 1,
                title: "02 基础知识讲解 —— 一定要会的算法复杂度分析",
              },
            ],
          },
          {
            index: 1,
            zhangName: "做好准备（2节）",
            totalJie: 2,
            jies: [
              { index: 0, title: "01 开篇词：谷歌面试官带你100道算法题进大厂" },
              {
                index: 1,
                title: "02 基础知识讲解 —— 一定要会的算法复杂度分析",
              },
            ],
          },
        ],
      },
      comments: {},
    },
    footer: {
      price: 68,
      isBought: false,
    },
  };
  const getBookDetail = () => bookDetail;
  return { getBookDetail };
};

// 定义从后台获取专栏详情的方法
export default {
  // 通过setup函数的参数可以获得vue的许多相关api
  setup() {
    const { getBookDetail } = bookDetailEffect();
    // 像这种vue相关的方法，可以在外面定义，但必须在内部调用
    const router = useRouter();
    // 跳转方法
    const toBookReading = () => {
      router.push({ name: "BookReading" });
    };
    return {
      themeVars,
      headers: getBookDetail().headers,
      body: getBookDetail().body,
      toBookReading,
    };
  },
};
</script>
<style>
/* 关闭了scope,注意使用精确的css选择器 */
/* 自己写的html代码块就用class */
/* 样式类的命名遵循一定的规范 尽量不再使用行内样式了 */
.card-title {
  font-size: 35rem;
  line-height: 1.5;
}
.card-desc {
  background-color: rgba(0, 0, 0, 0.03);
  font-size: 28rem !important;
}
.tab-tag__center {
  position: absolute;
  right: 0;
  top: 26%;
}
.tab-tag__right {
  position: absolute;
  right: 18%;
  top: 26%;
}
.body-detail-intro {
  line-height: 2;
}
.catalogue-tip {
  background: rgba(51, 119, 255, 0.08);
  height: 100rem;
}
.zhang-title {
  font-size: 33rem;
}
.zhang-title::before {
  content: "";
  width: 5rem;
  height: 28rem;
  background: #37f;
  display: inline-block;
  border-radius: 30rem;
  margin-right: 15rem;
}
.jies-wrapper {
  background-color: rgba(0, 0, 0, 0.03);
}
/* 这两种选择器很明显不一样 */
/* 选择每个.jie元素是其父级的最后一个.jie元素，效果拔群!!! */
/* 选择每个.jie元素是其父级的最后一个子级。如果这个.jie元素不是最后的子级就不起作用,效果拔群!!! */
.jie:last-child {
  margin-bottom: 0;
}
.jie:last-of-type {
  margin-bottom: 0;
}
.jie-title {
  line-height: 1.3;
}
/* 外来组件就专门写id赋值启动id选择器 */
/* 以下样式类属于vantUI提供的组件的样式,如需穿透,必须取消scope或者将UI组件二次封装 或者采用选择器精确选择以免影响到其他页面的样式 */
/* 实在麻烦就干脆在本页面根元素div.class进行后代选择 */
/* 使用id选择器选择了元素之后再选择子代和后代,尝试自由组合选择器吧*/
#book-card {
  background: url("http://lencent.top/public/lilong/card-bg.png");
  background-position: center;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: cover;
}
#book-card a.van-card__thumb {
  height: 100% !important;
  margin-right: 30rem;
}
#book-card img.van-image__img {
  box-shadow: 0 2px 4px 0 rgba(43, 51, 59, 0.1),
    0 4px 8px 0 rgba(43, 51, 59, 0.1), 0 8px 16px 0 rgba(43, 51, 59, 0.1),
    0 12px 24px 0 rgba(43, 51, 59, 0.1);
}
#tabs {
  margin-bottom: 100rem;
}
#tabs div.van-tab {
  position: relative;
}
#tabs div.van-tabs__nav {
  padding-left: 80rem !important;
  padding-right: 80rem !important;
}
/* div.font{}
  选择所有包含font样式类的div元素设置属性
*/
/* div.maincontent a:link {color:blue;}
  选择所有包含maincontent样式类的div元素的a元素的link状态的属性
*/

/**
元素选择器li
这样吧，以后子代选择器使用id或者元素
需要采用选择器精确选择以免影响到其他页面的样式 
通常情况下,非引入外界的组件应该尽量用class进行标记和后代子代的选择,但是也允许自由发挥
自己写的元素应该用class标记的
这是子元素选择器 不要用>>>————————要用>
还有兄弟元素选择器，第几个元素选择器，第几个特定的元素选择器 我靠，好丰富啊
子代选择器的子代不能使用div.class进行选择???还是父元素不能用div.class
*/
#feats,
#customers {
  line-height: 1.6 !important;
}
#feats,
#customers > li {
  list-style-type: disc !important;
  line-height: 2 !important;
}
#tips > li {
  list-style-type: decimal !important;
  line-height: 2 !important;
}
</style>
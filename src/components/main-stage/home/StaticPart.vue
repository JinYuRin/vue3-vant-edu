<template>
  <van-config-provider :theme-vars="themeVars" style="padding-bottom: 110rem">
    <!-- 搜索栏 -->
    <van-search
      shape="round"
      v-model="value"
      placeholder="vue · react · node.js"
    />
    <!-- 轮播图 -->
    <div class="px-2 pb-2">
      <van-swipe class="rounded" :height="140" :autoplay="3000" lazy-render>
        <van-swipe-item
          style="height: 100%"
          v-for="image in swiperList"
          :key="image"
        >
          <van-image style="height: 100%" :src="image.src" fit="cover" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 中央广告位 -->
    <div class="p-2 flex align-center justify-between" style="height: 170rem">
      <div
        class="flex flex-column flex-1 mr-1 p-2 rounded-lg"
        style="height: 100%; background-color: #fef6f6"
      >
        <div class="font-md font-weight-bold mb-1">体系课</div>
        <div class="font-sm" style="color: red">全方位培养岗位胜任力</div>
        <div
          class="
            font-sm
            mt-auto
            flex
            align-center
            justify-between
            text-light-muted
          "
        >
          <ul>
            <li style="line-height: 1.5">· 系统培养</li>
            <li style="line-height: 1.5">· 陪伴服务</li>
          </ul>
          <img
            style="width: 75rem; height: 75rem"
            src="../../../assets/logo1.png"
          />
        </div>
      </div>
      <div
        class="flex flex-column flex-1 ml-1 p-2 rounded-lg"
        style="height: 100%; background-color: #fffaf2"
      >
        <!-- color="" -->
        <div class="font-md font-weight-bold mb-1">实战课</div>
        <div class="font-sm" style="color: orange">快速上手提升开发技能</div>
        <div
          class="
            font-sm
            mt-auto
            flex
            align-center
            justify-between
            text-light-muted
          "
        >
          <ul>
            <li style="line-height: 1.5">· 真实项目</li>
            <li style="line-height: 1.5">· 以战代学</li>
          </ul>
          <img
            style="width: 75rem; height: 75rem"
            src="../../../assets/logo2.png"
          />
        </div>
      </div>
    </div>
    <!--新上好课 -->
    <div class="text-light-muted text-center font-md mt-4">*新上好课*</div>
    <van-card
      style="margin-left: -30rem"
      v-for="i in 4"
      :key="i"
      class="position-relative"
      price="348"
      title="2021年必学 2小时带你极速入门CSS"
    >
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
  </van-config-provider>
</template>

<script>
// 样式变量
const themeVars = {
  buttonPrimaryBorderColor: "#07c160",
  buttonPrimaryBackgroundColor: "#07c160",
  cardPriceColor: "red",
  "card-background-color": "white",
  "card-font-size": "32rem",
  "card-title-line-height": "1.1",
  "card-thumb-size": "",
  // vanCardTitleLineHeight: "20px",
};
// banner轮播图
const swiperList = [
  {
    id: 0,
    src: "http://lencent.top/public/lilong/1.png",
  },
  {
    id: 1,
    src: "http://lencent.top/public/lilong/2.png",
  },
  {
    id: 2,
    src: "http://lencent.top/public/lilong/3.png",
  },
  {
    id: 3,
    src: "http://lencent.top/public/lilong/4.png",
  },
  {
    id: 4,
    src: "http://lencent.top/public/lilong/5.png",
  },
  {
    id: 5,
    src: "http://lencent.top/public/lilong/6.png",
  },
];
export default {
  name: "StaticPart",
  // 这是不需要适用响应式对象的场景
  setup() {
    return { swiperList, themeVars };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/viriables";
@import "@/style/mixins";

.position {
  padding: 0.16rem 0;
  margin-right: 0.24rem;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  /*overflow: hidden;*/
  /*!*内容溢出时处理方案 hidden 隐藏 scroll滚动，但是文字仍然会换行*/
  /*  因为并没有设定高度，所以自动换行，高度由内容决定*/
  /**!*/
  /*white-space: nowrap;*/
  /*!*white-space: nowrap拒绝换行，导致height被限制了所以overflow: hidden才显效*!*/
  /*text-overflow: ellipsis;*/
  /*!*ellipsis文字溢出的策略给省略号*/
  /*clip修剪文本或者String给定字符串代替*/
  /**!*/
  /*px优先级可能大于rem所以最好统一使用rem，
  同层样式类优先级不确定，要用.position__icon
  而不是&__icon{}
  编译成.position .position__icon优先级更高
  */
  .position__icon {
    position: relative;
    /*<!--top: -0.01rem;-->*/
    font-size: 0.2rem;
  }

  .position__notice {
    /*文字会重叠图标是因为这个已经脱离文档流了*/
    position: absolute;
    float: right;
    top: 0.17rem;
    right: 0.18rem;
    font-size: 0.2rem;
  }
}

.search {
  margin-bottom: 0.12rem;
  padding: 0 0.25rem;
  line-height: 0.32rem;
  background: #f5f5f5;
  border-radius: 0.16rem;
  color: #b7b7b7;

  &__icon {
    display: inline-block;
    //为什么加inline-block,和block的区别?
    /*因为span作为行内元素如果要调整边距必须拥有块级元素的特征才行*/
    margin-right: 0.1rem;
    font-size: 0.16rem;
  }

  &__text {
    display: inline-block;
    font-size: 0.14rem;
  }
}

.banner {
  height: 0;
  overflow: hidden;
  //margin: 0 .2rem;
  padding-bottom: 0.86rem;

  .banner__img {
    width: 3.39rem;
    height: 0.86rem;
  }
}

.icons {
  margin: 0.08rem 0;
  display: flex;
  flex-wrap: wrap;
  //justify-content: center;
  justify-items: center;

  &__item {
    //height: .46rem;
    //width: .48rem;
    width: 20%; //直接利用比例来限定就行了
    padding: 0.1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    //align-items应该是内容内部的水平还是整体的水平？去看阮一峰的课程
    &__img {
      width: 0.4rem;
      height: 0.4rem;
    }

    &__desc {
      //text-align: center;我采用了flex布局所以可以不用
      margin: 0.07rem 0 0 0;
      color: $content-fontcolor;
    }
  }
}

.gap {
  margin: 0.12rem -0.18rem;
  height: 0.1rem;
  //background可以是颜色也可以是图片
  background: #f1f1f1;
}
</style>

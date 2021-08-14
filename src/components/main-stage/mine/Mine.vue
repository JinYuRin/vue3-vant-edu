<!--  -->
<template>
  <div class="page bg-light px-4 py-5">
    <div class="header flex align-center">
      <van-image
        round
        width="130rem"
        height="130rem"
        src="http://lencent.top/public/lilong/avatar.jpg"
      />
      <div class="ml-5 h-100 flex flex-column">
        <div class="font-md my-2">就是瑾瑜啊</div>
        <div class="font-sm text-muted">学习时长217小时</div>
      </div>
    </div>
    <div class="flex align-center justify-between py-5 px-5 font-sm text-muted">
      <div>粉丝&nbsp;0</div>
      <div>关注&nbsp;1</div>
      <div>积分&nbsp;9</div>
    </div>
    <van-config-provider id="function-ports" :theme-vars="themeVars"
      ><van-cell-group :inset="true">
        <van-cell
          title="购物车"
          icon="shopping-cart-o"
          is-link
          arrow-direction
        />
      </van-cell-group>
      <van-cell-group :inset="true" class="mt-3">
        <van-cell icon="orders-o" is-link arrow-direction title="我的订单" />
        <van-cell icon="gold-coin-o" is-link arrow-direction title="我的余额" />
        <van-cell icon="exchange" is-link arrow-direction title="电子兑换码" />
        <van-cell icon="coupon-o" is-link arrow-direction title="我的优惠券" />
        <van-cell
          id="myGroup"
          icon="friends-o"
          is-link
          arrow-direction
          title="我的拼团"
        />
      </van-cell-group>
      <van-cell-group :inset="true" class="mt-3">
        <van-cell icon="info-o" is-link arrow-direction title="意见反馈" />
        <van-cell icon="question-o" is-link arrow-direction title="常见问题" />
        <van-cell icon="setting-o" is-link arrow-direction title="设置" />
      </van-cell-group>
    </van-config-provider>
  </div>
</template>

<script>
const themeVars = {
  "cell-group-inset-padding": "0 0",
  "cell-active-color": "none",
  // vanCardTitleLineHeight: "20px",
};
export default {
  setup() {
    return {
      themeVars,
    };
  },
};
</script>
<style>
#function-ports .van-cell__left-icon {
  margin-right: 20rem;
}
/* 直接抓到某个伪类的icon进行Y轴翻转 */
#myGroup .van-icon-friends-o::before {
  transform: rotateY(180deg);
}
.page {
  /* height: 80vh; */
  min-height: 90vh;
}
.header {
  height: 130rem;
}
</style>
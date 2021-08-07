<template>
  <div class="cover">
    <!-- 如果要在这个cover图片上写字的话，比较好的做法是设置为背景而不是放img -->
    <van-image class="cover-img w-100" fit="cover" :src="img" />
  </div>
</template>

<script>
import img from "../assets/video-cover.jpg";
export default {
  setup() {
    return {
      img,
    };
  },
};
</script>
<style scoped>
.cover-img {
  height: 250rem;
}
.cover-img:after {
  display: block;
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  /* height: 2.98666667rem; */
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
}
</style>
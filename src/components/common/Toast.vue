<template>
  <div class="toast">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: ['message']//  还可以设置默认值,具体语法再查
}
</script>

<style lang="scss" scoped>
/*@import "@/style/viriables.scss";*/
@import "@/style/mixins.scss";

.toast {
  @include centerInWindow;
  padding: .1rem .1rem;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  font-size: 0.14rem;
  border-radius: .1rem;
}
</style>

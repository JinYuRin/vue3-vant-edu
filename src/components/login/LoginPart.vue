<template>
  <div class="loginPart">
    <!--    他妈的子路由不加div不给用-->
    <button @click="handleLoginClick" class="wrapper__login-button">登录</button>
    <!--    不存在login的div，而是直接login-button-->
    <div class="wrapper__links">
      <span @click="handleToRegister" class="wrapper__links__link">立即注册</span>
      <span class="wrapper__links__link linkFence">|</span>
      <span class="wrapper__links__link">忘记密码</span>
    </div>
  </div>
</template>

<script>
const linkRelativeEffect = (emit) => {
  const handleLoginClick = () => {
    emit('handleLogin')
  }
  const handleToRegister = () => {
    emit('handleToRegister')
  }
  return {
    handleLoginClick,
    handleToRegister
  }
}
export default {
  name: 'LoginPart',
  setup (props, context) {
    const { emit } = context
    const {
      handleLoginClick,
      handleToRegister
    } = linkRelativeEffect(emit)
    // attrs是non-props还有一个slots插槽,computed和watch要作为函数来引入
    // console.log(context)
    return {
      handleLoginClick,
      handleToRegister
    }
  }
}
</script>

<style lang="scss" scoped>
.loginPart {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wrapper__login-button {
  border: none;
  /*去除border边界*/
  margin-top: .32rem;
  margin-bottom: .16rem;
  background: #0091FF;
  box-shadow: 0 .04rem .08rem 0;
  /*增加阴影*/
  border-radius: .04rem;
  /*增加圆角*/
  width: 2.95rem;
  height: .48rem;
  font-size: .16rem;
  color: #FFFFFF;
  line-height: .24rem;
  /*text-align: center;*/
  /*  这个行高在这里影响不大*/
}

.wrapper__links {
  &__link {
    color: #000000;
    opacity: 0.5;
    font-size: .14rem;
  }

  .linkFence {
    font-size: .12rem;
    margin: 0 .12rem;
  }
}
</style>

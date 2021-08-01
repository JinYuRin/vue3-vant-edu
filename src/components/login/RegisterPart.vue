<template>
  <div class="registerPart">
    <div class="wrapper__input secondInput">
      <input class="wrapper__input__content"
             autocomplete="new-password"
             type="password" placeholder="确认密码">
    </div>
    <button @click="handleRegisterClick" class="wrapper__register-button">注册</button>
    <div class="wrapper__links">
      <span @click="handleToLogin" class="wrapper__links__link">已有账号去登陆</span>
    </div>
  </div>
</template>

<script>
const linkRelativeEffect = (emit) => {
  const handleRegisterClick = () => {
    emit('handleRegister')
  }
  const handleToLogin = () => {
    emit('handleToLogin')
  }
  return {
    handleRegisterClick,
    handleToLogin
  }
}
export default {
  name: 'RegisterPart',
  setup (props, context) {
    const { emit } = context
    const {
      handleRegisterClick,
      handleToLogin
    } = linkRelativeEffect(emit)
    // attrs是non-props还有一个slots插槽,computed和watch要作为函数来引入
    // console.log(context)
    return {
      handleRegisterClick,
      handleToLogin
    }
  }
}
</script>

<style lang="scss" scoped>
.registerPart {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wrapper__input {
  border: .02rem solid rgba(0, 0, 0, 0.10);
  /*rgba的参数最后一位是透明度*/
  border-radius: .04rem;
  margin-top: .4rem;

  &__content {
    box-sizing: border-box;
    width: 2.95rem;
    height: .48rem;
    padding: .12rem .16rem;
    border: none;
    font-size: .16rem;
    color: #000000;

    &::placeholder {
      /*神仙操作，他妈还能控制元素的属性所展示内容的样式*/
      color: rgba(0, 0, 0, 0.50);
    }
  }
}

.secondInput {
  margin-top: .12rem;
}

.wrapper__register-button {
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
}

</style>

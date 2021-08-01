<template>
  <!--本页面作为保留啊 -->
  <div class="wrapper">
    <img class="wrapper__icon" :src="iconUrl"/>
    <div class="wrapper__input">
      <input class="wrapper__input__content" type="text" placeholder="请输入手机号"/>
    </div>
    <div class="wrapper__input secondInput">
      <input class="wrapper__input__content" type="password" placeholder="请输入密码">
    </div>
    <div class="wrapper__input secondInput">
      <input class="wrapper__input__content" type="password" placeholder="确认密码">
    </div>
    <button @click="handleRegister" class="wrapper__login-button">注册</button>
    <div class="wrapper__links">
      <span @click="handleLogin" class="wrapper__links__link">已有账号去登陆</span>
    </div>
  </div>
</template>

<script>
import iconUrl from '@/assets/编组@2x.png'
// import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'Register',
  setup () {
    // const store = useStore()
    const router = useRouter()
    //  红色的是Dom内置的对象
    // console.log(useStore())
    const handleRegister = () => {
      alert('注册成功请登录')
      router.push({ name: 'Login' })
    }
    const handleLogin = () => {
      router.push({ name: 'Login' })
    }
    return {
      iconUrl,
      handleRegister,
      handleLogin
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  /*background: #000;*/
  position: absolute;
  top: 1.4rem;
  left: .4rem;
  /*1.93-0.52*/
  bottom: 1.41rem;
  right: .4rem;

  &__icon {
    width: .66rem;
    height: .66rem;
  }

  &__input {
    border: 1px solid rgba(0, 0, 0, 0.10);
    /*rgba的参数最后一位是透明度*/
    border-radius: 6px;
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

  &__login-button {
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

  &__links {
    &__link {
      color: #000000;
      opacity: 0.5;
      font-size: .14rem;
    }
  }
}
</style>

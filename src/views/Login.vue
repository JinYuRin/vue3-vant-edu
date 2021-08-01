<template>
  <div class="wrapper">
    <img class="wrapper__icon" :src="iconUrl"/>
    <div class="wrapper__input">
      <input v-model="loginData.username" class="wrapper__input__content" type="text" placeholder="请输入用户名"/>
    </div>
    <div class="wrapper__input secondInput">
      <input v-model="loginData.password" class="wrapper__input__content"
             autocomplete="new-password"
             type="password" placeholder="请输入密码">
    </div>
    <!--    <button @click="handleLogin" class="wrapper__login-button">登录</button>-->
    <!--    &lt;!&ndash;    不存在login的div，而是直接login-button&ndash;&gt;-->
    <!--    <div class="wrapper__links">-->
    <!--      <span @click="handleRegister" class="wrapper__links__link">立即注册</span>-->
    <!--      <span class="wrapper__links__link linkFence">|</span>-->
    <!--      <span class="wrapper__links__link">忘记密码</span>-->
    <!--    </div>-->
    <!--    <LoginPart @handleLogin="login" @handleRegister="register"/>-->
    <router-view @handleLogin="login(loginData, showToast)" @handleToRegister="toRegister"
                 @handleRegister="register(loginData, showToast)" @handleToLogin="toLogin"/>
  </div>
  <Toast :message="message" v-if="isShowToast"/>
</template>

<script>
//  import进来的都算全局变量,
import { reactive } from 'vue'
// import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
// import LoginPart from '../components/login/LoginPart'
// import axios from 'axios'
import iconUrl from '@/assets/编组@2x.png'
import config from '../config/config'
import errorsMessage from '../config/errorsMessage'
import { Http } from '../utils/http'
import { ToastEntity } from '../components/common/entity/Toast'
import Toast from '../components/common/Toast'

const { isLoginSuccessed, isRegisterSuccessed } = config
const toastMixin = ToastEntity.getToastMixin(errorsMessage.loginFailed)
// 我采用创建对象和混入的方式,也可以用在组件里export const useToastEffect导出需要的内容来使用

// 为什么直接解构赋值失败了,import的解构赋值是和普通的解构不同的,
// 你会发现引入Http的时候也是{}...
//  TODO：问题就是vue他们为什么可以import的时候完美解构赋值，他们里面什么操作
//  TODO：export declare function useRouter(): Router;???只能说TS牛逼
const linkRelativeEffect = () => {
  // 在函数内定义的是函数作用域的注意var的变量提升和可重复定义
  //  let和const不可以接触重复定义
  //  还有暂时性死区，let和const在函数作用域里的定义是锁区的
  // const { baseUrl } = config
  // const store = useStore()
  const router = useRouter()
  //  红色的是Dom内置的对象
  // console.log(useStore())
  //  登录操作
  const loginData = reactive({
    username: '',
    password: ''
  })
  const login = async (loginData, handleLoginFailed) => {
    await Http.post(
      '/user/login',
      loginData,
      isLoginSuccessed,
      // 加了括号是执行函数，从外界引入函数作为参数不需要加括号
      (result) => {
        console.log(result)
        localStorage.isLogin = true
        //  本来以为可以把登录信息写入store，但是其实关闭浏览器就会消失的、
        // vuex本来就是用来做组件之间的数据传递的，登录信息是属于整个浏览器的
        router.push({ name: 'MainStage' })
      },
      handleLoginFailed
      // () => {
      //   alert(errorsMessage.loginFailed)
      //   //  错误信息可以不用解构赋值来获取,因为带着errorsMessage的枚举类型显得清晰明了
      // }
    )
    // // localStorage.isLogon = true
    // // store.dispatch('login', '请登录')
    // try {
    //   const result = await axios.post(`${baseUrl}`, {
    //     username: '13725000134',
    //     password: '123456'
    //   })
    //   console.log(result)
    //   //  optional chain可以避免深层属性的undefined
    //   if (result?.data?.errno === 0) { //  但是如果请求根本没有response,会直接报异常,需要将异常捕捉响应出来
    //     //  来来来复习一下，if里面是块级区域，let和const有块级作用域var没有
    //     localStorage.isLogin = true
    //     router.push({ name: 'MainStage' })
    //   } else {
    //     alert('登陆失败')
    //   }
    // } catch (e) {
    //   alert('请求失败')
    // }
    // axios.post(`${baseUrl}/user/login`, {
    //   username: '13725000134',
    //   password: '123456'
    // }).then(() => {
    //   localStorage.isLogin = true
    //   router.push({ name: 'MainStage' })
    // }).catch(() => {
    //   alert('登陆失败')
    // })
    // router.push('/main-stage')
    //  多种跳转方式包括path(默认参数)和{name}
    // router.push({ name: 'MainStage' })
  }
  //  跳转到注册页面RegisterPart
  const toRegister = () => {
    router.push({ name: 'RegisterPart' })
  }
  //  注册操作需要发送请求
  const register = async (loginData, handleRegisterFailed) => {
    await Http.post(
      '/user/register',
      loginData,
      isRegisterSuccessed,
      // 加了括号是执行函数，从外界引入函数作为参数不需要加括号
      (result) => {
        console.log(result)
        alert('注册成功请登录')
        //  本来以为可以把登录信息写入store，但是其实关闭浏览器就会消失的、
        // vuex本来就是用来做组件之间的数据传递的，登录信息是属于整个浏览器的
        router.push({ name: 'LoginPart' })
      },
      handleRegisterFailed
      // () => {
      //   alert(errorsMessage.loginFailed)
      //   //  错误信息可以不用解构赋值来获取,因为带着errorsMessage的枚举类型显得清晰明了
      // }
    )
    // // localStorage.isLogon = true
    // // store.dispatch('login', '请登录')
    // try {
    //   const result = await axios.post(`${baseUrl}`, {
    //     username: '13725000134',
    //     password: '123456'
    //   })
    //   console.log(result)
    //   //  optional chain可以避免深层属性的undefined
    //   if (result?.data?.errno === 0) { //  但是如果请求根本没有response,会直接报异常,需要将异常捕捉响应出来
    //     //  来来来复习一下，if里面是块级区域，let和const有块级作用域var没有
    //     localStorage.isLogin = true
    //     router.push({ name: 'MainStage' })
    //   } else {
    //     alert('登陆失败')
    //   }
    // } catch (e) {
    //   alert('请求失败')
    // }
    // axios.post(`${baseUrl}/user/login`, {
    //   username: '13725000134',
    //   password: '123456'
    // }).then(() => {
    //   localStorage.isLogin = true
    //   router.push({ name: 'MainStage' })
    // }).catch(() => {
    //   alert('登陆失败')
    // })
    // router.push('/main-stage')
    //  多种跳转方式包括path(默认参数)和{name}
    // router.push({ name: 'MainStage' })
  }
  //  跳转到登录页面
  const toLogin = () => {
    router.push({ name: 'LoginPart' })
  }
  return {
    // store,
    // router,
    loginData,
    login,
    toRegister,
    register,
    toLogin
  }
}
export default {
  name: 'Login',
  components: { Toast },
  mixins: [toastMixin],
  setup () {
    // const loginData = reactive({
    //   username: '13725000134',
    //   password: '123456'
    // })
    // const username = ref('13580742232')
    const { loginData, login, toRegister, register, toLogin } = linkRelativeEffect()
    return {
      // username,
      // loginData,
      iconUrl,
      // store,
      // router,
      loginData,
      login,
      toRegister,
      register,
      toLogin
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
  bottom: 1.41rem;
  right: .4rem;

  &__icon {
    width: .66rem;
    height: .66rem;
  }

  &__input {
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

  /*&__login-button {*/
  /*  border: none;*/
  /*  !*去除border边界*!*/
  /*  margin-top: .32rem;*/
  /*  margin-bottom: .16rem;*/
  /*  background: #0091FF;*/
  /*  box-shadow: 0 .04rem .08rem 0;*/
  /*  !*增加阴影*!*/
  /*  border-radius: .04rem;*/
  /*  !*增加圆角*!*/
  /*  width: 2.95rem;*/
  /*  height: .48rem;*/
  /*  font-size: .16rem;*/
  /*  color: #FFFFFF;*/
  /*  line-height: .24rem;*/
  /*  !*text-align: center;*!*/
  /*  !*  这个行高在这里影响不大*!*/
  /*}*/

  /*&__links {*/
  /*  &__link {*/
  /*    color: #000000;*/
  /*    opacity: 0.5;*/
  /*    font-size: .14rem;*/
  /*  }*/

  /*  .linkFence {*/
  /*    font-size: .12rem;*/
  /*    margin: 0 .12rem;*/
  /*  }*/
  /*}*/
}
</style>

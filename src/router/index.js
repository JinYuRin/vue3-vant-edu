import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Login from '../views/Login.vue'
// import Register from '../views/Register.vue'
import LoginPart from '../components/login/LoginPart'
import RegisterPart from '../components/login/RegisterPart'

const routes = [{
    path: '/login',
    name: 'Login',
    component: Login,
    children: [{
        path: '',
        name: 'LoginPart',
        component: LoginPart
      },
      { // TODO：问题就来了，直接进入子路由也会触发父路由的路由守卫吗，如果不会该怎么办
        path: 'register', // 子路由会自动补齐路由
        name: 'RegisterPart',
        component: RegisterPart
      }
    ],
    //  路由守卫直接写在这个路由对象里
    beforeEnter: (to, from, next) => {
      // console.log(to)
      const {
        isLogin
      } = localStorage
      isLogin ? next({
        name: 'MainStage'
      }) : next()
    }
  },
  // {
  //   path: '/register',
  //   name: 'Register',
  //   component: Register,
  //   //  路由守卫直接写在这个路由对象里
  //   beforeEnter: (to, from, next) => {
  //     // console.log(to)
  //     const { isLogon } = localStorage
  //     isLogon ? next({ name: 'MainStage' }) : next()
  //   }
  // },
  {
    path: '/',
    name: 'MainStage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/MainStage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//  全局的路由守卫
router.beforeEach((to, from, next) => {
  const {
    isLogin
  } = localStorage
  const {
    name
  } = to
  const entrances = ['Login', 'LoginPart', 'RegisterPart']
  // console.log(list.includes(to.name))
  // console.log(isLogon)
  console.log(name)
  console.log(entrances.includes(name))
  next()
  // entrances.includes(name) || isLogin ? next() : next({ name: 'LoginPart' })
  //  使用名字做路由时要注意了，如果不写具体路由名称的话，即使进入对的路由地址但是仍然显示不出来子路由的组件
  // 比如这里用Login的话，虽然路由地址是/login,但是loginPart组件消失了啊
  // 实际跳转条件要从缓存中拿取,全局状态管理在刷新的时候会被重置的
})

export default router

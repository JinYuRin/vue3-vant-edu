import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
// vantui依赖的样式库
import 'vant/lib/index.css'
// 取消部分原生样式
import 'normalize.css'
// import './style/base.scss'
// import './style/inconfont.css'
// 主样式库
import './style/index.scss'
// 常见样式库
import './style/free.css'
// 全局通用样式库
import './style/common.css'
createApp(App).use(Vant).use(store).use(router).mount('#app')
// 设置title直接利用原生的api就可以了
document.title = '鲤龙教育'

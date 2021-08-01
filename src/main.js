import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'normalize.css'
// import './style/base.scss'
// import './style/inconfont.css'
import './style/index.scss'
import './style/free.css'
createApp(App).use(Vant).use(store).use(router).mount('#app')
// 直接利用原生的api就可以了
document.title = '鲤龙教育'

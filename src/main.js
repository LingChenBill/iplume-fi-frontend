import { createApp } from 'vue'
import App from './App.vue'

// 引入vue-router.
// import VueRouter from 'vue-router'
import router from './router/index'

import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/js/bootstrap.min.js'

// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)

app.use(router)
// app.use(VueRouter)

app.use(ElementPlus)

app.mount('#app')
// createApp(App).mount('#app')

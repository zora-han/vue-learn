// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
// import Users from './components/Users'

Vue.config.productionTip = false
Vue.use(VueRouter)

// 配置路由,对象参数固定
const router = new VueRouter({
  routes:[
    {
    path:'/',// 路由地址
    component:Home
    },
    {
    path:'/helloworld',// 路由地址
    component:Home
    },
  ]
})

// 全局注册组件
// Vue.component('users',Users )

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

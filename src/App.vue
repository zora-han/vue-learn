<!-- 1.模板：html结构 -->
<!-- 根标签有且只有一个 -->

<template>
  <div id="app">
    <app-header v-bind:title='title' v-on:titleChanged='updateTitle($event)'></app-header>
    <!-- 父给子属性传值1 -->
    <users v-bind:users='users'></users>
    <users v-bind:users='users'></users>
    <app-footer v-bind:title='title'></app-footer>
  </div>
</template>

<!-- 2.行为：处理逻辑 -->
<script>
// 局部注册组件
import Users from './components/Users'
import Header from './components/Header'
import Footer from './components/Footer'



export default {
  name: 'app',
  data(){
    return{
      title:'这是我的第一个vue脚手架项目',
      users:[
          {name:'Henry',position:'WEB开发',show:false},
          {name:'Bucky',position:'JAVA开发',show:true},
          {name:'Emily',position:'PATHON开发',show:false},
        ]
    }
  },
  methods:{
    updateTitle(title) {
      this.title=title;
    },
  },
  components:{
    'users':Users, // 不可以使用和系统标签相同的名称
    'app-header':Header,
    'app-footer':Footer
  }
}

</script>

<!-- 3.样式：解决样式 -->
<style scoped>
  h1{
    color:purple
  }
</style>

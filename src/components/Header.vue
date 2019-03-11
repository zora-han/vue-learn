<template>
  <header v-on:click="changeTitle">
      <h1>{{title1}} {{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props:{
        title:{type:String}
    },
  data(){
      return {
          title1:'Vue.js Demo'
      }
  },
  methods:{
      changeTitle:function(){
        //   this.title = 'changed'

        // 注册事件：事件名称，传值内容
        this.$emit('titleChanged','子向父组件传值');
      }
  },
//   钩子函数
//   beforeCreate:function(){
//       alert('组件实例化之前执行的函数');
//   },
//   created:function(){
//       alert('组件实例化完毕，但页面还未显示')
//   },
//   beforeMount:function(){
//       alert('组件挂载之前,页面仍未显示，但虚拟dom已经配置')
//   },
//   mounted:function(){
//       alert('组件挂载后，此方法执行后，页面显示')
//   },
//   beforeUpdate:function(){
//       alert('组件更新前，页面仍未更新，但虚拟dom已经配置')
//   },
//   updated:function(){
//       alert('组件更新后，此方法一旦执行，页面显示')
//   },
//   beforeDestroy:function(){
//       alert('组件销毁前')
//   },
//   destroyed:function(){
//       alert('组件销毁后')
//   },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header{
        background: lightgreen;
        padding:10px;

    }
    h1{
        color:#333;
        text-align: center
    }
</style>
<template>
  <div class="user">
    <h1>hello users</h1>
      <ul>
          <li v-for="user in users" v-on:click='user.show=!user.show'>
            <h2>{{user.name}}</h2>
            <h3 v-show="user.show">{{user.position}}</h3>
          </li>
      </ul> 
      <button v-on:click='deleteUser'> 删除</button>
  </div>
</template>

<!-- 
  传值：string number boolean
  引用：array object 
  
-->

<script>
export default {
  name: 'user',
  props:['users'],// 父给子属性传值1
  // 父给子属性传值2,标准写法
  props:{
    users:{
      type:Array,
      required:true
    },
  },
  data(){
      return{
          
      }
  },
  methods:{
    deleteUser:function(){
      this.users.pop();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user{
  width:100%;
  max-width: 1200px;
  margin:40px auto;
  padding:0 20px;
  box-sizing: border-box;
}
ul{
  /* 所有li摆在一行里 */
  display: flex;
  /* 所有li在容器中不会超出容器 */
  flex-wrap: wrap;
  list-style: none;
  padding:0;
}
li{
  /* 充满整行，如有一个就一个充满，如果有两个就两个充满 */
  flex-grow:1;
  flex-basis:200px;
  text-align: center;
  padding:30px;
  border: 1px solid #333;
  margin: 10px;
}
</style>

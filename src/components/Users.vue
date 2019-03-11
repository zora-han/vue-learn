<template>
  <div class="user">
    <h1>hello users</h1>
      <ul>
          <li v-for="user in users">{{user}}</li>
      </ul> 
  </div>
</template>

<script>
export default {
  name: 'user',
  data(){
      return{
          users:['Henry','Bucky','Emily']
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    color:red
  }
</style>

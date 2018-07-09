<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>主页</h2>
    <el-button @click="open">默认按钮</el-button>
    
  </div>
</template>

<script>
import request from '@/helpers/request'
// for easy testing
window.request = request;
export default {
  // name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    open(){
      this.$message('这是一条消息提示');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

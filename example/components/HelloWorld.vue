<template>
  <div class="hello">
    <div class="box1" v-move>box1</div>
    <div class="box2" v-move>box2</div>
    <div class="box3">box3</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App1111111111111111111111111111'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  position: relative;
  width: 100%;
  height: 100%;
}
.box1{
  width:200px;
  height:200px;
  background-color:rgb(65,184,139)
}
.box2{
  width:200px;
  height:200px;
  background-color:rgb(184,65,139)
}
.box3{
  width:200px;
  height:200px;
  background-color:rgb(184,139,65)
}
</style>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ToResponsitory msg="仓库入库"/>
  </div>
</template>

<script>
 
// import HelloWorld from '@/components/HelloWorld.vue'
import ToResponsitory from '@/components/ToResponsitory.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
    ToResponsitory
  }
}
</script>

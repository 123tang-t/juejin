<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Pagea/>
    <Pageb/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Pagea from '@/components/a.vue'
import Pageb from '@/components/b.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Pagea,
    Pageb
  }
}
</script>

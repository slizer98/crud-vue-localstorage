<template>
  <div id="nav">
    <Navbar />
  </div>
  <dir class="container">
    <h1>CRUD con Vue.js</h1>
  </dir>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar,
  }
}
</script>

<style>

</style>

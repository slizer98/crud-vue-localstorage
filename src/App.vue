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
import { mapActions } from 'vuex'
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar,
  },
  methods: {
    ...mapActions(['cargarLocalStorage'])
  },
  created() {
    this.cargarLocalStorage()
  },
}
</script>

<style>

</style>

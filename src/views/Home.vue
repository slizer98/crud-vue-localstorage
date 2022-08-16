<template>
  <form @submit.prevent="procesarFormulario">
    <Input :tarea="tarea" />
  </form>
  <hr>
  <ListarTareas />
</template>

<script>

import Input from '../components/Input.vue'
import { mapActions } from 'vuex'
import ListarTareas from '../components/ListarTareas.vue'
const shortid = require('shortid')


export default {
  name: 'Home',
  components: {
    Input,
    ListarTareas
},
  data() {
    return {
      tarea: {
        id: '',
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
  methods: {
    ...mapActions(['setTareas']),
    procesarFormulario() {
      console.log(this.tarea)
      if(this.tarea.nombre.trim() === '') {
        console.log('Vacio');
        return;
      }
      console.log('no esta vacio')

      // Generar id
      this.tarea.id = shortid.generate()
  

      // Enviar los datos
      this.setTareas(this.tarea)
      
      this.tarea = {
        id: '',
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
}
</script>

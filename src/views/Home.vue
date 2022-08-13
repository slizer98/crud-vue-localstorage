<template>
  <form @submit.prevent="procesarFormulario">
    <input 
      type="text"
      class="form-control my-2"
      placeholder="Ingrese su nombre"
      v-model.trim="tarea.nombre"
    >
    <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="check-1"
          v-model="tarea.categorias"     
          value="JavaScript"     
        >
        <label class="form-check-label" for="check-1">JavaScript</label>
    </div>
    <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="check-2"
          v-model="tarea.categorias"
          value="Node.js"
        >
        <label class="form-check-label" for="check-3">Node.js</label>
    </div>
    <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="check-3"
          v-model="tarea.categorias"
          value="Vue.js"
        >
        <label class="form-check-label" for="check-3">Vue.js</label>
    </div>
    <div class="mt-2">
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          v-model="tarea.estado"
          value="Urgente">
          
        <label class="form-check-label" for="inlineRadio1">Urgente</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          v-model="tarea.estado"
          value="Relax">
          
        <label class="form-check-label" for="inlineRadio2">Relax</label>
      </div>
    </div>

    <div class="mt-2">
      <input
        type="number"
        class="form-control"
        v-model.number="tarea.numero"
        placeholder="0"
        
      >
    </div>

    <button
      class="btn btn-dark btn-block mt-2"
      type="submit"
      :disabled="bloquear"
    >
      Procesar
    </button>
    
  </form>
  <hr>
  <p>{{tarea}}</p>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      tarea: {
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
  methods: {
    procesarFormulario() {
      console.log(this.tarea)
      if(this.tarea.nombre.trim() === '') {
        console.log('Vacio');
        return;
      }
      console.log('no esta vacio')
      // envian los datos
      this.tarea = {
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
  computed: {
    bloquear() {
      return this.tarea.nombre.trim() === '' ? true : false
    }
  }
}
</script>

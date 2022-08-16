import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    tareas: [],
    tarea: {
      id: '',
      nombre: '',
      categorias: [],
      estado: '',
      numero: 0
    }
  },
  mutations: {
    set(state, payload) {
      state.tareas.push(payload);
      console.log(state.tareas)
    },
    eliminar(state, payload) {
      state.tareas = state.tareas.filter(tarea => tarea.id !== payload) 
    },
    tarea(state, payload) {
      if(!state.tareas.find(tarea => tarea.id === payload)) {
        router.push('/error')
        return
      }
      state.tarea = state.tareas.find(tarea => tarea.id === payload)
    },
    update(state, payload) {
      state.tareas = state.tareas.map(tarea => tarea.id === payload.id ? payload : tarea)
      router.push('/')
    }
  },
  actions: {
    setTareas({ commit }, tarea) {
      commit('set', tarea);
    },
    deleteTareas({commit}, id) {
      commit('eliminar', id)
    },
    setTarea({commit}, id) {
      commit('tarea', id)
    },
    updateTarea({commit}, tarea) {
      commit('update', tarea)
    }
  },
  modules: {
  }
})

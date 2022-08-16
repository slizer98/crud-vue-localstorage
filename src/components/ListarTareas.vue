<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Categorias</th>
                <th scope="col">Estado</th>
                <th scope="col">Numero</th>
                <th scope="col">Accion</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in tareas" :key="item.id">
                <th scope="row">{{item.id}}</th>
                <td>{{ item.nombre }}</td>
                <td>
                    <span v-for="(categoria, index) in item.categorias" :key="index">
                        {{ item.categorias.length === index + 1 ? categoria : categoria + ', ' }}
                    </span>
                </td>
                <td>{{ item.estado }}</td>
                <td>{{ item.numero }}</td>
                <td>
                    <button class="btn btn-danger btn-sm" @click="deleteTareas(item.id)">Eliminar</button>
                    <router-link
                      class="btn btn-warning ml-2 btn-sm"
                      :to="{
                        name: 'Editar',
                        params: { id: item.id }
                      }"
                      >
                        Editar
                    </router-link>
                </td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
        </tbody>
    </table>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState(['tareas']),
    },
    methods: {
        ...mapActions(['deleteTareas'])
    },
};
</script>

<template>
    <!-- Navbar de Bootstrap 5.3 -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">VUE SERVICIOS</router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/coches">Coches</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/clientes">Clientes</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/empleados">Empleados</router-link>
                    </li>
                    <!-- DROPDOWN MENU PARA OFICIOS -->
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Oficios
                    </a>
                    <ul class="dropdown-menu" >
                        <li v-for="oficio in oficios" :key="oficio">
                            <router-link class="dropdown-item" :to="'/empleadosoficios/'+oficio">{{ oficio }}</router-link></li>

                    </ul>
                    </li>
                </ul>
                
                <!-- Espacio derecho: puedes añadir botones o formularios aquí -->
            </div>
        </div>
    </nav>
</template>

<script>
import axios from 'axios';
import Global from '@/Global';
let urlApi=Global.apiEmpleados
export default {
    name: 'MenuComponent',
    data(){
        return{
            oficios:[]
        }
    },
    mounted(){
        let request="api/empleados/oficios";
        axios.get(urlApi+request).then(response=>{
            this.oficios=response.data
        })
    }
}
</script>

<style scoped>
/* Estilos mínimos: Bootstrap maneja la mayor parte. */
.navbar-brand {
    font-weight: 600;
}
</style>
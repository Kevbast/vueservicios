<template>
  <h1>Cliente apis</h1>
    
    <label for="">Buscar por ID:</label>
    <input type="text" v-model="id">
    <button @click="buscarPorID">Buscar</button>

    <ul class="list-group" v-for="cliente in clientes" :key="cliente">
        <li class="list-group-item"><strong>ID:</strong>{{cliente.CustomerID}}  <strong>Nombre:</strong>{{ cliente.ContactName}} <strong>Empresa:</strong>{{ cliente.CompanyName}}</li>
    </ul>

    <div v-if="clienteEncontrado">
        {{ clienteEncontrado }}
    </div>
</template>

<script>
import Global from "./../Global";
import axios from "axios";

let urlCliente=Global.urlNorthwind
export default {
name:"ClientesComponent",
data(){
    return{
        clientes:[],
        clienteEncontrado:null,
        id:""
    }
},
mounted(){
    //LAS VARIBALES DECLARADAS FUERA DEL EXPORT NO UTILIZAN THIS
        axios.get(urlCliente).then(response=>{
            console.log("Leyendo servicio")
            console.log(response.data)
            this.clientes=response.data.value
        })
},
methods:{
    buscarPorID(){//EL ID ES STRING
        this.clienteEncontrado=[]
        let clienteid=this.id.toUpperCase();
        console.log(clienteid)

        let clienteEncontrado=this.clientes.find(cliente=>cliente.CustomerID==clienteid)
        console.log(clienteEncontrado)
        this.clienteEncontrado.push(clienteEncontrado)
    }
}
}
</script>

<style>

</style>
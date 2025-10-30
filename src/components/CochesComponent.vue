<template>
  <h1>API COCHES</h1>
  <div v-for="coche in coches" :key="coche">
      <h3>{{ coche.marca }}</h3>
      <h4><strong>{{ coche.modelo }}</strong></h4>
    <h5>{{ coche.conductor }}</h5>
    
    <br>
    <img :src="coche.imagen" style="width: 150px; height: 125px;" />
  </div>
</template>

<script>
import Global from "@/Global";
import axios from "axios";
//SI NECESITAMOS VARIABLES PARA TODO EL COMPONENT Y SUS MÉTODOS 
//SE DECLARAN AQUÍ(mounted,methods,create)
let urlApi=Global.apiCoches;
export default {
    
    name:"CochesComponent",
    data(){
        return{
            coches:[]
        }
    },
    mounted(){
        //USAMOS EL MÉTODO GET AQUÍ
        let request="webresources/coches";
        //LAS VARIBALES DECLARADAS FUERA DEL EXPORT NO UTILIZAN THIS
        axios.get(urlApi+request).then(response=>{
            console.log("Leyendo servicio")
            this.coches=response.data
        })
    }
}
</script>

<style>

</style>
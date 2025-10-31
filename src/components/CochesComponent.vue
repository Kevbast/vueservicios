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
import ServiceCoches from '@/services/ServiceCoches';
//PARA PODER UTILIZAR EL SERVICIO NECESITAMOS UNA INSTANCIA(VARIABLE/OBJETO)
//DE LA CLASE SERVICIO.
const service= new ServiceCoches();
//SI NECESITAMOS VARIABLES PARA TODO EL COMPONENT Y SUS MÉTODOS 
//SE DECLARAN AQUÍ(mounted,methods,create)
export default {
    
    name:"CochesComponent",
    data(){
        return{
            coches:[]
        }
    },
    //SI CARGAMOS LA FUNCIÓN DESDE SERVICE CON SERVICIOS APIS NOSOTROS ESPERAMOS LA PROMESA,
    // POR LO TANTO NO LLEGA SI LO PONEMOS EN MOUNTED,A NO SER QUE LO USEMOS COMO PROMESA
    mounted(){
        //cargamos la función de service aqui
        //UNA PROMESA NO ES UN MÉTODO,ES UN OBJETO,POR LO TANTO GETCOCHES ES SIN PARÉNTESIS
        service.getCoches.then(result =>{
            this.coches=result;
        })
    }
}
</script>

<style>

</style>
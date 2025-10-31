<template>
  <h1>HOME COMPONENT</h1>
  <h2 style="color: darkred;">{{ mensaje }}</h2>
</template>

<script>
import ServiceEjemplo from '@/services/ServiceEjemplo';
//PARA PODER UTILIZAR EL SERVICIO NECESITAMOS UNA INSTANCIA(VARIABLE/OBJETO)
//DE LA CLASE SERVICIO.
const service= new ServiceEjemplo();
export default {
name:"HomeComponent",
data(){
  return{
    mensaje:""
  }
},
mounted(){
  //PODEMOS CARGAR LA FUNCIÓN DENTRO DEL MOUNTED SI QUEREMOS
  this.mensaje=service.getSaludo("Kevbast");
}
}
</script>

<style>

</style>
<template>
  <h1>EMPLEADOS OFICIOS </h1>
  <h2 style="color: blueviolet;">{{ oficio }}</h2>
    <div v-if="empleados">
        <div
            class="table-responsive">
            <table class="table table-primary">
                <thead>
                    <tr>
                        <th scope="col">Id Empleado</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Oficio</th>
                        <th scope="col">Salario</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="empleado in empleados" :key="empleado">
                        <td>{{ empleado.idEmpleado }}</td>
                        <td>{{ empleado.apellido }}</td>
                        <td>{{ empleado.oficio }}</td>
                        <td>{{ empleado.salario }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios';
import Global from '@/Global';
var urlApi = Global.apiEmpleados
export default {
name:"EmpleadosOficios",
data(){
    return{
        empleados:[],
        oficio:""
    }
},
methods:{
    loadEmpleados(){
        let oficio=this.$route.params.oficio;
        let request="api/Empleados/EmpleadosOficio/"+oficio;
        axios.get(urlApi+request).then(response=>{
            console.log("Leyendo servicios")
            this.empleados=response.data
        })
    }
},

mounted(){
console.log("Param: "+ this.$route.params.oficio);
    this.oficio=this.$route.params.oficio;
    this.loadEmpleados();
},

watch:{
    '$route.params.oficio'(nextVal,oldVal){
    if(nextVal!=oldVal){
        console.log("NextVal: "+nextVal);
        console.log("OldVal:"+oldVal);
        //ACTUALIZAMOS EL VALOR DE OFICIO YA QUE LO SEGUIREMOS CAMBIANDO,AL IGAUL QUE LLAMAREMOS A LA FUNCIÓN
        this.oficio=this.$route.params.oficio;
        this.loadEmpleados();
    }
}
}

}
</script>

<style>

</style>
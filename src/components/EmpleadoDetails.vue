<template>
  <div style="width: 50%; margin: auto;">
    <h1>Empleado detalles</h1>
    <!-- AQUI ESTÁ LA FUNCIÓN DEL SELECT,EL VMODEL SE PONE EN EL SELECT Y EL :VALUE EN EL OPTION -->
    <select class="form-control" name="detalles" id="" v-model="idEmpleado" >
        <option v-for="empleado in empleados" :key="empleado" 
        :value="empleado.idEmpleado">{{ empleado.apellido }}</option>
    </select>
    <button  @click="buscarPorId" class="btn btn-info">Details</button>
    <div v-if="empleado">
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
                    <tr>
                        <td>{{ empleado.idEmpleado }}</td>
                        <td>{{ empleado.apellido }}</td>
                        <td>{{ empleado.oficio }}</td>
                        <td>{{ empleado.salario }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
  </div>
</template>

<script>
import Global from './../Global';
import axios from 'axios';

let urlApi=Global.apiEmpleados;
export default {
name:"EmpleadoDetails",
data(){
    return{
        empleados:[],
        idEmpleado:0,
        empleado:null
    }
},
mounted(){
    let request="api/Empleados";
    axios.get(urlApi+request).then(response=>{
        console.log(response.data)
        this.empleados=response.data
    })
},
methods:{
    buscarPorId(){
        let request="api/empleados/"+this.idEmpleado;
        axios.get(urlApi+request).then(response=>{
            console.log(response.data)
            this.empleado=response.data
        })
    }
}
}
</script>

<style>

</style>
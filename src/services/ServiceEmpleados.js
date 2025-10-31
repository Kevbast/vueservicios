import axios from "axios";
import Global from "@/Global";
var urlApi=Global.apiEmpleados;
 export default class ServiceEmpleados{

    getEmpleados(){
        return new Promise(function(resolve){
            let empleados=[];
            let request="api/Empleados";
            axios.get(urlApi+request).then(response=>{
                console.log(response.data)
                empleados=response.data
                resolve(empleados);
            })
        })
    }

    findEmpleado(idEmpleado){
        return new Promise(function(resolve){
            let empleado=[];
            let request="api/empleados/"+idEmpleado;
            axios.get(urlApi+request).then(response=>{
                console.log(response.data)
                empleado=response.data
                resolve(empleado);
            })
        })
    }

    getEmpleadosOficios(){
        return new Promise(function(resolve){
            let oficios=[];
            let request="api/Empleados/oficios";
            axios.get(urlApi+request).then(response=>{
                console.log(response.data)
                oficios=response.data
                resolve(oficios);
            })
        })
    }

    findEmpleadoOficio(oficio){
        return new Promise(function(resolve){
            let empleado=[];
            let request="api/Empleados/EmpleadosOficio/"+oficio;
            axios.get(urlApi+request).then(response=>{
                console.log(response.data)
                empleado=response.data
                resolve(empleado);
            })
        })
    }


 }
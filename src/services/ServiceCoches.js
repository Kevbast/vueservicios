import axios from "axios";
import Global from "@/Global";
var urlApi=Global.apiCoches;
export default class ServiceCoches {

    getCoches(){

        return new Promise(function(resolve){
        let coches=[];
        //USAMOS EL MÉTODO GET AQUÍ
        let request="webresources/coches";
        //LAS VARIBALES DECLARADAS FUERA DEL EXPORT NO UTILIZAN THIS
        axios.get(urlApi+request).then(response=>{
            console.log("Leyendo servicio")
            coches=response.data
            console.log(coches);
            //RESOLVE VA DENTRO DEL AXIOS
            resolve(coches);
        })     
    })
    }//Final getCoches()
    

}

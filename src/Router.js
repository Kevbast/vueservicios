import { createRouter, createWebHistory } from "vue-router"; 
import HomeComponent from "./components/HomeComponent.vue";
import CochesComponent from "./components/CochesComponent.vue";
import ClientesComponent from "./components/ClientesComponent.vue";
import EmpleadoDetails from "./components/EmpleadoDetails.vue";

const myRoutes=[
    {path:"/",component: HomeComponent},
    {path:"/coches",component: CochesComponent},
    {path:"/clientes",component: ClientesComponent},
    {path:"/empleados",component: EmpleadoDetails},
]
const router = createRouter({ 
history:createWebHistory(),
routes:myRoutes
}) 
export default router;
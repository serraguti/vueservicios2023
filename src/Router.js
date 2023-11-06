import {createRouter, createWebHistory} from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import CochesComponent from './components/CochesComponent.vue';
import EmpleadosDetalle from './components/EmpleadosDetalle.vue';
import EmpleadosOficios from './components/EmpleadosOficios.vue';

const myRoutes = [
    {
        path: "/", component: HomeComponent
    }, 
    {
        path: "/empleadosoficios/:oficio", component: EmpleadosOficios
    },
    {
        path: "/coches", component: CochesComponent
    }, 
    {
        path: "/detalleempleados", component: EmpleadosDetalle
    }
]

const router = createRouter({
    history: createWebHistory(), 
    routes: myRoutes
})
export default router;
<template>
    <div>
        <h1 style="color:red">
            Proyecto Servicios VUE
        </h1>
        <h2 style="color:blue">{{mensaje}}</h2>
    </div>
</template>

<script>
import ServiceEjemplo from './../services/ServiceEjemplo';
//PARA UTILIZAR UN SERVICIO, DEBEMOS CREAR UNA CONSTANTE
//QUE SEA UN OBJETO DE LA CLASE SERVICE
const service = new ServiceEjemplo();

    export default {
        name: "HomeComponent", 
        mounted() {
            this.mensaje = service.getSaludo("Alumno");
        },
        data() {
            return {
                mensaje: ""
            }
        }
    }
</script>
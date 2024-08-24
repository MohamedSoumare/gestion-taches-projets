<template>
    <div class="container">
        <h3>Gestion de projet : </h3>
        <router-link to="/addProjet" >+ Ajouter</router-link>
        
        <h4>Listes des projets : </h4>
        <router-link to="/listProjet"></router-link>
    </div>
</template>

<script setup>
import { useGestionStore} from './store/projectsStore'

const store = useGestionStore()

</script>

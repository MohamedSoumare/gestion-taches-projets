<template>
  <div class="container">
    <h3 class="t1">Gestion de projet</h3>
    <router-link to="/projects/add" class="btn btn-primary mb-3">+ Ajouter un Projet</router-link>
    <h4 class="title">Liste des projets</h4>
    <table class="table mt-5">
      <thead>
        <tr>
          <th>#</th>
          <th>Nom</th>
          <th>Date de début</th>
          <th>Date de fin</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(projet, index) in projets" :key="projet.id">
          <td>{{ index + 1 }}</td>
          <td>{{ projet.nom }}</td>
          <td>{{ projet.debut }}</td>
          <td>{{ projet.fin }}</td>
          <td>
            <router-link :to="{ name: 'EditProject', params: { id: projet.id }}" class="btn btn-success"><ion-icon
              name="eyedrop"></ion-icon></router-link>
            <button @click="deleteProject(projet.id)" class="btn btn-danger"><ion-icon
              name="trash"></ion-icon></button>
            <router-link :to="{ name: 'ProjectDetails', params: { id: projet.id }}" class="btn btn-primary"><ion-icon name="eye"></ion-icon></router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useGestionStore } from './store/projectsStore';

const store = useGestionStore();
const projets = computed(() => store.projets);

const deleteProject = (id) => {
  store.delProjet(id);
};
</script>
<style>
.title {
  text-align: center;
}
.t1{
  margin-bottom: 30px;
}
</style>
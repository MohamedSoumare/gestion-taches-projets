<template>
  <div>
    <h4>Listes des projets :</h4>
    <table class="table">
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
            <router-link :to="{ name: 'ProjectDetails', params: { id: projet.id } }" class="btn btn-info">Détails</router-link>
            <router-link :to="{ name: 'EditProject', params: { id: projet.id } }" class="btn btn-success">Modifier</router-link>
            <button @click="deleteProject(projet.id)" class="btn btn-danger">Supprimer</button>
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

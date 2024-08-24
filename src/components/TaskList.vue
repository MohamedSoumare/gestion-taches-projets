<template>
  <div class="container mt-5">
    <h3>Gestion des tâches</h3>
    <router-link to="/tasks/add" class="btn btn-primary mb-3">+ Ajouter une Tâche</router-link>
    <h4>Liste des tâches</h4>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nom</th>
          <th>Date Limite</th>
          <th>Projet</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tache, index) in taches" :key="tache.id">
          <td>{{ index + 1 }}</td>
          <td>{{ tache.nom }}</td>
          <td>{{ tache.date }}</td>
          <td>{{ getProjetName(tache.projet) }}</td>
          <td>
            <router-link :to="{ path: `/tasks/details/${tache.id}` }" class="btn btn-info"><ion-icon name="eye"></ion-icon></router-link>
            <router-link :to="{ path: `/tasks/edit/${tache.id}` }" class="btn btn-success ml-2"><ion-icon
              name="eyedrop"></ion-icon></router-link>
            <button @click="deleteTask(tache.id)" class="btn btn-danger ml-2"><ion-icon
              name="trash"></ion-icon></button>

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
const taches = computed(() => store.taches);

const deleteTask = (id) => {
  store.delTache(id);
};

const getProjetName = (projetId) => {
  const projet = store.getProjetById(projetId);
  return projet ? projet.nom : 'Inconnu';
};
</script>

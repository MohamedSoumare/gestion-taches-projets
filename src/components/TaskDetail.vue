<template>
  <div class="container mt-5">
    <div v-if="tache" class="card">
      <div class="card-header">
        <h4>Détails de la Tâche</h4>
      </div>
      <div class="card-body">
        <p><strong>Nom : </strong>{{ tache.nom }}</p>
        <p><strong>Date Limite : </strong>{{ tache.date }}</p>
        <p><strong>Projet : </strong>{{ getProjetName(tache.projet) }}</p>
        <router-link :to="{ path: `/tasks/edit/${tache.id}` }" class="btn btn-success">Modifier</router-link>
        <button @click="deleteTask(tache.id)" class="btn btn-danger ml-3">Supprimer</button>
      </div>
    </div>
    <div v-else class="alert alert-warning">
      Tâche non trouvée !
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useGestionStore } from './store/projectsStore';

const store = useGestionStore();
const route = useRoute();
const router = useRouter();

const tache = ref(null);

const getProjetName = (projetId) => {
  const projet = store.getProjetById(projetId);
  return projet ? projet.nom : 'Inconnu';
};

const deleteTask = (id) => {
  store.delTache(id);
  router.push('/tasks');
};

onMounted(() => {
  const id = parseInt(route.params.id);
  tache.value = store.getTacheById(id);
});
</script>

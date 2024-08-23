<template>
  <div v-if="project">
    <h1>Détails du Projet</h1>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ project.nom }}</h5>
        <p class="card-text">Date de début : {{ project.debut }}</p>
        <p class="card-text">Date de fin : {{ project.fin }}</p>
      </div>
    </div>
    <div class="mt-3">
      <router-link :to="{ name: 'EditProject', params: { id: project.id } }" class="btn btn-primary me-2">Modifier</router-link>
      <router-link to="/" class="btn btn-secondary">Retour à la liste</router-link>
    </div>
  </div>
  <div v-else>
    <p>Projet non trouvé.</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useGestionStore } from './store/projectsStore';

const route = useRoute();
const store = useGestionStore();

const project = computed(() => store.getProjetById(parseInt(route.params.id)));
</script>

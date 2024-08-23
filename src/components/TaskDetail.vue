<template>
    <div class="container mt-5">
      <h2 class="text-center mb-4">Détails de la Tâche</h2>
      <div v-if="task">
        <p><strong>Nom:</strong> {{ task.name }}</p>
        <p><strong>Description:</strong> {{ task.description }}</p>
        <p><strong>Date de Début:</strong> {{ task.startDate }}</p>
        <p><strong>Date de Fin:</strong> {{ task.endDate }}</p>
        <p><strong>Projet:</strong> {{ task.projectName }}</p>
      </div>
      <router-link :to="'/task/edit/' + task.id" class="btn btn-warning">Modifier</router-link>
      <router-link to="/" class="btn btn-secondary">Retour</router-link>
    </div>
  </template>
  
  <script setup>
  import { useTasksStore } from '../components/store/TasksStore.js';
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const tasksStore = useTasksStore();
  const route = useRoute();
  
  const task = ref(null);
  
  onMounted(() => {
    task.value = tasksStore.tasks.find(t => t.id === route.params.id);
  });
  </script>
  
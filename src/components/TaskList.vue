<template>
    <div class="container mt-5">
      <h2 class="text-center mb-4">Liste des Tâches</h2>
      <table class="table table-striped table-hover">
        <thead class="thead-dark">
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Date de Début</th>
            <th>Date de Fin</th>
            <th>Projet</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasksStore.tasks" :key="task.id">
            <td>{{ task.name }}</td>
            <td>{{ task.description }}</td>
            <td>{{ task.startDate }}</td>
            <td>{{ task.endDate }}</td>
            <td>{{ task.projectName }}</td>
            <td>
              <button @click="viewDetails(task.id)" class="btn btn-info btn-sm">Voir</button>
              <button @click="editTask(task.id)" class="btn btn-warning btn-sm">Modifier</button>
              <button @click="deleteTask(task.id)" class="btn btn-danger btn-sm">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
    
    </div>
  </template>
  
  <script setup>
  import { useTasksStore } from '../components/store/TasksStore.js';
  import { useRouter } from 'vue-router';
  
  const tasksStore = useTasksStore();
  const router = useRouter();
  
  const viewDetails = (id) => {
    tasksStore.setCurrentTask(id);
    router.push(`/task/${id}`);
  };
  
  const editTask = (id) => {
    tasksStore.setCurrentTask(id);
    router.push(`/task/edit/${id}`);
  };
  
  const deleteTask = (id) => {
    tasksStore.deleteTask(id);
  };
  </script>
  
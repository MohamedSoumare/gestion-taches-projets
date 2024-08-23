<template>
  <div class="container mt-5">
    <ProjectForm />
    <router-view />
  </div>
</template>

<script setup>
import ProjectForm from './components/ProjectForm.vue';

</script>

<style scoped>
.container {
  max-width: 1200px;
} 
</style>

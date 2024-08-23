<template>
  <div class="container mt-5">
    <Navbar/>
    <ProjectForm />
    <router-view />
    
  </div>
</template>

<script setup>
import ProjectForm from './components/ProjectForm.vue';
import Navbar from './components/Navbar.vue';

</script>

<style scoped>
.container {
<<<<<<< HEAD
  max-width: 1200px;
} 
=======
  max-width: 900px;
}
>>>>>>> 4dc5235 (update file)
</style>

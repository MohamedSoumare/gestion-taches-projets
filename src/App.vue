<template>
  <div class="main-container">
    <Navbar />
 
  </div>
  <div class="form-container">
    <router-view />
  </div>
  
</template>

<script setup>
import Navbar from './components/Navbar.vue';
// import ProjectForm from './components/ProjectForm.vue';
// import TaskForm from './components/TaskForm.vue';
</script>

<style scoped>
.main-container {
  margin-top: 80px;
  max-width: 1200px;
  margin: auto;
}
.form-container {
  margin-top: 120px;  

 }


</style>

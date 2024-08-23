<template>
  <div>
    <h1>{{ isEditing ? 'Modifier le Projet' : 'Nouveau Projet' }}</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="nom" class="form-label">Nom du projet</label>
        <input v-model="form.nom" type="text" class="form-control" id="nom" required>
      </div>
      <div class="mb-3">
        <label for="dateDebut" class="form-label">Date de début</label>
        <input v-model="form.dateDebut" type="date" class="form-control" id="dateDebut" required>
      </div>
      <div class="mb-3">
        <label for="dateFin" class="form-label">Date de fin</label>
        <input v-model="form.dateFin" type="date" class="form-control" id="dateFin" required>
      </div>
      <button type="submit" class="btn btn-primary">{{ isEditing ? 'Mettre à jour' : 'Créer' }}</button>
      <router-link to="/" class="btn btn-secondary ms-2">Annuler</router-link>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProjectsStore } from './store/projectsStore'

const route = useRoute()
const router = useRouter()
const store = useProjectsStore()

const form = ref({
  id: null,
  nom: '',
  dateDebut: '',
  dateFin: ''
})

const isEditing = computed(() => !!route.params.id)

onMounted(() => {
  if (isEditing.value) {
    const project = store.projects.find(p => p.id === parseInt(route.params.id))
    if (project) {
      form.value = { ...project }
    }
  }
})

const submitForm = () => {
  if (isEditing.value) {
    store.updateProject(form.value)
  } else {
    const newId = Math.max(...store.projects.map(p => p.id)) + 1
    store.addProject({ ...form.value, id: newId })
  }
  router.push('/')
}
</script>
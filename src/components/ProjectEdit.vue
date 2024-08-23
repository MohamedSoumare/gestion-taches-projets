<template>
  <div class="container">
    <h3>Modifier le projet</h3>
    <form @submit.prevent="updateProjet">
      <div class="mb-3">
        <label for="editNom" class="form-label">Nom du projet</label>
        <input type="text" class="form-control" id="editNom" v-model="projet.nom" required>
      </div>
      <div class="mb-3">
        <label for="editDebut" class="form-label">Date de début</label>
        <input type="date" class="form-control" id="editDebut" v-model="projet.debut" required>
      </div>
      <div class="mb-3">
        <label for="editFin" class="form-label">Date de fin</label>
        <input type="date" class="form-control" id="editFin" v-model="projet.fin" required>
      </div>
      <button type="submit" class="btn btn-primary">Enregistrer</button>
      <router-link to="/" class="btn btn-secondary ms-2">Annuler</router-link>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useGestionStore } from './store/projectsStore';

const store = useGestionStore();
const route = useRoute();
const router = useRouter();

const projet = ref({
  id: null,
  nom: '',
  debut: '',
  fin: ''
});

watch(() => route.params.id, (newId) => {
  const id = parseInt(newId);
  const foundProjet = store.getProjetById(id);
  if (foundProjet) {
    projet.value = { ...foundProjet };
  } else {
    router.push('/'); // Rediriger si le projet n'est pas trouvé
  }
}, { immediate: true });

const updateProjet = () => {
  if (projet.value.id !== null) {
    store.updateProjet(projet.value);
    router.push('/');
  }
};
</script>

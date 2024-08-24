<template>
  <div class="container mt-5">
    <div class="card mb-4 mt-5">
      <div class="card-header">{{ isEditing ? 'Modifier la Tâche' : 'Ajouter une Tâche' }}</div>
      <div class="card-body">
        <form @submit.prevent="onSubmit">
          <div class="form-row mb-3">
            <div class="col">
              <label for="nom">Nom</label>
              <input type="text" class="form-control" id="nom" v-model="nom" required />
            </div>
            <div class="col">
              <label for="date">Date Debut</label>
              <input type="date" class="form-control" id="date" v-model="date" required />
            </div>
            <div class="col">
              <label for="datefin">Date Fin</label>
              <input type="date" class="form-control" id="datefin" v-model="datefin" required />
            </div>
            <div class="col">
              <label for="projet">Projet</label>
              <select class="form-control" id="projet" v-model="projet">
                <option v-for="projet in projets" :key="projet.id" :value="projet.id">{{ projet.nom }}</option>
              </select>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">{{ isEditing ? 'Enregistrer' : 'Ajouter' }}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useGestionStore } from './store/projectsStore';

const store = useGestionStore();
const router = useRouter();
const route = useRoute();

const nom = ref("");
const date = ref("");
const datefin = ref("");
const projet = ref(null);
const isEditing = ref(false);

const projets = store.projets;

const onSubmit = () => {
  if (isEditing.value) {
    store.updateTache({
      id: parseInt(route.params.id),
      nom: nom.value,
      date: date.value,
      datefin: datefin.value,
      projet: projet.value
    });
  } else {
    store.addTache({
      id: Date.now(),
      nom: nom.value,
      date: date.value,
      datefin: datefin.value,
      projet: projet.value
    });
  }

  router.push('/tasks');
};

watch(() => route.params.id, (newId) => {
  if (newId) {
    const foundTache = store.getTacheById(parseInt(newId));
    if (foundTache) {
      nom.value = foundTache.nom;
      date.value = foundTache.date;
      datefin.value = foundTache.datefin;
      projet.value = foundTache.projet;
      isEditing.value = true;
    }
  }
}, { immediate: true });
</script>

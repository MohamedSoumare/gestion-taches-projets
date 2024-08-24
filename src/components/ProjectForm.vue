<template>
  <div class="container mt-5">
    <div class="card mb-4 mt-5">
      <div class="card-header">Ajouter un Projet</div>
      <div class="card-body">
        <form @submit.prevent="onSubmit">
          <div class="form-row mb-3">
            <div class="col">
              <label for="nom">Nom</label>
              <input type="text" class="form-control" id="nom" v-model="nom" required />
            </div>
            <div class="col">
              <label for="debut">Date de début</label>
              <input type="date" class="form-control" id="debut" v-model="debut" required />
            </div>
            <div class="col">
              <label for="fin">Date de fin</label>
              <input type="date" class="form-control" id="fin" v-model="fin" required />
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Ajouter</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useGestionStore } from './store/projectsStore';
import { useRouter } from 'vue-router';

const store = useGestionStore();
const router = useRouter();
const nom = ref("");
const debut = ref("");
const fin = ref("");

const onSubmit = () => {
  store.addProjet({
    id: Date.now(),
    nom: nom.value,
    debut: debut.value,
    fin: fin.value,
  });

  // Réinitialiser les champs du formulaire
  nom.value = "";
  debut.value = "";
  fin.value = "";

  router.push('/projects');
};
</script>

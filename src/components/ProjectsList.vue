<template>
  <div>
    <h4>Listes des projets :</h4>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nom</th>
          <th>Date de début</th>
          <th>Date de fin</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(projet, index) in projets" :key="projet.id">
          <td>{{ index + 1 }}</td>
          <td>{{ projet.nom }}</td>
          <td>{{ projet.debut }}</td>
          <td>{{ projet.fin }}</td>
          <td>
            <!-- Ajoutez une classe pour espacer les boutons -->
            <div class="btn-group">
       
              <button @click="editProjet(projet)" class="btn btn-success">Modifier</button>
              <button @click="deleteProject(projet.id)" class="btn btn-danger">Supprimer</button>
              <button @click="openModal(projet)" class="btn btn-primary">Détails</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal de modification -->
    <div class="modal fade" id="editProjectModal" tabindex="-1" aria-labelledby="editProjectModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editProjectModalLabel">Modifier le projet</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
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
              <button type="button" class="btn btn-secondary ms-2" data-bs-dismiss="modal">Annuler</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal pour afficher les détails du projet -->
    <div class="modal fade" id="projectDetailsModal" tabindex="-1" aria-labelledby="projectDetailsModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="projectDetailsModalLabel">Détails du Projet</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h5>{{ selectedProject.nom }}</h5>
            <p>Date de début : {{ selectedProject.debut }}</p>
            <p>Date de fin : {{ selectedProject.fin }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useGestionStore } from './store/projectsStore';
import { useRouter } from 'vue-router';
import { Modal } from 'bootstrap';

const store = useGestionStore();
const router = useRouter();
const projets = computed(() => store.projets);

const projet = ref({
  id: null,
  nom: '',
  debut: '',
  fin: ''
});

const selectedProject = ref({
  nom: '',
  debut: '',
  fin: ''
});

const editProjet = (projetToEdit) => {
  projet.value = { ...projetToEdit };
  const modal = new bootstrap.Modal(document.getElementById('editProjectModal'));
  modal.show();
};

const updateProjet = () => {
  if (projet.value.id !== null) {
    store.updateProjet(projet.value);
    const modal = bootstrap.Modal.getInstance(document.getElementById('editProjectModal'));
    modal.hide();
  }
};

const deleteProject = (id) => {
  store.delProjet(id);
};

const openModal = (projet) => {
  selectedProject.value = { ...projet };
  const modalElement = document.getElementById('projectDetailsModal');
  const modalInstance = new Modal(modalElement);
  modalInstance.show();
};
</script>

<style scoped>
/* Espacement entre les boutons dans la table */
.btn-group .btn {
  margin-right: 5px;
}

/* Optionnel : pour améliorer l'affichage du modal */
.modal-dialog {
  max-width: 600px;
}
</style>

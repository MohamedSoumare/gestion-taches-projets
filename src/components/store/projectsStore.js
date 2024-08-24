import { defineStore } from 'pinia';

export const useGestionStore = defineStore('gestion', {
  state: () => ({
    projets: [],
    taches: [],
    selected: null,
  }),
  actions: {

    addProjet(projet) {
      this.projets.push(projet);
    },
    updateProjet(updatedProjet) {
      const index = this.projets.findIndex(projet => projet.id === updatedProjet.id);
      if (index !== -1) {
        this.projets[index] = updatedProjet;
      }
    },
    delProjet(id) {
      this.projets = this.projets.filter(projet => projet.id !== id);
    },
    viewProjet(projet) {
      this.selected = projet;
    },

    // Actions pour gérer les tâches
    addTache(tache) {
      this.taches.push(tache);
    },
    updateTache(updatedTache) {
      const index = this.taches.findIndex(tache => tache.id === updatedTache.id);
      if (index !== -1) {
        this.taches[index] = updatedTache;
      }
    },
    delTache(id) {
      this.taches = this.taches.filter(tache => tache.id !== id);
    },
    viewTache(tache) {
      this.selected = tache;
    },

  },
  getters: {
    getProjetById: (state) => (id) => {
      return state.projets.find(projet => projet.id === id);
    },
    getTacheById: (state) => (id) => {
      return state.taches.find(tache => tache.id === id);
    },
    getTachesByProjetId: (state) => (projetId) => {
      return state.taches.filter(tache => tache.projet === projetId);
    },
  },
});

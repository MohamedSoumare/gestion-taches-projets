import { defineStore } from 'pinia';

export const useGestionStore = defineStore('gestion', {
  state: () => ({
    projets: [],
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
    view(projet) {
      this.selected = projet;
    }
  },
  getters: {
    getProjetById: (state) => (id) => {
      return state.projets.find(projet => projet.id === id);
    }
  },
});

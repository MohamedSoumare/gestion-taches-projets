import { defineStore } from 'pinia';

export const useGestionStore = defineStore('gestion', {
  state: () => ({
    projets: [
      {
        id: 1,
        nom: "Developement d'un appliation desktop",
        dateDebut: "2024-08-25",
        dateFin: "2024-09-15",
      },
      {
        id: 2,
        nom: "Developement d'une application mobile",
        dateDebut: "2024-08-30",
        dateFin: "2024-09-25",
      },
      {
        id: 3,
        nom: "Design ux",
        dateDebut: "2024-09-25",
        dateFin: "2024-11-15",
      },
    ],
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

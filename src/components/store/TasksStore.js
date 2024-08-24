// import { defineStore } from 'pinia';

// export const useTaskStore = defineStore('taskStore', {
//   state: () => ({
//     tasks: [],
//     selectedTask: null,
//   }),
//   actions: {
//     addTask(task) {
//       this.tasks.push(task);
//     },
//     updateTask(updatedTask) {
//       const index = this.tasks.findIndex(task => task.id === updatedTask.id);
//       if (index !== -1) {
//         this.tasks[index] = updatedTask;
//       }
//     },
//     deleteTask(id) {
//       this.tasks = this.tasks.filter(task => task.id !== id);
//     },
//     selectTask(task) {
//       this.selectedTask = task;
//     },

//   },

  

//   getters: {
//     getTaskById: (state) => (id) => {
//       return state.tasks.find(task => task.id === id);
//     },
//   },
// });

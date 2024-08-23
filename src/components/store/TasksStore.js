import { defineStore } from 'pinia';

export const useTasksStore = defineStore('tasksStore', {
  state: () => ({
    tasks: [],
    currentTask: null,
  }),
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    setCurrentTask(taskId) {
      this.currentTask = this.tasks.find(t => t.id === taskId);
    },
    updateTask(updatedTask) {
      const index = this.tasks.findIndex(t => t.id === updatedTask.id);
      if (index !== -1) {
        this.tasks.splice(index, 1, updatedTask);
      }
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter(t => t.id !== taskId);
    },
  },
});

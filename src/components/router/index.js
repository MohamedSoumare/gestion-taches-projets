import { createMemoryHistory, createRouter } from "vue-router";

import ProjectForm from "../ProjectForm.vue";
import ProjectsList from "../ProjectsList.vue";
import ProjectEdit from "../ProjectEdit.vue";
import ProjectDetails from "../ProjectDetails.vue"; 

const routes = [
  { path: "/", component: ProjectsList },
  { path: "/add", component: ProjectForm },
  { path: "/edit/:id", component: ProjectEdit, name: 'EditProject' },
  { path: "/project/:id", component: ProjectDetails, name: 'ProjectDetails' },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;

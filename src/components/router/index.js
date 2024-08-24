import { createMemoryHistory, createRouter } from "vue-router";
import ProjectForm from "../ProjectForm.vue";
import ProjectsList from "../ProjectsList.vue";
import ProjectEdit from "../ProjectEdit.vue";
import ProjectDetails from "../ProjectDetails.vue"; 
import TaskList from '../TaskList.vue';
import TaskForm from '../TaskForm.vue';
import TaskDetail from '../TaskDetail.vue';

const routes = [
  { path: "/", component: ProjectsList },
  { path: "/projects", component: ProjectsList },
  { path: "/projects/add", component: ProjectForm },
  { path: "/projects/edit/:id", component: ProjectEdit, name: 'EditProject' },
  { path: "/projects/:id", component: ProjectDetails, name: 'ProjectDetails' },
  { path: '/tasks', component: TaskList },
  { path: '/tasks/add', component: TaskForm },
  { path: '/tasks/edit/:id', component: TaskForm, props: true },
  {
    path: '/tasks/details/:id',
    name: 'TaskDetail',
    component: TaskDetail,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;

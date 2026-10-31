import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddJob from "../views/AddJob.vue";
import JobDetail from "../views/JobDetail.vue";
import EditJob from "../views/EditJob.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "AddJob",
    component: AddJob,
  },
  {
    path: "/jobs/:id",
    name: "JobDetail",
    component: JobDetail,
    props: true,
  },
  {
    path: "/jobs/:id/edit",
    name: "EditJob",
    component: EditJob,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

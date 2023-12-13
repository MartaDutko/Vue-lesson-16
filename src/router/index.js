import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { showMenu: true }
  },
  {
    path: "/drivers",
    name: "drivers",
    component: () => import('@/views/DriversView.vue'),
  },
  {
    path: '/drivers/edit/:id?',
    name: 'driverEditor',
    props: true,
    component: () => import('../views/DriverForm.vue'),
  },
  {
    path: "/buses",
    name: "buses",
    component: () => import('@/views/BusesView.vue'),
  },
  {
    path: "/buses/edit/:id?",
    name: "busesEditor",
    props: true,
    component: () => import('@/views/BusesForm.vue'),
  },
  {
    path: "/appointment",
    name: "appointment",
    component: () => import('@/views/AppointmentView.vue'),
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import('@/views/ContactsView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

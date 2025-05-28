import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import('../views/LoginStudentVue.vue'),
    },
    {
      path: "/admin",
      component: () => import("../views/LoginAdminVue.vue"),
    },
    {
      path: "/menu-student",
      component: () => import("../views/MenuStudentVue.vue"),
    },
    {
      path: '/student/courses',
      component: () => import("../views/StudentCoursesVue.vue"),
    },
    {
      path: '/student/grades',
      component: () => import("../views/StudentGradesVue.vue"),
    },
    {
      path: "/menu-admin",
      component: () => import("../views/MenuAdminVue.vue"),
    },
    {
      path: '/admin/users',
      component: () => import("../views/AdminUsersVue.vue")
    },
    {
      path: "/admin/reports",
      component: () => import("../views/AdminReportsVue.vue"),
    },
  ],
});

export default router;

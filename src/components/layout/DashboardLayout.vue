<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-slate-800 text-white flex flex-col p-4 space-y-2">
      <h2 class="text-2xl font-bold mb-6">Panel {{ roleLabel }}</h2>

      <nav class="space-y-2">
        <RouterLink
          v-for="item in menuItems"
          :key="item.name"
          :to="item.path"
          class="block py-2 px-4 rounded-md hover:bg-slate-700"
          active-class="bg-slate-900"
        >
          {{ item.name }}
        </RouterLink>
      </nav>
    </aside>

    <!-- Contenido principal -->
    <main class="flex-1 p-6">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  role: {
    type: String,
    required: true, // "admin" o "student"
  },
});

const route = useRoute();

const roleLabel = computed(() =>
  props.role === "admin" ? "Administrador" : "Estudiante"
);

const menuItems = computed(() => {
  if (props.role === "admin") {
    return [
      { name: "Dashboard", path: "/menu-admin" },
      { name: "Gestión de Usuarios", path: "/admin/users" },
      { name: "Reportes", path: "/admin/reports" },
    ];
  } else {
    return [
      { name: "Inicio", path: "/menu-student" },
      { name: "Mis Cursos", path: "/student/courses" },
      { name: "Notas", path: "/student/grades" },
    ];
  }
});
</script>

<style scoped>
aside::-webkit-scrollbar {
  display: none;
}
</style>

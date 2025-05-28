<template>
  <DashboardLayout role="student">
    <h1 class="text-2xl font-bold text-slate-800">Bienvenido, Estudiante</h1>
    <p class="mt-2 text-slate-600">Aquí puedes ver tus cursos, notas y más.</p>

    <!-- Mostrar estado de carga/error -->
    <div v-if="loading" class="mt-4 text-blue-600">Cargando menú...</div>
    <div v-if="error" class="mt-4 p-4 bg-red-100 text-red-700 rounded">
      {{ error }}
    </div>
  </DashboardLayout>
</template>

<script setup>
import { onMounted, ref } from "vue";
import DashboardLayout from "../components/layout/DashboardLayout.vue";
import api from "../services/api";
import { useRouter } from "vue-router";

const router = useRouter();
const menuItems = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    loading.value = true;
    error.value = null;

    const response = await api.get("/api/auth/menu/student");

    if (response.data && response.data.menu) {
      menuItems.value = response.data.menu;
    } else {
      throw new Error("Formato de respuesta inesperado");
    }
  } catch (err) {
    console.error("Error al cargar el menú:", err);
    error.value =  "Error al cargar el menú";

    // Redirigir a login si no está autenticado
    if (err.response?.status === 401) {
      router.push("/student/login");
    }
  } finally {
    loading.value = false;
  }
});
</script>

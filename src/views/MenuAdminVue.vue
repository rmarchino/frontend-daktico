<template>
  <DashboardLayout role="admin">
    <h1 class="text-2xl font-bold text-slate-800">Bienvenido, Administrador</h1>
    <p class="mt-2 text-slate-600">
      Aquí puedes gestionar usuarios, reportes, etc.
    </p>
  </DashboardLayout>
</template>

<script setup>
import { onMounted, ref } from "vue";
import DashboardLayout from "../components/layout/DashboardLayout.vue";
import api from "../services/api";

const menu = ref([]);
const role = ref("admin");
const error = ref(null);

onMounted(async () => {
  try {
    const response = await api.get("/api/auth/menu/admin");
    menu.value = response.data.menu;
    role.value = response.data.rol;

  } catch (err) {
    error.value = err.response?.data?.error || "Error al cargar el menú";
    console.error("Error fetching menu:", err);

    // Redirigir a login si no está autenticado
    if (err.response?.status === 401) {
      router.push("/admin/login");
    }
  }
});
</script>

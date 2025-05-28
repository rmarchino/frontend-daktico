<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
      <h2 class="text-2xl font-semibold text-center mb-6 text-slate-800">
        Login Administrador
      </h2>
      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label for="email" class="block text-gray-600">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            required
            class="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label for="password" class="block text-gray-600">Contraseña</label>
          <input
            v-model="password"
            type="password"
            id="password"
            required
            class="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
        >
          Iniciar Sesión
        </button>
        <p v-if="error" class="text-red-500 text-sm text-center mt-2">
          {{ error }}
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import api from "../services/api";
import { useRouter } from "vue-router";
import csrf from "../services/csrf";

const router = useRouter();
const email = ref("");
const password = ref("");
const error = ref("");

const login = async () => {
  try {
    // Obtener el token CSRF
    await csrf.get("/sanctum/csrf-cookie");

    //Login
    await api.post("/api/auth/login/admin", {
      email: email.value,
      password: password.value,
    });
    
    router.push("/menu-admin");
  } catch (err) {
    error.value = err.response?.data?.error || "Error al iniciar sesión";
  }
};
</script>

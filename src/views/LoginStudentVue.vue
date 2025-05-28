<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
      <h2 class="text-2xl font-semibold text-center mb-6 text-slate-800">
        Login Estudiante
      </h2>
      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label for="email" class="block text-gray-600">Email</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Tú Email"
            v-model="email"
            class="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label for="password" class="block text-gray-600">Password</label>
          <input
            type="password"
            required
            id="password"
            placeholder="Tú password"
            v-model="password"
            class="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="mt-5">
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Iniciar sesión
          </button>
          <p v-if="error" class="text-red-500 text-sm text-center mt-2">
            {{ error }}
          </p>
        </div>
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
    
    // Login
    await api.post("/api/auth/login/student", {
      email: email.value,
      password: password.value,
    });

    router.push("/menu-student");
  } catch (err) {
    error.value = err.response?.data?.error || "Error al iniciar sesión";
  }
};
</script>

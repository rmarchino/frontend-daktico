# 🎯 Sistema de Autenticación con Roles (Laravel + Vue.js 3)

## 📋 Descripción

Este proyecto implementa un sistema de autenticación robusto con múltiples roles, específicamente **estudiante** y **administrador**, que incluye:

- ✅ Sesiones simultáneas en diferentes pestañas del navegador
- ✅ Menús dinámicos según el rol del usuario
- ✅ Permisos granularizados para administradores
- ✅ Manejo de múltiples sesiones autenticadas con Laravel Sanctum

---

## 🛠 Requisitos Previos

### 🔧 Backend (Laravel)

- PHP 8.0 o superior  
- Composer 2.0+  
- MySQL 5.7+ o MariaDB 10.3+  
- Laravel 9+  


### 🎨 Frontend (Vue.js)

- Node.js 16+
- npm 8+ o yarn 1.22+
- Vue.js 3
- Axios

---

## 🚀 Instalación Backend (Laravel)

### 1. Clonar repositorio

```bash
git clone https://github.com/rmarchino/frontend-daktico.git
cd backend
```

### 2. Instalar dependencias

```bash
composer install
```

### 3. Configurar entorno

```bash
cp .env.example .env
```

Editar el archivo `.env` con la configuración adecuada:

```ini
APP_NAME="Panel de Autenticación"
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=daktico
DB_USERNAME=root
DB_PASSWORD=

SESSION_DRIVER=cookie
SESSION_LIFETIME=120
SESSION_DOMAIN=localhost
SANCTUM_STATEFUL_DOMAINS=localhost:5173,localhost:8000
```

### 4. Generar clave de la aplicación

```bash
php artisan key:generate
```

### 5. Ejecutar migraciones y seeders

```bash
php artisan migrate --seed
```

### 6. Publicar archivos de Laravel Sanctum

```bash
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
```

### 7. Iniciar el servidor de desarrollo

```bash
php artisan serve --port=8000
```

---

## 💻 Instalación Frontend (Vue.js 3)

### 1. Navegar al directorio del frontend

```bash
cd ../frontend
```

### 2. Instalar dependencias

```bash
npm install
```


### 3. Iniciar servidor de desarrollo

```bash
npm run dev
```

---

## ✅ Listo

Con estos pasos, deberías tener un sistema de autenticación funcional que permite múltiples roles y sesiones en paralelo usando Laravel Sanctum y Vue.js 3.

---

## 📦 Estructura del Repositorio

```


---

## 📬 Contacto

¿Dudas o sugerencias? Puedes abrir un *issue* o enviar un mensaje directo en el repositorio de GitHub.

---

**¡Gracias por usar este proyecto!**
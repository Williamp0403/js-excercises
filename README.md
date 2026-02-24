# 🚀 ExercisesJS (Interactive JS Quizzes)

**ExercisesJS** es una plataforma web gamificada diseñada para poner a prueba y mejorar los conocimientos en JavaScript mediante desafíos tipo trivia. Los usuarios progresan a través de un sistema de niveles estructurado, desbloqueando nuevos retos a medida que demuestran su dominio del lenguaje.

---

### 🎮 La Experiencia de Usuario (Funcionalidades)
* **Sistema de Progresión:** Gestión de niveles dinámicos (Niveles completados, nivel actual activo y niveles futuros bloqueados).
* **Desafíos Interactivos:** 10 preguntas de opción múltiple por nivel con barra de progreso en tiempo real.
* **Feedback Visual:** Transiciones fluidas con **MUI Fade** y sistema de notificaciones (Toasts) usando **Sonner**.
* **Seguridad y Accesibilidad:** Rutas protegidas exclusivas para usuarios autenticados.

### 🛠️ Stack Tecnológico ("Modern Monorepo")

#### **Frontend**
* ![React](https://img.shields.io/badge/-React%2019-61DAFB?style=flat&logo=react&logoColor=black) ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat&logo=vite&logoColor=white) 
* **UI & Estilos:** ![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20v4-38B2AC?style=flat&logo=tailwind-css&logoColor=white) + **Material UI (MUI v7)**.
* **Routing:** **React Router DOM v7**.
* **Gestión de Estado:** **Context API** (`AuthContext`, `ResponsesContext`).
* **Formularios y Fetching:** **React Hook Form** + **Zod**, **Axios**.

#### **Backend & Edge Data**
* ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/-Express%205-000000?style=flat&logo=express&logoColor=white)
* **Base de Datos Edge:** **Turso (LibSQL / SQLite)** para latencia ultrabaja.
* **Autenticación:** **JWT** (JSON Web Tokens) + **Bcrypt** + Cookies (`cookie-parser`).
* **Validación & Logging:** **Zod** (Data schemas) y **Morgan** (HTTP request logger).
* **Infraestructura:** Arquitectura Monorepo (`client/` + `server/`) configurada para despliegue en **Vercel** (`vercel.json`).

---

### ⚙️ Instalación y Ejecución (Local)

Al ser una arquitectura monorepo, el cliente y el servidor se ejecutan por separado.

1. **Clona el repositorio:**
   ```bash
   git clone [https://github.com/tu-usuario/js-exercises.git](https://github.com/tu-usuario/js-exercises.git)
   cd js-exercises
2. **Configura el Backend (Servidor):**
  ```bash
  cd server
  npm install
  # Crea tu archivo .env con tus credenciales de Turso y tu JWT_SECRET
  npm run dev
  ```
3. **Configura el Frontend (Cliente)**:
   
  Abre una nueva terminal en la raíz del proyecto:
  
  ```bash
  cd client
  npm install
  npm run dev

# César Rubilar — Portafolio Profesional

### Analista Programador · Santiago, Chile

Portafolio profesional desarrollado con **React**, **Tailwind CSS** y **Framer Motion**. Diseñado para proyectar habilidades, proyectos y trayectoria como Analista Programador mediante una arquitectura limpia y componentes modulares. El sitio presenta una interfaz moderna, responsiva y optimizada, enfocada en ofrecer una excelente experiencia de usuario y un código eficiente.

🔗 [Ver en vivo →](https:// - aqui va el enlace de deploy)

---

## 🧐 Alcances del proyecto

Este sistema no fue concebido solo como una landing page estática, sino como un **Template de Visualización de Datos Escalable**. El alcance del proyecto busca resolver la separación de preocupaciones (*Separation of Concerns*), permitiendo que cualquier desarrollador pueda actualizar toda la información del sitio modificando un solo archivo de configuración JSON/JS, sin tocar una sola línea de JSX o CSS.

**Diferenciadores Técnicos:**
* **Arquitectura Decoupled:** La interfaz es agnóstica al contenido; los componentes se renderizan dinámicamente mapeando objetos de datos.
* **Optimización de Performance:** Uso de Lazy Loading y manejo eficiente de estados para asegurar una carga inicial menor a 2 segundos.
* **Enfoque en Normativa:** Integración de principios de orden y seguridad derivados de mi experiencia en certificación eléctrica y prevención.

## 🛠️ Stack Tecnológico

| Capa | Tecnologías |
| :--- | :--- |
| **Framework / Bundler** | React 19, Vite |
| **UI & Estilos** | Tailwind CSS, Framer Motion |
| **Iconografía** | Lucide React |
| **Arquitectura** | Component Driven Development (CDD) |
| **Deploy** | Vercel |

---

## 🚀 Instalación y Desarrollo local

```bash
# 1. Clonar el repositorio
git clone https://github.com/CesarRubilar0/Portafolio.git

# 2. Instalar dependencias
npm install

# 3. Correr en modo desarrollo
npm run dev
```

## 🚀 Características Principales

* **Data-Driven UI:** Contenido centralizado en `src/config/data.js` para facilitar el mantenimiento preventivo del código.
* **Terminal Aesthetics:** Estética minimalista "Dark Mode" con acentos azul cian, diseñada para proyectar un estilo moderno de terminal.
* **Micro-interacciones:** Animaciones inteligentes con Framer Motion que guían el ojo del reclutador hacia los hitos de carrera.
* **Responsive Grid:** Adaptación fluida desde dispositivos móviles hasta monitores Ultra-Wide.

## 📁 Estructura del Proyecto

```text
├── public/                 # Assets estáticos (SVGs, Favicons)
├── src/
│   ├── assets/             # Imágenes y recursos locales
│   ├── components/
│   │   ├── layout/         # Estructura global (Navbar, Footer)
│   │   └── sections/       # Módulos independientes (Hero, Projects, Experience)
│   ├── config/
│   │   └── data.js         # Fuente Única de Verdad (Single Source of Truth)
│   ├── App.jsx             # Orquestador de la lógica de renderizado
│   ├── main.jsx            # Punto de entrada de la aplicación
│   ├── App.css             # Estilos globales y Tailwind
│   └── index.css           # Estilos base
├── tailwind.config.js      # Configuración de diseño y temas
└── vite.config.js          # Configuración del entorno de desarrollo
```

## 💻 Proyectos Destacados (Sincronizado con GitHub)

| Proyecto | Stack | Descripción / Rol |
| :--- | :--- | :--- |
| **Portafolio 2026** | React · Tailwind · Framer Motion | Main Portfolio & Architecture Showcase |
| **Aplicación Financiera** | TypeScript · Frontend | Control de finanzas personales |
| **Agendabarber** | React · Node.js · Express | Sistema Full-stack de agendamiento |
| **Organizador-diario** | Python | Agenda organizadora (Desktop/Logic) |
| **NakMuay-API** | Java · Spring Boot | API REST para gestión deportiva |
| **Práctica Profesional Labotech** | React · Node.js | Analista Programador (Intern) |

---

## 📈 Optimizaciones e Ingeniería (Práctica Profesional)

Durante mi desempeño en **Antigravity**, lideré la implementación de módulos críticos de seguridad y optimización de sistemas en producción:

### 🛡️ Seguridad y Autenticación Avanzada (MFA/OTP)

*   **✔ Implementación de OTP (One-Time Password):** Desarrollo de flujos de verificación vía correo electrónico con códigos temporales de un solo uso para robustecer el acceso al sistema.
*   **✔ Generación Dinámica de QR:** Implementación de códigos QR con validación por tiempo (Time-based) para el control de ingresos y validación de identidad en tiempo real.

### ⚙️ Pipeline de Calidad Automatizada (Workflow Tooling)

*   `make dry` & `make solid`: Análisis estático para eliminar redundancia (DRY) y asegurar arquitectura desacoplada (SOLID).
*   `make security` & `make quality`: Escaneo proactivo de vulnerabilidades en dependencias y auditoría de estándares de estilo.
*   `make benchmark` & `make coverage`: Medición de rendimiento en renderizado y reporte de cobertura de lógica crítica.

### 🧹 Refactorización y Deuda Técnica

*   **✔ Type Safety:** Eliminación sistemática de tipos `any` en componentes de alta complejidad (Mapas Leaflet y selectores dinámicos).
*   **✔ Limpieza ESLint:** Resolución de fallas críticas y ejecución de `eslint --fix` para depurar más de 432 advertencias de variables y hooks sin uso.

---

## 📩 Contacto

[LinkedIn](https://www.linkedin.com/in/tu-perfil) · [GitHub]https://github.com/CesarRubilar0 · [Email](mailto:tu-email@ejemplo.com)

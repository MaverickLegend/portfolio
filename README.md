# 🌟 Portfolio - Cristián Rojas

Portfolio personal desarrollado con Vue.js 3, TypeScript y hospedado en VPS con Docker y Nginx. Presenta mi experiencia como Desarrollador FullStack con especialización en el ecosistema TypeScript.

## 🚀 Características

- ⚡ **Vue 3 + TypeScript** con Composition API y `<script setup>`
- 🎨 **Diseño Responsive** optimizado para móvil y desktop
- 🌐 **Internacionalización** (Español/Inglés) con Pinia store
- 🎭 **Sistema de Temas** (Modo Oscuro/Claro)
- ✨ **Animaciones Personalizadas** con transiciones CSS
- 📱 **SPA** con Vue Router
- 🎯 **TypeScript** para type-safety
- 🐳 **Dockerizado** para deployment
- 📦 **Optimización** con Vite

## 🛠️ Stack Tecnológico

### Frontend

- **Vue.js 3** - Framework progresivo
- **TypeScript** - Tipado estático
- **Pinia** - State management
- **Vue Router** - Routing
- **SCSS** - Estilos
- **Iconify** - Sistema de iconos

### DevOps

- **Docker** - Containerización
- **Nginx** - Web server
- **Vite** - Build tool

## 📂 Estructura del Proyecto

```
portfolio/
├── public/
│   └── assets/
│       ├── files/         # CVs (PDF)
│       └── img/           # Imágenes del portfolio
├── src/
│   ├── assets/
│   │   ├── data/          # Datos JSON (i18n)
│   │   └── styles/        # Estilos globales SCSS
│   ├── components/        # Componentes Vue
│   ├── router/            # Configuración Vue Router
│   └── stores/            # Pinia stores
└── vite.config.ts
```

## 🎯 Secciones

- **Proyectos** - Portafolio de proyectos desarrollados
- **Sobre mí** - Información personal y profesional
- **Experiencia** - Timeline de experiencia laboral
- **Certificados** - Certificaciones obtenidas
- **Contacto** - Formulario de contacto (en desarrollo)

## 💼 Experiencia Destacada

- **GigLogic (2025)** - Desarrollador FullStack
  - NestJS + PostgreSQL + React + TypeScript + Docker
  - SaaS para gestión de eventos a gran escala

- **LatLong (2025)** - Desarrollador Freelance
  - Django REST Framework + Vue.js + TypeScript
  - Optimización ETL con Python/Pandas (70% reducción tiempo)

- **Mapa La Chispa Digital (2025)** - Práctica Profesional
  - React + TypeScript + Leaflet
  - Visualización geográfica interactiva

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/MaverickLegend/portfolio.git
cd portfolio

# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🐳 Docker

```bash
# Build de la imagen
docker build -t portfolio .

# Ejecutar container
docker run -p 80:80 portfolio
```

## 📝 Configuración

### Internacionalización

Los datos multiidioma se encuentran en:

- `src/assets/data/spanish.json`
- `src/assets/data/english.json`

### Temas

Los temas se configuran en `src/assets/styles/themes.scss`

## 📫 Contacto

- **Email**: malcolmrojas.f@gmail.com
- **LinkedIn**: [/malcolmrojas](https://linkedin.com/in/malcolmrojas)
- **GitHub**: [/MaverickLegend](https://github.com/MaverickLegend)
- **Portfolio**: [cristianrojasdev.website](https://cristianrojasdev.website)

## 📄 Licencia

Este proyecto es de código privado para uso personal.

---

⭐ Desarrollado con Vue.js y TypeScript por Cristián Rojas

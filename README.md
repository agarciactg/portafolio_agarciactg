# Portafolio Personal - Andrés García

Portafolio profesional desarrollado con arquitectura Vanilla orientada a componentes usando ES Modules, HTML, CSS nativo y construido con [Vite](https://vitejs.dev/).

## 🚀 Inicio Rápido

Para correr este proyecto en entorno local, asegúrate de tener [Node.js](https://nodejs.org/) instalado.

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar el entorno de desarrollo local con Hot Reload
npm run dev
```

El proyecto correrá en `http://localhost:5173/` por defecto.

## 🛠️ Build de Producción

Para compilar y minificar los assets (`js/css/html`) y prepararlos para un despliegue optimizado:

```bash
npm run build
```
Los archivos optimizados se generarán en la carpeta `dist/`. Para visualizar cómo quedará el build, usa:

```bash
npm run preview
```

## 📂 Arquitectura del Proyecto

El código fuente está estructurado de la siguiente forma:

- `/public`: Los assets que no requieren ser procesados por el bundler (ej: traducciones `locales/` de i18next, manifiestos estáticos).
- `/src`: Carpeta de desarrollo principal que Vite procesará.
  - `/src/images`: Imágenes optimizadas.
  - `/src/css`: Hojas de estilo modulares o globales.
  - `/src/js`: Scripts JS puros de inicialización y modularidad.
- `/index.html`: Punto de entrada de toda la app.

## 💡 Tecnologías Utilizadas
- HTML5 y CSS3 HSL
- JavaScript Vanilla (Módulos ES)
- Vite (Bundler y Dev Server)
- FormSubmit (Formularios)
- i18next (Internacionalización)
- Typed.js / particles.js

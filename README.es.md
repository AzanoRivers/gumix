# Gumix Extension - Plantilla de Interfaz para Pixels.xyz

> 🌐 **Idiomas:** [English](./README.md) | [Español](#)

Una plantilla minimalista de extensión de navegador para construir interfaces de usuario interactivas sobre Pixels.xyz usando WXT + React.

[![WXT](https://img.shields.io/badge/WXT-0.20.13-blue?style=flat&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMkwyIDdMMTIgMTJMMjIgN0wxMiAyWiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=)](https://wxt.dev)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat)](LICENSE)

**Creado por:** <a href="https://www.AzanoRivers.com" target="_blank">AzanoRivers</a>  
**Proyecto:** <a href="https://pixigummies.com/" target="_blank">PixiGummies</a>

## Tabla de Contenidos

- [Estrategia de Ramas](#estrategia-de-ramas)
- [Confianza y Seguridad](#confianza-y-seguridad)
- [Descripción General](#descripción-general)
- [Arquitectura](#arquitectura)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Primeros Pasos](#primeros-pasos)
- [Flujo de Desarrollo](#flujo-de-desarrollo)
- [Características Clave](#características-clave)
- [Configuración de VS Code para IntelliSense de Tailwind](#configuración-de-vs-code-para-intellisense-de-tailwind)

## Estrategia de Ramas

### `master` - Plantilla Limpia
Esta rama contiene la **plantilla inicial mínima** para cualquiera que quiera clonar el proyecto y construir su propia extensión personalizada para Pixels.xyz. Úsala como base para tus propios proyectos.

### `gumix` - Desarrollo Activo
La rama `gumix` contiene la **implementación en producción** que reemplaza la interfaz obsoleta de Pixels.xyz con una UI moderna inyectada.

#### Contribuyendo a `gumix`

Todas las contribuciones, mejoras y nuevas funcionalidades deben basarse en la rama `gumix`. Al contribuir:

**Requisitos de Calidad de Código:**
- ✅ Mantener arquitectura consistente (no mezclar React con vanilla JS en componentes)
- ✅ Evitar cuellos de botella de rendimiento y re-renders innecesarios
- ✅ Seguir los patrones y estructura del proyecto establecidos
- ✅ Eliminar cualquier código temporal/de depuración antes de hacer commit

**Guías de Desarrollo Asistido por IA:**

Si usas herramientas de IA (GitHub Copilot, Cursor, Cline, etc.):

1. **Revisa cada línea** de código generado por IA cuidadosamente
2. **Prueba exhaustivamente** problemas de rendimiento
3. **Evita "código basura"** - asegura consistencia con los patrones del proyecto
4. **Documenta el uso de IA** al inicio de cada componente:

```tsx
/**
 * ComponentName - Breve descripción de lo que hace
 * 
 * @author TuNombre
 * @ai-assisted Sí (Herramienta: GitHub Copilot / Cursor / etc.)
 * @created 2026-01-XX
 */
```

**Convención de Mensajes de Commit:**

Usa el formato Conventional Commits para todos los commits:

- `feat:` - Nueva característica o funcionalidad
- `fix:` - Corrección de bugs
- `docs:` - Cambios solo en documentación
- `refactor:` - Cambios de código que no corrigen bugs ni agregan features
- `chore:` - Tareas de mantenimiento (dependencias, configuración)
- `style:` - Formato de código (sin cambios de lógica)
- `perf:` - Mejoras de rendimiento

**Ejemplo:** `feat: agregar interfaz de gestión de inventario`

**Recuerda:** La IA es una herramienta, no un reemplazo de la ingeniería cuidadosa. Eres responsable de la calidad y mantenibilidad del código que contribuyes.

## Confianza y Seguridad

🔒 **La Integridad del Código es Primero**

Este proyecto busca mejorar la experiencia de usuario para los jugadores de Pixels.xyz y generar confianza dentro de la comunidad de desarrolladores.

**Antes de contribuir, revisa cuidadosamente:**
- ✅ Estructura y arquitectura del proyecto
- ✅ Requisitos de Node.js y pnpm
- ✅ Todos los paquetes y dependencias instaladas
- ✅ Código fuente en busca de patrones sospechosos

**Política de Tolerancia Cero:**

⚠️ **No se admitirá ningún intento de introducir paquetes o código malicioso.**

Si se descubre código malicioso en algún commit:
- El commit será revertido inmediatamente
- El usuario será reportado a GitHub
- El usuario será permanentemente prohibido de contribuir

Estamos comprometidos a mantener una base de código segura, transparente y confiable para la comunidad de Pixels.xyz.

## Descripción General

Esta plantilla proporciona una base para construir extensiones de navegador que inyectan componentes de UI personalizados en el juego de Pixels.xyz. Sigue las mejores prácticas del framework WXT con una arquitectura escalable para gestionar componentes compartidos, mensajería y lógica entre el contexto de la extensión y la UI inyectada.

## Arquitectura

El proyecto implementa una arquitectura de tres capas:

1. **Capa de Extensión** (`background/`) - Scripts de fondo y gestión del ciclo de vida de la extensión
2. **Capa de Content Script** (`content/`) - Inyección de UI y manipulación del DOM en Pixels.xyz
3. **Capa Compartida** (`components/`, `utils/`, `hooks/`) - Componentes y lógica reutilizable

Todas las capas se comunican a través del sistema de mensajería de WXT, permitiendo un flujo de datos fluido entre los contextos de la extensión y la interfaz inyectada.

## Estructura del Proyecto

```
src/
├── assets/           # Recursos estáticos (imágenes, SVGs)
├── components/       # Componentes React compartidos
│   ├── App/         # Wrapper principal de la aplicación
│   ├── LogoGumix/   # Componente de logo de marca
│   └── Game/        # Componentes de UI específicos del juego
├── entrypoints/
│   ├── background/  # Scripts de fondo de la extensión
│   │   └── messaging/ # Enrutamiento y manejadores de mensajes
│   ├── content/     # Content scripts inyectados en Pixels.xyz
│   └── popup/       # UI del popup de la extensión
├── hooks/           # Custom React hooks
├── styles/          # Estilos globales y constantes CSS
└── utils/           # Funciones utilitarias
```

## Primeros Pasos

### Prerequisitos

- Node.js 18+
- pnpm (recomendado) o npm

### Instalación

```bash
# Instalar dependencias
pnpm install
```

### Configuración Manual de la Extensión (Requerido)

**El lanzamiento automático del navegador está deshabilitado por defecto** para permitir pruebas con tu configuración personal del navegador y sesiones existentes de Pixels.xyz.

#### Pasos para cargar la extensión:

1. **Iniciar servidor de desarrollo:**
   ```bash
   pnpm dev
   ```
   La extensión se compilará en `.output/chrome-mv3/` (o `.wxt/chrome-mv3/` dependiendo de la versión de WXT)

2. **Abrir tu navegador Chrome regular** (el que tiene tu Ronin Wallet y sesión de Pixels)

3. **Navegar a:** `chrome://extensions`

4. **Habilitar "Modo de desarrollador"** (toggle en la esquina superior derecha)

5. **Click en "Cargar extensión sin empaquetar"**

6. **Seleccionar carpeta:** 
   - Navega al directorio de tu proyecto
   - Selecciona: carpeta `.output/chrome-mv3`
   
7. **¡Extensión cargada!** Verás "Gumix Extension" aparecer en tu lista de extensiones

> **¿Por qué configuración manual?** Este enfoque te permite probar la extensión con tu sesión activa de Pixels.xyz, autenticación de Ronin Wallet y todas tus configuraciones existentes del navegador sin perder acceso a otras extensiones instaladas.

### Configuración

Los ajustes del navegador se configuran en `wxt.config.ts`. La integración de `webExt` está deshabilitada para prevenir el lanzamiento automático del navegador:

```typescript
webExt: {
  disabled: true  // Se requiere carga manual de la extensión
}
```

## Flujo de Desarrollo

1. **Iniciar servidor dev:** `pnpm dev` (compila automáticamente al cambiar archivos)
2. **Cargar extensión** en tu navegador Chrome (configuración única)
3. **Hacer cambios** en el código
4. **Recargar extensión** (ícono 🔄 en `chrome://extensions`)
5. **Refrescar página** (F5 en Pixels.xyz)

> **Nota:** Usa tu perfil regular de Chrome para mantener acceso a otras extensiones como Ronin Wallet para probar funcionalidades autenticadas.

## Características Clave

- ✅ **Hot reload** durante el desarrollo
- ✅ Soporte de **TypeScript** con aliases de rutas (`@/`)
- ✅ **Tailwind CSS** v4 para estilos
- ✅ **React 19** para componentes de UI
- ✅ **Framework WXT** para scaffolding de extensiones
- ✅ **Arquitectura modular** para escalabilidad
- ✅ **Librería de componentes compartidos** entre contextos

## Configuración de VS Code para IntelliSense de Tailwind

Para habilitar autocompletado de clases personalizadas definidas en `@theme`, crea `.vscode/settings.json`:

```json
{
  "editor.quickSuggestions": {
    "strings": "on"
  },
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  },
  "tailwindCSS.experimental.configFile": "src/styles/global.css",
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

Después de guardar, reinicia el servidor de Tailwind CSS: `Ctrl+Shift+P` → **"Tailwind CSS: Restart Tailwind CSS Language Server"**

---

**Licencia:** MIT  
**Mantenido por:** Proyecto PixiGummies

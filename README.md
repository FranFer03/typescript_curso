# Curso de TypeScript

Este repositorio contiene los ejercicios y prácticas del curso de TypeScript impartido por Fernando Herrera.

## Descripción

Repositorio donde estoy aprendiendo TypeScript desde cero hasta conceptos avanzados, siguiendo el curso de Fernando Herrera. El proyecto incluye ejemplos prácticos sobre tipos, funciones, arrays, enums y más.

## Cómo replicar este repositorio

### Prerrequisitos

- Node.js instalado
- npm o yarn
- TypeScript globalmente instalado (opcional)

### Pasos para clonar y ejecutar

1. **Instalar Node.js (si no lo tienes instalado)**

   ```bash
   # Descarga e instala nvm:
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash

   # en lugar de reiniciar la shell
   \. "$HOME/.nvm/nvm.sh"

   # Descarga e instala Node.js:
   nvm install 22

   # Verifica la versión de Node.js:
   node -v # Debería mostrar "v22.17.0".
   nvm current # Debería mostrar "v22.17.0".

   # Verifica versión de npm:
   npm -v # Debería mostrar "10.9.2".
   ```

2. **Clonar el repositorio**

   ```bash
   git clone https://github.com/FranFer03/typescript_curso.git
   cd typescript_curso
   ```

3. **Instalar TypeScript globalmente (si no lo tienes)**

   ```bash
   npm install -g typescript
   ```

4. **Instalar Live Server para visualizar los archivos HTML**

   ```bash
   npm install -g live-server
   ```

   **Ejecutar Live Server:**

   ```bash
   # Navegar a la carpeta que contiene archivos HTML
   cd bases
   # o
   cd practica

   # Ejecutar Live Server
   live-server
   ```

   Esto abrirá automáticamente tu navegador en `http://localhost:8080` y podrás ver los archivos HTML con recarga automática.

## Estructura del proyecto

```
typescript_curso/
├── bases/
│   ├── examen/
│   ├── funciones/
│   └── tipos/
└── practica/
    └── clima/
```

## Contenido del curso

- **Bases**: Fundamentos de TypeScript
  - Tipos básicos (strings, numbers, booleans)
  - Arrays y tuplas
  - Enums
  - Funciones y sus diferentes formas de declaración
- **Práctica**: Ejercicios aplicados
  - Cálculos y operaciones
  - Manipulación de datos
  - Proyectos con HTML y TypeScript

**Tip**: Cada archivo `.ts` tiene su correspondiente `.js` compilado para comparar el resultado final.

# Portfolio - Jere792

Portfolio personal de Jeremy Anton construido con **Astro 7**, islas de **React 19**, **TypeScript** y **SCSS**.

## Stack

- Astro 7 (salida 100% estática)
- React 19 solo en las piezas interactivas (`TechCollage`, proyectos y reproductor de `/now`)
- TypeScript
- SCSS con variables y mixins compartidos
- Devicon y PrimeIcons

## Desarrollo

```bash
npm install
npm run dev
```

El servidor de desarrollo arranca en `http://localhost:4321/`.

## Build

```bash
npm run build
```

Genera el sitio estático en `dist/`. Para revisarlo localmente:

```bash
npm run preview
```

## Estructura

```text
src/
  layouts/Layout.astro
  pages/
    index.astro        # Home en /
    home.astro         # Redirección de /home a /
    about.astro
    contact.astro
    projects.astro     # Isla React
    now.astro          # Isla React
  components/
    layout/            # Header, Navbar y Footer en Astro
    home/              # Hero, TechStack y RecentProjects en Astro
    home/TechCollage.tsx
    projects/ProjectsPage.tsx
    now/NowPage.tsx
    shared/GithubActivity.astro
  data/                # Contenido del portfolio
  lib/
  styles/
    globals.scss
    _variables.scss
    _mixins.scss
    _global.scss
    pages/             # SCSS específico de cada página
public/
  _redirects           # Redirecciones de Cloudflare Pages
```

## Deploy en Cloudflare Pages

El proyecto está pensado para desplegarse con la integración de Git de Cloudflare Pages:

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node version:** 22 o superior (`NODE_VERSION=22`)

`public/_redirects` mantiene `/home` redirigido a `/` para no romper enlaces antiguos.

## Notas

- El home está en `/`; la antigua ruta `/home` redirige.
- El dominio canónico se configura en `astro.config.mjs` (`site`). Actualízalo cuando tengas el dominio final de Cloudflare.
- Las imágenes se sirven desde Cloudinary.

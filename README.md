<<<<<<< HEAD
# app-RE-comidas-FRONT-END

---

## 💻 README del FRONTEND (React)

````md
# Frontend - Plataforma de Rescate de Alimentos

Este repositorio contiene el frontend desarrollado en **React**, encargado de la interfaz que conecta a **usuarios** y **comercios** con la plataforma de rescate de alimentos.

La aplicación permite a los usuarios descubrir ofertas de productos próximos a vencer, reservarlos y gestionar sus pedidos; y a los comercios, publicar y administrar sus packs.

---

## 🎯 Objetivo del frontend

- Ofrecer una interfaz clara, moderna y responsiva.
- Permitir que los usuarios encuentren ofertas cercanas de forma rápida.
- Facilitar a los comercios la publicación y gestión de sus productos y reservas.

---

## 🧱 Funcionalidades principales

- **Landing page**

  - Explica el propósito de la plataforma.
  - Destaca el impacto ambiental y el ahorro económico.

- **Autenticación**

  - Registro e inicio de sesión de usuarios y comercios.
  - Manejo de sesión (tokens, expiración, etc.).

- **Exploración de ofertas**

  - Listado de packs/productos por zona.
  - Filtros por categoría, horario, comercio, etc.
  - Vista de detalle con información clave:
    - Descripción
    - Horario de recogida
    - Precio original vs precio con descuento

- **Reserva de productos**

  - Flujo de selección y confirmación de reserva.
  - Visualización de reservas activas y pasadas.

- **Panel de comercios**
  - Publicar nuevas ofertas.
  - Editar disponibilidad / stock.
  - Revisar las reservas recibidas.

---

## 🛠️ Tecnologías utilizadas

- **React** (con Hooks).
- Bundler (por ejemplo **Vite** o Create React App).
- **React Router** para navegación.
- **Axios / fetch** para consumo de la API de backend.
- Manejo de estado (Context API o la librería que prefieras).
- CSS Modules / Styled Components / Tailwind (según tu stack).

_(Adapta este bloque a las herramientas reales que uses.)_

---

## 📁 Estructura sugerida del proyecto

```txt
frontend/
├─ src/
│  ├─ api/
│  ├─ components/
│  ├─ pages/
│  │  ├─ Home/
│  │  ├─ Login/
│  │  ├─ Register/
│  │  ├─ Offers/
│  │  ├─ OfferDetail/
│  │  ├─ MyReservations/
│  │  └─ BusinessDashboard/
│  ├─ context/
│  ├─ hooks/
│  ├─ assets/
│  └─ main.tsx / main.jsx
└─ ...
```
````
=======
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/21485e49-e9ad-4e89-8fb1-efa6451b797b

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/21485e49-e9ad-4e89-8fb1-efa6451b797b) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/21485e49-e9ad-4e89-8fb1-efa6451b797b) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
>>>>>>> main

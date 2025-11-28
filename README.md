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

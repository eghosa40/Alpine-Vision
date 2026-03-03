# Alpine Vision

A frontend e-commerce storefront for a ski goggle brand, built as a learning project to explore React component architecture, Context API state management, and modern UI design patterns.

---

## Overview

Alpine Vision is a product browsing and cart experience for a fictional ski goggle retailer. The project focuses on building a polished, interactive UI with smooth animations, real-time search, and a fully functional client-side cart — all without a live backend.

---

## Features

- **Hero section** — full-viewport background image with glassmorphism CTA
- **Product showcase** — scroll-driven parallax animations using Framer Motion
- **Featured carousel** — animated product carousel with wrap-around navigation and dot indicators
- **Shop page** — product grid with category filtering (All / Performance / Casual / Sale) and sort controls (price, newest, relevance)
- **Product detail page** — image gallery with thumbnail switching, quantity selector, and add-to-cart
- **Real-time search** — expanding search bar in the navbar with live product filtering and image previews
- **Cart** — persistent client-side cart via Context API with quantity controls, item removal, and GBP subtotal
- **Cart dropdown** — hover-triggered mini-cart in the navbar
- **Auth context** — AuthContext and role-based route guards (`ProtectedRoute`, `AdminRoute`) wired up; no live auth backend connected
- **Admin dashboard** — UI scaffold with sidebar navigation, overview stats cards, and a product management panel (CRUD calls point to `localhost:8080` — not connected in the deployed version)
- **Register page** — full form with client-side validation (email format, password length, confirmation match)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite |
| Styling | TailwindCSS |
| UI components | shadcn/ui, Radix UI primitives |
| Animations | Framer Motion |
| Routing | React Router v6 |
| State management | Context API (CartContext, AuthContext) |
| Icons | Lucide React |

---

## Project Structure

```
src/
├── assets/          # Product images (PNG/WebP)
├── components/      # Reusable UI components
│   ├── ui/          # shadcn/ui base components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ProductShowcase.jsx
│   ├── FeaturedCarousel.jsx
│   ├── ProductListing.jsx
│   ├── ProductDetail.jsx
│   ├── CartDropdown.jsx
│   └── SearchBar.jsx
├── context/         # CartContext, AuthContext
├── data/            # Static product data (products.js)
├── pages/           # Route-level components
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── Product.jsx
│   ├── Cart.jsx
│   ├── Register.jsx
│   └── AdminDashboard.jsx
└── App.jsx
```

---

## Getting Started

```bash
git clone https://github.com/eghosa40/Alpine-Vision.git
cd Alpine-Vision
npm install
npm run dev
```

---

## Known Limitations

- Product data is static (`src/data/products.js`) — no backend or database connected
- Cart state is in-memory only — does not persist on page refresh
- Auth context is scaffolded but has no live backend; login/register forms call `localhost:8080` which is not deployed
- Admin dashboard CRUD operations (add/edit/delete product) require the Spring Boot backend running locally
- Checkout flow is a placeholder — the checkout button redirects to home

---

## Planned Improvements

- Connect to a live backend (designed to integrate with the companion Spring Boot REST API project)
- Persist cart state with localStorage or backend sync
- Complete authentication flow with JWT
- Implement actual checkout with order management
- Add mobile responsive navigation menu

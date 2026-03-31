# Car Shop Dashboard 🏎️

A modern React-based car showroom with search, cart, favorites, and a protected dashboard.

## Features

- 🔍 **Live Search** — filter cars by name, brand, or price instantly
- 🛒 **Cart System** — add/remove cars, adjust quantity, see order summary
- ❤️ **Favorites** — save cars with a heart button, persisted to localStorage
- 🔐 **Auth + Protected Dashboard** — login/logout with a stats dashboard
- 🖼️ **Skeleton Loading** — shimmer placeholders while images load
- ✨ **Premium Dark UI** — glassmorphism navbar, glow hover effects, animated badges

## Tech Stack

- **React 19** + **TypeScript**
- **React Router v7** — client-side routing + protected routes
- **Vite** — fast dev server & build tool
- **Vanilla CSS** — custom dark theme, no UI libraries

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Demo Login

Use any email + any password (≥ 6 characters) to sign in.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — fleet grid with search |
| `/car/:id` | Car detail with specs |
| `/cart` | Shopping cart |
| `/favorites` | Saved cars |
| `/dashboard` | Protected user dashboard |
| `/login` | Authentication |

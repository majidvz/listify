# Listify

A modern, clean CRUD application for managing notes and tasks, built with React, TypeScript, Vite, and Ant Design. Designed to showcase clean architecture, component-based design, and best practices with TypeScript and modern React features (hooks, context, modularity).

---

## Overview

**Listify** enables users to create, read, update, and delete cards (notes/tasks) with a focus on usability and aesthetics. The UI is responsive and intuitive, providing a seamless experience for basic organization needs.

---

## Features

- Add, edit, and delete cards (notes/tasks)
- Each card includes a title, description, and creation date
- Responsive design (desktop & mobile)
- Instant feedback and modal forms
- Clean, modern UI using Ant Design and styled-components
- Modular code structure with reusable components
- Global state management with React Context
- TypeScript-first for reliability and maintainability

---

## Tech Stack

- **React** 18
- **TypeScript**
- **Vite** (development/build tool)
- **Ant Design** (UI components)
- **styled-components** (CSS-in-JS styling)
- **Moment.js** (fast date formatting)
- **ESLint** (linting, code quality)

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
listify/
├── public/
│   └── assets/...         # Static files and favicon
├── src/
│   ├── components/        # Shared, app-level components
│   ├── constants/         # Breakpoints, magic values
│   ├── models/            # TypeScript interfaces/types
│   ├── modules/
│   │   └── Crud/          # All CRUD UI & logic
│   │       ├── components # Header, List, Card, etc.
│   │       ├── context    # Context API for global state
│   ├── pages/             # Page entry points (Crud page)
│   ├── styles/            # Global and font styles
│   └── App.tsx           # Main app entry
├── index.html
├── package.json
└── README.md
```

---

## How it Works
- **Add Card:** Click "New Card" to open the modal. Enter a title and description, then create.
- **Edit Card:** Click "Edit" on any card to open and update details.
- **Delete Card:** Click "Delete" (with confirmation) to remove a card.
- **State:** All cards held in app memory (no backend). Context handles global state for a simple interview showcase.

---

## Contributing

For interview purposes, direct contributions are not needed. If this were to go open-source or to a team, please follow standard fork/pull request procedures and maintain code style and modularity.

---

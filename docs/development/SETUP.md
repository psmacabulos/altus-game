# Development Environment Setup

## Purpose

This document records the steps required to set up the Altus Game development environment. It serves as a reference for recreating the project from scratch and documents the tools and conventions used during development.

As the project evolves, this guide should be updated whenever new development tools or setup steps are introduced.

---

# Technology Stack

| Tool       | Version                  |
| ---------- | ------------------------ |
| Node.js    | Latest LTS (recommended) |
| npm        | Included with Node.js    |
| Vite       | 8.x                      |
| TypeScript | 6.x                      |
| Phaser     | 4.x                      |
| ESLint     | 10.x                     |
| Prettier   | 3.x                      |

---

# Initial Project Setup

The project was bootstrapped using Vite with the Vanilla + TypeScript template.

```bash
npm create vite@latest .
```

Selected options:

* Framework: Vanilla
* Language: TypeScript

---

# Install Dependencies

Install the project dependencies.

```bash
npm install
```

Install Phaser.

```bash
npm install phaser
```

Install development tools.

```bash
npm install -D eslint @eslint/js typescript-eslint prettier
```

---

# Available Scripts

| Command                | Description                                |
| ---------------------- | ------------------------------------------ |
| `npm run dev`          | Starts the development server.             |
| `npm run build`        | Builds the project for production.         |
| `npm run preview`      | Previews the production build locally.     |
| `npm run lint`         | Runs ESLint.                               |
| `npm run format`       | Formats the project using Prettier.        |
| `npm run format:check` | Checks formatting without modifying files. |
| `npm run check`        | Runs both ESLint and Prettier checks.      |

---

# Code Quality

The project uses:

* ESLint for code quality and static analysis.
* Prettier for consistent code formatting.
* TypeScript for type safety.

The goal is to establish coding standards before implementing gameplay features.

---

# Development Workflow

Before creating a commit:

```text
1. Complete the feature
2. Run npm run check
3. Update the project documentation if needed
4. Commit using Conventional Commits
```

---

# Current Status

✅ Repository initialized

✅ Documentation created

✅ Vite configured

✅ TypeScript configured

✅ Phaser installed

✅ ESLint configured

✅ Prettier configured

⬜ Phaser development begins

---

# Notes

This document is expected to evolve as additional tooling, testing, automation, and deployment workflows are introduced during the project.

---

**Last Updated:** 2026-06-26

**Updated By:** Patrick Macabulos
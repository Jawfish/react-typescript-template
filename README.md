# React + TypeScript template

Provides a configured development environment with the following:

- React
- TypeScript
- Tailwind
- Biome
- Sass
- [Zustand](https://github.com/pmndrs/zustand) for state management
- [Vite](https://vitejs.dev/guide/why.html), a dev server
- [Vitest](https://vitest.dev/guide/why.html), a Vite-native unit test framework with an API nearly identical to Jest
- A VSCode workspace with recommended extensions and configuration settings

Clone the repo:

```bash
git clone https://github.com/Jawfish/react-typescript-template.git
cd ./react-typescript-template
```

Install dependencies:

```bash
npm install
```

## `package.json` scripts

| Script     | Description              | Command            |
| ---------- | ------------------------ | ------------------ |
| `install`  | Install dependencies     | `bun install`      |
| `dev`      | Start vite dev server    | `bun dev`          |
| `build`    | Build for production     | `bun build`        |
| `test`     | Run unit tests           | `bun test`         |
| `test:ui`  | Run unit tests with UI   | `bun test:ui`      |
| `lint`     | Run linter               | `bun lint`         |
| `fix`      | Run linter and fix       | `bun fix`          |
| `preview`  | Preview production build | `bun preview`      |


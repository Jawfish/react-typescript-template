# React + TypeScript template

Provides a configured development environment with the following:

- React
- TypeScript
- Tailwind
- ESLint
- Prettier
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
| `install`  | Install dependencies     | `npm install`      |
| `dev`      | Start vite dev server    | `npm run dev`      |
| `build`    | Build for production     | `npm run build`    |
| `test`     | Run unit tests           | `npm run test`     |
| `test:ui`  | Run unit tests with UI   | `npm run test:ui`  |
| `lint`     | Run linter               | `npm run lint`     |
| `lint:fix` | Run linter and fix       | `npm run lint:fix` |
| `preview`  | Preview production build | `npm run preview`  |


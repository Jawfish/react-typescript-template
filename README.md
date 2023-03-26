# React + TypeScript template

Provides a configured development environment with the following:

- React
- TypeScript
- Tailwind
- ESLint
- Prettier
- Sass
- [Vite](https://vitejs.dev/guide/why.html), a dev server
- [Vitest](https://vitest.dev/guide/why.html), a Vite-native unit test framework with an API nearly identical to Jest
- A VSCode workspace with recommended extensions and configuration settings
- A VSCode development container with the same configuration as the workspace

Clone the repo:

```bash
git clone https://github.com/Jawfish/react-typescript-template.git
cd ./react-typescript-template
```

Install dependencies:

```bash
npm install
```

## `package.json` scripts:

| Script    | Description NPM Command  | Command            |
| --------- | ------------------------ | ------------------ |
| `install` | Install dependencies     | `npm install`      |
| `dev`     | Start vite dev server    | `npm run dev`      |
| `build`   | Build for production     | `npm run build`    |
| `test`    | Run unit tests           | `npm run test`     |
| `testui`  | Run unit tests with UI   | `npm run test:ui`  |
| `lint`    | Run linter               | `npm run lint`     |
| `fix`     | Run linter and fix       | `npm run lint:fix` |
| `preview` | Preview production build | `npm run preview`  |

## Development

This project provides a development container using Visual Studio Code's container feature. This allows you to develop in a containerized environment, which means you don't have to worry about installing dependencies on your main OS. You can read more about dev containers [here](https://code.visualstudio.com/docs/remote/containers).

To use the feature, you must have the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension. Then, open the project in VSCode and click the "Reopen in Container" button in the lower right corner of the window. This will open the project in a containerized environment. If you miss the popup, open the command palette (Ctrl+Shift+P by default) and search for "Remote-Containers: Reopen in Container".

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

| Script     | Description NPM Command  | Command            |
| ---------- | ------------------------ | ------------------ |
| `install`  | Install dependencies     | `npm install`      |
| `dev`      | Start vite dev server    | `npm run dev`      |
| `build`    | Build for production     | `npm run build`    |
| `test`     | Run unit tests           | `npm run test`     |
| `test:ui`  | Run unit tests with UI   | `npm run test:ui`  |
| `lint`     | Run linter               | `npm run lint`     |
| `lint:fix` | Run linter and fix       | `npm run lint:fix` |
| `preview`  | Preview production build | `npm run preview`  |

## Development

This project utilizes Visual Studio Code's container feature to provide a development container for your convenience. Development containers allow you to develop in a containerized environment so that you don't have to worry about installing dependencies on your main operating system. You can read more about them [here](https://code.visualstudio.com/docs/remote/containers).

To use the feature, you must install the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension. Then, open the project and click the 'Reopen in Container' button in the lower-right corner of the window. If you miss the popup, open the command palette (Ctrl+Shift+P by default) and search for 'Remote-Containers: Reopen in Container'.

Note: The development container is included to help start new projects using this template. It's useful for projects that benefit from a development container, but overkill for the template itself.

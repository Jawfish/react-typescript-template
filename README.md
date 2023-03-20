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
- A VSCode development container with recommended extensions and configuration settings for the recommended formatter


Clone the repo:
```bash
git clone https://github.com/Jawfish/react-typescript-template.git
cd ./react-typescript-template
```

Install dependencies:
```bash
yarn install
# or
npm install
```

## `package.json` scripts:

| Script    | Description              | Yarn Command   | NPM Command       |
| --------- | ------------------------ | -------------- | ----------------- |
| `install` | Install dependencies     | `yarn install` | `npm install`     |
| `dev`     | Start vite dev server  | `yarn dev`     | `npm run dev`     |
| `build`   | Build for production     | `yarn build`   | `npm run build`   |
| `test`    | Run unit tests           | `yarn test`    | `npm run test`    |
| `testui`  | Run unit tests with UI   | `yarn testui`  | `npm run testui`  |
| `lint`    | Run linter               | `yarn lint`    | `npm run lint`    |
| `fix`     | Run linter and fix       | `yarn fix`     | `npm run fix`     |
| `preview` | Preview production build | `yarn preview` | `npm run preview` |

## Development
This project makes use of Visual Studio Code's dev container feature. This allows you to develop in a containerized environment, which means you don't have to worry about installing dependencies on your machine. You can read more about dev containers [here](https://code.visualstudio.com/docs/remote/containers).

To get started, open the project in VSCode and click the "Reopen in Container" button in the lower right corner of the window. This will open the project in a containerized environment. If you miss the popup, open the command palette (Ctrl+Shift+P by default) and search for "Remote-Containers: Reopen in Container".

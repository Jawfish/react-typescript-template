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
- A VSCode workspace with recommended extensions and configuration settings for the recommended formatter

The intended package manager is yarn, and some scripts assume it is installed.

Make sure yarn is installed:

```bash
npm install -g yarn
```

Clone the repo and set up dependencies
```bash
git clone https://github.com/Jawfish/react-typescript-template.git
cd ./react-typescript-template
yarn install
```

Open the Visual Studio Code workspace
```bash
code ./app.code-workspace
```

To install the recommended extensions, go to the Extensions side panel (Ctrl+Shift+X by default) and type `@recommended` into the search bar, then install the items that appear in the results.

`package.json` scripts:

```powershell
yarn install # install dependencies
yarn dev # start dev server
yarn build # build for production
yarn test # run unit tests
yarn testui # run unit tests with UI
yarn lint # run linter
yarn fix # run linter and fix errors
yarn preview # preview production build
```

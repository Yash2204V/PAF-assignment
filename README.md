<h3 align="center">🎬 MovieDekho: Your Ultimate Movie Companion 🍿</h3>
  
## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)


## <a name="introduction">🤖 Introduction</a>

This project leverages the TMDB API to fetch and display a comprehensive list of movies, including popular titles and detailed information about each movie. By integrating with the TMDB API, users can explore a vast collection of movies, view detailed descriptions, and stay updated with the latest popular movies.

## <a name="tech-stack">⚙️ Tech Stack</a>

- React 19
- TailwindCSS
- Magic UI
- ShadCN
- TypeScript

## <a name="features">🔋 Features</a>

1. **Search Movies with Debouncing**: Efficiently search for movies with a debouncing feature that limits the number of search requests.
2. **Infinite Scrolling**: Enjoy a seamless browsing experience with infinite scrolling, eliminating the need for pagination.
3. **TMDB API Integration**: Fetch movie data in JSON format directly from the TMDB API.
4. **Responsive Design**: Experience a modern, responsive design powered by Magic UI and ShadCN, ensuring a clean and user-friendly interface across all devices.


## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Yash2204V/paf-assignment
cd PAF-assignment
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:
Note: You must have a TMDB Api before proceeding further

```env
VITE_API_KEY=
```


**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser to view the project.


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

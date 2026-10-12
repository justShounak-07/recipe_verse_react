# 🍽️ RecipeVerse — Recipe Discovery App

A responsive recipe discovery application built with **React**, **Tailwind CSS**, and **TheMealDB API**. Search for meals, explore recipe information, view cooking instructions, and manage favorite recipes through React's Context API.

🔗 **Live Demo:** [View RecipeVerse](https://your-deployment-link.vercel.app) _(Replace with your actual deployment URL)_

---

## 📌 Overview

RecipeVerse is a frontend web application designed to make discovering recipes simple and intuitive. It fetches real recipe data from a public API and displays meals in a responsive card-based interface.

The project focuses on practical React development concepts, including component-based architecture, API integration, state management, and dynamic UI rendering.

## ✨ Features

- **🔍 Recipe Search:** Search for meals by name .
- **🌐 Real-Time API Integration:** Fetch meal data, including recipe names, images, categories, cuisine areas, and cooking instructions using TheMealDB API.
- **❤️ Favorites Toggle:** Add or remove recipes from favorites using a toggle button.
- **⚡ Global State Management:** Share favorite IDs and toggle functionality across components using React Context API.
- **🔄 Loading States:** Display feedback while recipe data is being fetched.
- **⚠️ Error Handling:** Show error feedback when the API request fails.
- **🖼️ Dynamic Recipe Cards:** Render recipe information and images from API responses.
- **📱 Responsive Layout:** Use Tailwind CSS responsive utilities to adapt the recipe grid across screen sizes.
- **🎨 Interactive UI:** Apply hover effects, transitions, and visual styling to recipe cards and buttons.
- **⌨️ Controlled Search Form:** Manage search input through React state and handle form submission without a page reload.

## 🛠️ Tech Stack

| Technology            | Purpose                                                            |
| --------------------- | ------------------------------------------------------------------ |
| React                 | Component-based UI development                                     |
| JavaScript (ES6+)     | Application logic and state updates                                |
| Tailwind CSS          | Modern responsive styling and UI design                            |
| React Context API     | Shared favorites state                                             |
| React Hooks           | `useState`, `useContext`                                           |
| Fetch API abstraction | Reusable data fetching through a custom `useFetch` hook            |
| TheMealDB API         | External recipe data                                               |
| Git & GitHub          | Version control and source code management                         |
| Vite                  | Development server and build tooling, if configured in the project |
| Vercel                | Deploy the application for user management                         |

## 📂 Project Structure

The following is a representative structure based on the components shown in the project. Adjust it to match your actual repository.

```text
recipe_verse_react/
├── src/
│   ├── components/
│   │   └── useFetch.jsx
│   ├── recipe-src/
│   │   ├── recipe.jsx
│   │   ├── Favourites.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
└── README.md
```

## 🔮 Future Improvements

- Add a dedicated favorites collection view.
- Persist favorites using `localStorage`.
- Add a detailed recipe view with ingredients and measurements.
- Improve search UX with debouncing and clearer empty-result states.
- Add category filters and more advanced discovery options.
- Improve accessibility, keyboard navigation, and responsive testing.

## 🎯 Learning Outcomes

This project demonstrates practical experience with:

- Building reusable React components.
- Using React Context API for cross-component communication.
- Integrating a public REST API.
- Handling asynchronous requests, loading states, and errors.
- Rendering dynamic lists and updating UI based on state.
- Building responsive interfaces with Tailwind CSS.
- Organizing a frontend project for maintainability.

## 👨‍💻 Author

**Shounak Pal**
Check out my Profile

- GitHub: [@justShounak-07](https://github.com/justShounak-07)

_Built as a hands-on frontend development project to practice React fundamentals, API integration, and shared state management._

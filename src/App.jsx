import React, { useState } from "react";

import Recipe from "./recipe-src/recipe";
import "./recipe-src/recipe.css";

// declaring recipes as a list--
const recipe_card = [
  {
    id: 1,
    title: "Butter paneer",
    description: " Description of Recipe - 1",
  },
  { id: 2, title: "Malai kofta ", description: " Description of Recipe - 2" },
  {
    id: 3,
    title: "Butter Chicken",
    description: " Description of Recipe - 3",
  },
  { id: 4, title: "Malai Chaap", description: " Description of Recipe - 4" },
  {
    id: 5,
    title: "Chilli Chicken",
    description: " Description of Recipe - 5",
  },
  {
    id: 6,
    title: "Paneer Do pyaza",
    description: " Description of Recipe - 6",
  },
];

const App = () => {
  const [search, setSearch] = useState("");

  // filtering list
  const filteredRecipe = recipe_card.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  // renderig the list to display on the list--
  const displayRecipe = filteredRecipe.map((recipe) => (
    <Recipe
      key={recipe.id}
      title={recipe.title}
      description={recipe.description}
    />
  ));

  return (
    <>
      {/* navbar of the page-- */}
      <nav className="navbar">
        <ul className="nav-links">
          <li className="about">
            <a href="#about">ABOUT</a>
          </li>
          <li className="links">
            <a href="#links">LINKS</a>
          </li>
          <li className="menu">
            <a href="#menu">MENU</a>
          </li>
          <li className="account">
            <a href="#account">ACCOUNT</a>
          </li>
        </ul>
      </nav>

      <label htmlFor="recipeSearch"> Search recipe: </label>
      {/* creating search filter */}
      <input
        className="searchInput"
        type="text"
        placeholder=" Search recipe"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* displaying the list */}
      <div> {displayRecipe}</div>
    </>
  );
};

export default App;

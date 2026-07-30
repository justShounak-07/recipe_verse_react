import React, { useState } from "react";

import Recipe from "./recipe-src/recipe";
import "./recipe-src/recipe.css";

// declaring recipes as a list--
const recipeCards = [
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
  const filteredRecipe = recipeCards.filter((item) =>
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
    <div className="bg-amber-400/30 m-0">
      {/* navbar of the page-- */}
      <nav
        className="navbar border-3 border-blue-500 bg-blue-100 min-h-12.5 sticky top-1.25 flex
      justify-end items-center"
      >
        <ul className="nav-links flex gap-7.5 list-none text-blue-800  visited:text-purple-600">
          {/* you have to mention the color of text for link and when visited in tailwind */}
          <li className="/about">
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
      <div className=" sticky top-10">
        <label htmlFor="recipeSearch"> Search recipe: </label>
        {/* creating search filter */}
        <input
          className="searchInput min-h-7.5 min-w-87.5 mt-2.5 border-3 border-double border-blue-500 rounded-[5px] bg-amber-50"
          type="text"
          placeholder=" Search recipe"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* displaying the list */}
      <div className="grid auto-rows-auto grid-cols-[repeat(auto-fit,minmax(150px,350px))] gap-[1em] p-[1em] ">
        {displayRecipe}
      </div>
    </div>
  );
};

export default App;

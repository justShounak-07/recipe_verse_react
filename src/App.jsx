import React from "react";

import Recipe from "./recipe-src/recipe";
import "./recipe-src/recipe.css";
const App = () => {
  return (
    <>
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

      <div>
        <Recipe
          title="Recipe card - 1"
          description=" Description of Recipe - 1"
        />
        <Recipe
          title="Recipe card - 2"
          description=" Description of Recipe - 2"
        />
        <Recipe
          title="Recipe card - 3"
          description=" Description of Recipe - 3"
        />
        <Recipe
          title="Recipe card - 4"
          description=" Description of Recipe - 4"
        />
        <Recipe
          title="Recipe card - 5"
          description=" Description of Recipe - 5"
        />
        <Recipe
          title="Recipe card - 6"
          description=" Description of Recipe - 6"
        />
      </div>
    </>
  );
};

export default App;

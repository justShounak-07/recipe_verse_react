import React, { createContext, useState } from "react";

import Recipe from "./recipe-src/recipe";
import Favourites from "./recipe-src/Favourites";
import useFetch from "./components/useFetch";

// Creating userContext--
const FavContext = createContext();

const App = () => {
  const [recipe, setRecipe] = useState("");
  const [searchRecipe, setsearchRecipe] = useState("");

  //   API CALL
  const { data, error, loading } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchRecipe}`,
    null,
  );

  const recipes = data?.meals ?? [];

  const [favorites, setFavorites] = useState([]);
  // TOGGLE FAVOURITE--
  const toggleFavourite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
  };

  function handleSubmit(e) {
    e.preventDefault();
    setsearchRecipe(recipe);
    setRecipe("");
  }
  return (
    <FavContext.Provider value={{ favorites, toggleFavourite }}>
      <div className="bg-amber-400/30 m-0">
        {/* navbar of the page-- */}
        <nav
          className="navbar border-3 border-blue-500 bg-blue-100 min-h-12.5 sticky top-1.25 flex
      justify-end items-center"
        >
          <ul className="nav-links flex gap-7.5 list-none text-blue-800  visited:text-purple-600">
            {/* you have to mention the color of text for link and when visited in tailwind */}

            <li className="/about">
              <a href="">ABOUT</a>
            </li>
            <li className="links">
              <a href="">LINKS</a>
            </li>
            <li className="menu">
              <a href="">MENU</a>
            </li>
            <li className="account">
              <a href="">ACCOUNT</a>
            </li>
          </ul>
        </nav>
        <div className=" sticky top-10">
          {/* creating search filter */}

          <form
            onSubmit={handleSubmit}
            className="searchInput min-h-7.5 min-w-87.5 mt-2.5 border-3 border-double border-blue-500 rounded-[5px] bg-amber-50"
          >
            <h2>
              <label> Enter Recipe name: </label> <br />
            </h2>
            <input
              type="text"
              id="searchRecipe"
              placeholder=" Recipe name ( ex- Chicken) "
              onChange={(e) => setRecipe(e.target.value)}
              value={recipe}
            />
            <button type="submit"> Search </button>
          </form>

          <Favourites />
          {/* counting the favourite count */}
        </div>
        {/* loading state & error state */}
        {loading && <p> RECIPE COOKING...</p>} {error && <p>{error}</p>}
        {/* displaying the list */}
        <div className="grid auto-rows-auto grid-cols-[repeat(auto-fit,minmax(150px,350px))] gap-[1em] p-[1em] ">
          {!loading &&
            recipes.map((meal) => (
              <Recipe
                key={meal.idMeal}
                id={meal.idMeal}
                title={meal.strMeal}
                Image={meal.strMealThumb}
                description={`Category: ${meal.strCategory} \n
                Place:${meal.strArea},${meal.strCountry}.`}
                recipe={meal.strInstructions}
              />
            ))}
        </div>
      </div>
    </FavContext.Provider>
  );
};

export default App;
export { FavContext }; //exporting to import to any child

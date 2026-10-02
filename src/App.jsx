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
      <div
        className="bg-amber-50
       m-0"
      >
        {/* navbar of the page-- */}
        <nav
          className="navbar border-b border-gray-200 bg-white min-h-12.5 sticky top-1.25 flex flex-wrap
      justify-end px-2 items-center w-full  z-20"
        >
          <ul className="nav-links flex gap-3 sm:gap-6 -sm:text-base list-none text-blue-800 ">
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
        <div className=" sticky top-10 z-10">
          {/* creating search filter */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-3 min-h-12.5  px-3  w-full sm:w-auto border-double mx-6 mt-5 rounded-xl border bg-white
            border-gray-200  p-4 shadow-mde"
          >
            <label className="whitespace-nowrap"> Enter Recipe name: </label>

            <input
              type="text"
              id="searchRecipe"
              placeholder="(ex- Chicken, Lasagna) "
              onChange={(e) => setRecipe(e.target.value)}
              value={recipe}
              className="min-h-5 w-full sm:w-50 border-2 border-gray-300 px-2"
            />
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 font-medium
            "
            >
              Search
            </button>
            {/* counting the favourite count */}
            <div className="flex items-center gap-1.5 rounded-full border-2 border-amber-400 bg-amber-50 px-3 py-1.5 text-sm font-medium text-amber-800">
              <Favourites />
            </div>
          </form>
        </div>
        {/* loading state & error state */}
        {loading && <p> RECIPE COOKING...</p>} {error && <p>{error}</p>}
        {/* displaying the list */}
        <div className="grid auto-rows-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1em] p-[1em] ">
          {/* here for mobile first Approach sm: tablet; lg:desktop; */}
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

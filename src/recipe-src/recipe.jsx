import React, { useContext } from "react";
import { FavContext } from "../App";
const Recipe = ({ id, title, description, recipe, Image }) => {
  const { favorites, toggleFavourite } = useContext(FavContext); // importing the context
  const isFav = favorites.includes(id);
  // treat id- as Array for API instead of Number

  return (
    <div className="">
      <div className="card hover:border-greeen-300 flex h-80 flex-col items-center overflow-scroll rounded-xl border-[5px] bg-green-800/90 p-4 text-amber-100 duration-500 hover:scale-107 hover:border-green-700 hover:bg-amber-400 hover:text-green-700 sm:p-7.5">
        <div className="title text-2xl font-extrabold"> {title} </div>
        <div className="description mt-auto"> {description}</div>
        <div>
          <img
            src={Image}
            alt={title}
            className="h-32 w-50 rounded-lg object-cover sm:w-48"
          />
        </div>

        <button
          className="mt-1 rounded-xl border-2 bg-green-200 p-1.5 text-black hover:bg-green-800/85"
          onClick={() => toggleFavourite(id)}
        >
          {isFav ? " Favourited" : " Not Favourite"}
        </button>

        {/* recipe-display */}
        <div className="recipe mt-auto"> {recipe}</div>
      </div>
    </div>
  );
};

export default Recipe;

import React, { useContext } from "react";
import { FavContext } from "../App";
const Recipe = ({ id, title, description, recipe, Image }) => {
  const { favorites, toggleFavourite } = useContext(FavContext); // importing the context
  const isFav = favorites.includes(id);
  // treat id- as Array for API instead of Number

  return (
    <div className="">
      <div className="card flex min-h-62.5 flex-col items-center rounded-xl border-[5px] border-double border-amber-300 bg-green-800/85 p-7.5 text-amber-100 duration-500 hover:scale-110">
        <div className="title text-xl"> {title} </div>
        <div className="description mt-auto"> {description}</div>
        <div>
          <img
            src={Image}
            alt={title}
            className="h-32 w-full rounded-lg object-cover"
          />
        </div>
        <div className="recipe mt-auto"> {recipe}</div>

        <button
          className="mt-1 rounded-xl border-2 p-1.5"
          onClick={() => toggleFavourite(id)}
        >
          {isFav ? " Favourited" : " Not Favourite"}
        </button>
      </div>
    </div>
  );
};

export default Recipe;

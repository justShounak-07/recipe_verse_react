import React, { useContext } from "react";
import { FavContext } from "../App";

const Favourites = () => {
  const { favorites } = useContext(FavContext);
  return (
    <>
      <div>FAVORITE RECIPES : {favorites.length} </div>
    </>
  );
};

export default Favourites;

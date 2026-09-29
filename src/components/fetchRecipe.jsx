// import React from "react";
// import { useState, useEffect } from "react";
// import useFetch from "./usefetch";

// function FetchRecipes() {
//   const [recipe, setRecipe] = useState("");
//   const [searchRecipe, setsearchRecipe] = useState("paneer");

//   //   API CALL
//   const { data, error, loading } = useFetch(
//     `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchRecipe}`,
//     null,
//   );

//   // for recipe API search loading recipe
//   if (loading) return <h2> COOKING RECIPE.. </h2>;

//   console.log(data);

//   // form function
//   function handleSubmit(e) {
//     e.preventDefault();
//     setsearchRecipe(recipe);
//     setRecipe("");
//   }

//   function updateRecipe(e) {
//     setRecipe(e.target.value);
//   }

//   return <div></div>;
// }

// export default FetchRecipes;

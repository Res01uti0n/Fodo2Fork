import React, { useState } from "react";

import { Search } from "../components/Search";
import { RecipeList } from "../components/RecipeList";
import { recipeData } from "../data/tempList";

export const Recipes = () => {
  const [values, setValues] = useState({
    recipes: recipeData,
    search: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, search: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, search: e.target.value });
  };

  return (
    <>
      <Search
        search={values.search}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <RecipeList recipes={values.recipes} />
    </>
  );
};

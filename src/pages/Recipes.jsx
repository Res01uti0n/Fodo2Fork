import React, { useState, useEffect } from "react";

import { Search } from "../components/Search";
import { RecipeList } from "../components/RecipeList";

export const Recipes = () => {
  const [values, setValues] = useState({
    recipes: [],
    search: "",
  });

  const getRecipes = async () => {
    fetch(
      "https://community-food2fork.p.rapidapi.com/search?q=shredded%20chicken",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-food2fork.p.rapidapi.com",
          "x-rapidapi-key":
            `${process.env.API_KEY}`,
        },
      }
    )
      .then((response) => {
        console.log(response);
        setValues({...values, recipes: response.json().recipes})
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getRecipes();
  }, []);

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

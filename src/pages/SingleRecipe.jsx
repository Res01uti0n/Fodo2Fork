import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { recipeData } from "../data/tempDetails";


export const SingleRecipe = ({ match }) => {
  const [values, setValues] = useState({
    recipe: recipeData,
    id: match.params.id,
    loading: false,
  });

  useEffect(()=> {
    fetch(`https://community-food2fork.p.rapidapi.com/get?rId=${values.id}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "community-food2fork.p.rapidapi.com",
        "x-rapidapi-key": "52df75e8f3mshaea84a63399c3ebp14d0f0jsn2c3f0c90b6dc",
      },
    })
      .then((response) => {
        console.log(response);
        setValues({...values, recipe: response.json().recipe, loading: false})
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  if (values.loading) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <h2 className="text-uppercase text-orange text-center">
              Loading recipe ...
            </h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Link to="/recipes" className="btn btn-warning text-capitalize mb-5">
            Back to recipes list
          </Link>

          <img
            src={values.recipe.image_url}
            className="d-block w-100"
            style={{ maxHeight: "30rem" }}
            alt="recipe"
          />
        </div>

        <div className="col-10 mx-auto col-md-6 my-3">
          <h6 className="text-uppercase">{values.recipe.title}</h6>

          <h6 className="text-capitalize text-slanted text-warning">
            Provided by {values.recipe.publisher}
          </h6>

          <a
            href={values.recipe.publisher_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-2 text-capitalize"
          >
            Recipe url
          </a>

          <ul className="list-group mt-4">
            <h2 className="mt-3 mb-4">Ingredients</h2>

            {values.recipe.ingredients.map((item, index) => (
              <li key={index} className="list-group-item text-slanted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

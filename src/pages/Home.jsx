import React from "react";
import { Link } from "react-router-dom";

import { Header } from "../components/Header";

export const Home = () => {
  return (
    <Header title="Amazing recipes">
      <Link
        to="/recipes"
        className="text-uppercase btn btn-secondary btn-lg mt-3"
      >
        Search recipes
      </Link>
    </Header>
  );
};

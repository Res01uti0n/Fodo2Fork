import React from "react";
import { Link } from "react-router-dom";

import { Header } from "../components/Header";

export const Default = () => {
  return (
    <Header title="404" styleClass="default-hero">
      <h2 className="text-light text-uppercase">You`re in the wrong place</h2>

      <Link to="/" className="text-uppercase btn btn-secondary btn-lg mt-3">
        Return home
      </Link>
    </Header>
  );
};

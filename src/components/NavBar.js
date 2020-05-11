import React from "react";

import Logo from "../images/logo.svg"
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <img src={Logo} alt="Logo" />
      </Link>

      <div className="collapse navbar show ml-sm-5">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link to="/" className="navbar-brand">
              Home
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/recipes" className="navbar-brand">
              Recipes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

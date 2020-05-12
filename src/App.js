import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages/Home";
import { Recipes } from "./pages/Recipes";
import { SingleRecipe } from "./pages/SingleRecipe";
import { Default } from "./pages/Default";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />

      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes" exact component={Recipes} />
          <Route path="/recipes/:id" component={SingleRecipe} />
          <Route path="*" component={Default} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;

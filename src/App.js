import React from "react";
import Home from "./components/Home";
import Error from "./components/error";
import { Switch, Route } from "react-router-dom";
import Movie from "./components/Movie";
function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/movie/:id">
        <Movie />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
  );
}

export default App;

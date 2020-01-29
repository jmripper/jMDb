import React from "react";
import { Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Movie from "./Components/Movie/Movie";
import Nav from "./Components/Nav/Nav";
import Add from "./Components/Add/Add";
import Update from "./Components/Update/Update";
import "./App.css";

const App = () => {
  return (
    <>
      <Nav />
      <main>
        <Route path="/" exact render={props => <Home {...props} />} />
        <Route path="/movie/:id" render={props => <Movie {...props} />} />
        <Route path="/new_movie" render={props => <Add {...props} />} />
        <Route path="/update/:id" render={props => <Update {...props} />} />
      </main>
    </>
  );
};

export default App;

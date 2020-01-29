import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Home from "./Components/Home/Home";
import Movie from "./Components/Movie/Movie";
import Nav from "./Components/Nav/Nav";
import Add from "./Components/Add/Add";
import Update from "./Components/Update/Update";
import Delete from "./Components/Delete/Delete";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
    };
  }

  async componentDidMount() {
    const url = "https://movie-express-custom-api.herokuapp.com/";

    axios.get(url).then(response => {
      const movieList = response.data;
      this.setState({ movieList });
    });
  }

  render() {
    return (
      <>
        <Nav />
        <main>
            <Route
              path="/"
              exact
              render={props => <Home {...props} {...this.state} />}
            />
            <Route
              path="/movie/:id"
              render={props => <Movie {...props} {...this.state} />}
            />
            <Route
              path="/new_movie"
              render={props => <Add {...props} {...this.state} />}
            />
            <Route
              path="/update/:id"
              render={props => <Update {...props} {...this.state} />}
            />
            <Route
              path="/remove/:id"
              render={props => <Delete {...props} {...this.state} />}
            />
        </main>
      </>
    );
  }
}

export default App;

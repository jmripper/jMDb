import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Movie from "./Components/Movie/Movie";
import Nav from "./Components/Nav/Nav";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      movieList : []
    };
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  async componentDidMount() {
    const url = "https://movie-express-custom-api.herokuapp.com/";

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({ movieList: response})
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
            render={routerProps => <Home {...routerProps} {...this.state} />}
          />
          <Route
            path="/:title"
            render={routerProps => <Movie {...routerProps} {...this.props} />}
          />
        </main>
      </>
    );
  }
}

export default App;

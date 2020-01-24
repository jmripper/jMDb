import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Movie from "./Components/Movie/Movie";
import Nav from "./Components/Nav/Nav";
import Add_New from './Components/Add_New/AddNew'
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      movieList: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }


  async componentDidMount() {
    const url = "https://movie-express-custom-api.herokuapp.com/";

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({ movieList: response });
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
            render={routerProps => <Movie {...routerProps} {...this.state} />}
          />
          <Route
            path="/new_movie"
            render={routerProps => <Add_New {...routerProps} {...this.state} />}
          ></Route>
        </main>
      </>
    );
  }
}

export default App;

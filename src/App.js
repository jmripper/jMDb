import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Movie from "./Components/Movie/Movie";
import Nav from "./Components/Nav/Nav";
import Add from "./Components/Add/Add";
import Update from "./Components/Update/Update";
import "./App.css";
import axios from "axios";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 1em auto;
  border-color: #000000;
`;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      loading: true
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const url = "https://movie-express-custom-api.herokuapp.com/";

    axios.get(url).then(res => {
      this.setState({ movieList: res.data, loading: false });
    });
  };

  render() {
    if (this.state.loading === true) {
      return (
        <>
          <Nav />
          <ClipLoader
            css={override}
            sizeUnit={"px"}
            size={50}
            color={"#000000"}
            loading={this.state.loading}
          />
        </>
      );
    } else {
      return (
        <>
          <Nav />
          <main>
            <Route
              path="/"
              exact
              render={props => (
                <Home getData={this.getData} {...props} {...this.state} />
              )}
            />
            <Route
              path="/movie/:id"
              render={props => (
                <Movie {...props} {...this.state} getData={this.getData} />
              )}
            />
            <Route
              path="/new_movie"
              render={props => <Add {...props} {...this.state} />}
            />
            <Route
              path="/update/:id"
              render={props => (
                <Update getData={this.getData} {...this.state} {...props} />
              )}
            />
          </main>
        </>
      );
    }
  }
}

export default App;

import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Movie from "./Components/Movie/Movie";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  componentDidMount() {
    const url = "https://movie-express-custom-api.herokuapp.com/"

    fetch(url)
     .then(response => response.json())
     .then(response => {
      console.log(response)
    })

  }
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          </header>
          <main>
          <Route path="/" exact component={Home} />
          <Route path="/:title" render={routerProps => (
            <Movie 
            {...routerProps} 
            {...this.state} />
          )} />
        </main>
      </div>
    );
  }
}

export default App;

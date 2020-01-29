import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: []
    };
    this.getData = this.getData.bind(this);
  }

componentDidMount() {
  this.getData()
}

getData = () => {
    const url = "https://movie-express-custom-api.herokuapp.com/";

    axios.get(url).then(res => {
      this.setState({ movieList: res.data });
    });
  }

  render() {
    const list = this.state.movieList;
    const movies = list.map((movie, i) => (
      <li key={i} className="movie-item">
        <Link to={`/movie/${movie._id}`}>
          <img src={movie.poster} alt={movie.title} className="movie-poster" />
        </Link>
      </li>
    ));

    return (
      <>
        <div className="list-wrapper">
          <div className="list-container">
            <ul>{movies}</ul>
          </div>
        </div>
      </>
    );
  }
}

export default Home;

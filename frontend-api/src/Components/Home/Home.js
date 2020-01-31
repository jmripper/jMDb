import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = props => {
    const list = props.movieList;
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

export default Home;

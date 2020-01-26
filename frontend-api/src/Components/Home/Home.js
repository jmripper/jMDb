import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = props => {
  const list = props.movieList;
  console.log(list)
  const movies = list.map((movie, i) => (
    <li key={i} className="movie-item">
      <Link to={{ pathname: "/movie/" + movie._id, state: { movie: movie } }}>
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
};

export default Home;

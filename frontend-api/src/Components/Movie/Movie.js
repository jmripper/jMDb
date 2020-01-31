import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Movie.css";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: []
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

componentDidMount() {
    const url = "https://movie-express-custom-api.herokuapp.com/movie/" + this.props.match.params.id;

    axios.get(url)
      .then(res => {
        this.setState({ movie: res.data[0]})
    });
  }

handleDelete() {
    // evt.preventDefault()
    // const movie = this.state.movie.filter( item => item.id !== id );
    axios.delete(
        "https://movie-express-custom-api.herokuapp.com/delete/" + this.props.match.params.id
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          movie: []
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { movie } = this.state

    const date = new Date(movie.released);
    const options = { year: "numeric", month: "long", day: "numeric" };
    options.timeZone = "UTC";
    const releaseDate = date.toLocaleDateString("en-US", options);

    return (
      <>
        <div className="main-movie-wrapper">
          <div className="movie-data-container">
            <div className="title-wrapper">
              <div className="title-block">
                <h2>{this.state.movie.title}</h2>
              </div>
              <div className="title-sub-data">
                <p className="sub-text-right">{movie.year}</p>|
                <p className="sub-text-right sub-text-left">{movie.rated}</p>|
                <p className="sub-text-right sub-text-left">{movie.runtime}</p>
              </div>
            </div>
            <div className="movie-data">
              <img
                src={movie.poster}
                className="movie-image"
                alt={movie.title}
              />
              <div className="movie-detail">
                <p className="movie-info">{movie.plot}</p>
                <p className="movie-info">
                  <span className="bold">Director:</span> {movie.director}
                </p>
                <p className="movie-info">
                  <span className="bold">Actors:</span> {movie.actors}
                </p>
                <p className="movie-info">
                  <span className="bold">Genre:</span> {movie.genre}
                </p>
                <p className="movie-info">
                  <span className="bold">Writers:</span> {movie.writer}
                </p>
                <p className="movie-info">
                  <span className="bold">Release Date:</span> {releaseDate}
                 </p>
                <p className="movie-info">
                  <span className="bold">Production:</span> {movie.production}
                </p>
                <p className="movie-info">
                  <span className="bold">imdbRating:</span> {movie.imdbRating}
                </p>
                <p className="movie-info-last">
                  <span className="bold">Country:</span> {movie.country}
                </p>
                <p></p>
              </div>
            </div>
          </div>
          <div className="bottom-btn-container">
            <Link
              to={{ pathname: "/update/" + movie._id, state: {movie: movie} }}
            >
              <button className="bottom-btn">Update Movie</button>
            </Link>
              <button className="bottom-btn" onClick={this.handleDelete}>
                Delete Movie
              </button>
          </div>
        </div>
      </>
    );
  }
}

export default Movie;

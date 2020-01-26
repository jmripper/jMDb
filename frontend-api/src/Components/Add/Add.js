import React, { Component } from "react";
import "./Add.css";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: ["Drama", "Thriller", "Comedy", "Romance"],
      actors: "",
      title: "",
      year: "2020",
      rated: "R",
      released: "",
      director: "",
      plot: "",
      poster: ""
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitHandler(evt) {
    evt.preventDefault();
    const url = "https://movie-express-custom-api.herokuapp.com/create";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        genre: [this.state.genre],
        writer: ["Unknown"],
        actors: [this.state.actors],
        language: ["English"],
        country: ["USA"],
        title: this.state.title,
        year: this.state.year,
        rated: this.state.rated,
        released: this.state.released,
        runtime: "130 min",
        director: this.state.director,
        plot: this.state.plot,
        poster: this.state.poster,
        metascore: "80",
        imdbRating: "9.2",
        imdbVotes: "8",
        imdbID: "000000000",
        type: "movie",
        dvd: "N/A",
        boxOffice: "N/A",
        production: "N/A",
        website: "N/A",
        response: true
      })
    });
  }

  handleChange(evt) {
    evt.preventDefault();
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    const {
      title,
      year,
      released,
      rated,
      director,
      plot,
      poster,
      genre,
      actors
    } = this.state;
    return (
      <>
        <div className="form-wrapper">
          <h3>Add A New Movie:</h3>
          <div className="form-container">
            <form className="create-form" onSubmit={this.submitHandler}>
                  <label htmlFor="title">Title:</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Movie Title"
                    value={title}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="year">Year:</label>
                  <input
                    type="text"
                    name="year"
                    placeholder="Year"
                    value={year}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="released">Release Date:</label>
                  <input
                    type="date"
                    name="release"
                    placeholder=""
                    value={released}
                    onChange={this.handleChange}
                  />
                <label htmlFor="rated">Rated:</label>
                <input
                  type="text"
                  name="rated"
                  placeholder="PG-13"
                  value={rated}
                  onChange={this.handleChange}
                />
              <label htmlFor="director">Director:</label>
              <input
                type="text"
                name="director"
                placeholder="Director"
                value={director}
                onChange={this.handleChange}
              />
              <label htmlFor="plot">Plot:</label>
              <input
                type="text"
                name="plot"
                placeholder="Plot"
                value={plot}
                onChange={this.handleChange}
              />
              <label htmlFor="poster">Poster:</label>
              <input
                type="text"
                name="poster"
                placeholder="poster"
                value={poster}
                onChange={this.handleChange}
              />
              <label htmlFor="genre">Genres:</label>
              <input
                type="text"
                name="genre"
                placeholder="genre"
                value={genre}
                onChange={this.handleChange}
              />
              <label htmlFor="actors">Actors:</label>
              <input
                type="text"
                name="actors"
                placeholder="actors"
                value={actors}
                onChange={this.handleChange}
              />
              <input
                className="submit-button" 
                type="submit" 
                value="Create New Movie" />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Add;

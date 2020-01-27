import React, { Component } from "react";
import axios from "axios";
import "./Add.css";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: "",
      actors: "",
      title: "",
      year: "2020",
      rated: "",
      released: "",
      director: "",
      plot: "",
      poster: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    
  axios.post("https://movie-express-custom-api.herokuapp.com/create", {
        genre: [
          this.state.genre
        ],
        writer: [
          "Unknown"
        ],
        actors: [
          this.state.actors
        ],
        language: [
          "English"
        ],
        country: [
          "USA"
        ],
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
      .then(response => {
        console.log(response);
        console.log(response.data);
        alert("movie was created!")
      })
      .catch(err => console.log(err));
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
            <form className="create-form" onSubmit={this.handleSubmit}>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                name="title"
                placeholder="Harry Potter and the Goblet of Fire"
                value={title}
                required
                onChange={this.handleChange}
              />
              <label htmlFor="year">Year:</label>
              <input
                type="text"
                name="year"
                placeholder="2005"
                value={year}
                required
                onChange={this.handleChange}
              />
              <label htmlFor="released">Release Date:</label>
              <input
                type="date"
                name="released"
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
                placeholder="Mike Newell"
                value={director}
                onChange={this.handleChange}
              />
              <label htmlFor="plot">Plot:</label>
              <textarea
                name="plot"
                rows="5"
                placeholder="Harry Potter (Daniel Radcliffe) finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares."
                value={plot}
                onChange={this.handleChange}
              />
              <label htmlFor="poster">Poster:</label>
              <textarea
                name="poster"
                rows="2"
                placeholder="https://images-na.ssl-images-amazon.com/images/I/51pFF7a2j%2BL._AC_.jpg"
                value={poster}
                onChange={this.handleChange}
              />
              <label htmlFor="genre">Genres:</label>
              <input
                type="text"
                name="genre"
                placeholder="Adventure, Family, Fantasy, Mystery"
                value={genre}
                onChange={this.handleChange}
              />
              <label htmlFor="actors">Actors:</label>
              <textarea
                name="actors"
                rows="2"
                placeholder="Daniel Radcliffe, Emma Watson, Rupert Grant, Tom Felton"
                value={actors}
                onChange={this.handleChange}
              />
              <input
                className="submit-button"
                type="submit"
                value="Create New Movie"
              />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Add;

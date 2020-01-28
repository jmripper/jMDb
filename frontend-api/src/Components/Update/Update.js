import React, { Component } from "react";
import "./Update.css";
import axios from "axios";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "",
      rated: "",
      movie: props.location.state.movie
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    evt.preventDefault();
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const url =
      "https://movie-express-custom-api.herokuapp.com/update/" +
      this.props.params.match._id;
    axios
      .put(url, {
        year: this.state.year,
        rated: this.state.rated
      })
      .then(response => {
        console.log(response);
        console.log(response.data);
        alert("movie was updated!");
      })
      .catch(err => console.log(err));
  }

  render() {
    const { year, rated, movie } = this.state;
    return (
      <>
        <div className="update-container">
          <h3>Update {movie.title}'s Information:</h3>
          <form className="update-form" onSubmit={this.handleSubmit}>
            <label htmlFor="year">Year:</label>
            <input
              type="text"
              name="year"
              placeholder="2020"
              value={year}
              required
              onChange={this.handleChange}
            />
            <label htmlFor="title">Rating:</label>
            <input
              type="text"
              name="rated"
              placeholder=""
              value={rated}
              required
              onChange={this.handleChange}
            />
            <input className="submit-button" type="submit" value="Update" />
          </form>
        </div>
      </>
    );
  }
}

export default Update;

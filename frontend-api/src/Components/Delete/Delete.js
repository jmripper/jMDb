import React from 'react';
import axios from 'axios';

const Delete = props => { 
    const movie = props.location.state.movie;
    console.log(movie)
    // remove = movie => {
    const url = "https://movie-express-custom-api.herokuapp.com/delete/" + props.match.params.id 

    axios.delete(url)
    .then(response => {
        console.log(response)
        alert("movie deleted")
    })
    .catch(err => console.log(err));
// }
    return (
      <>
      </>
    );
  };
  
export default Delete;
  
import React from 'react';
import './moviecard.css'


const MovieCard = ({ movie }) => {
  return (
    <div className="moviecard">
      <img src={movie.Poster}/>
      <h2>{movie.Title}</h2>
      <span className="badge">{movie.Year}</span>
    </div>
  );
};

export default MovieCard;
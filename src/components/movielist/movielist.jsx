import React from "react";
import './movielist.css';
import MovieCard from "../moviecard/moviecard";

const MovieList = ({ searchResult }) => {
  if (searchResult) {
    if (searchResult.Response == "False") {
      return <p>No titles matched.</p>;
    } else {
      return (
        <div className="movielist">
          {searchResult.Search.map((movie, key) => {
            return <MovieCard movie={movie}/>;
          })}
        </div>
      );
    }
  } else {
    return <p>No Title Match</p>;
  }
};

export default MovieList;

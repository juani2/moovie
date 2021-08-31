import React, { useState, useEffect } from "react";
import "./stylesheets/base.css";

import Navbar from "./components/navbar/Navbar";
import MovieList from './components/movielist/movielist'
import { OMDB } from "./OMDB/Search";

const App = () => {
  const q = new OMDB();
  const [searchResult, setSearchResult] = useState();
  useEffect(()=>{
    fetch(`${q.URI}&s=batman`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResult(data);
      })
      .catch(console.err);
  }, searchResult)
  
  const inputChangeHandler = (e) => {
    console.log(e.target.value);
    q.FIELD_SEARCH = e.target.value;

    fetch(`${q.URI}&s=${q.FIELD_SEARCH}`)
      .then((response) => response.json())
      .then(data => {
        setSearchResult(data);
      })
      .catch(console.err);
  };

  return (
    <>
      <Navbar inputChangeHandler={inputChangeHandler} />
      <div className="container">
        <MovieList searchResult={searchResult} />
      </div>
    </>
  );
};

export default App;

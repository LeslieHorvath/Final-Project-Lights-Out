import React, { useState, useContext } from "react";
//Styling
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { MovieContext } from "./Context/MovieContext";

require("dotenv").config({ path: "../../.env" });

const SearchBar = () => {
  //Used to concat between tv and movie for the api

  //Api keys
  const { REACT_APP_API_KEY } = process.env;

  //Sets the default search state
  const [searchTerm, SetSearchTerm] = useState("");
  const { movies, setMovies, searchType, setSearchType } =
    useContext(MovieContext);
  const SEARCH_API = `https://api.themoviedb.org/3/search/${searchType}?&api_key=${REACT_APP_API_KEY}&query=`;
  //Used to push the search to /results
  const history = useHistory();

  const handleOnSubmit = (ev) => {
    ev.preventDefault();

    fetch(SEARCH_API + searchTerm)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
    history.push("/results");
  };

  const handleOnChange = (ev) => {
    SetSearchTerm(ev.target.value);
  };

  return (
    <>
      <Div>
        <span>
          <TvInput
            type="radio"
            id="tv"
            name="radio"
            value="tv"
            onClick={() => setSearchType("tv")}
          />
          <label for="tv">TV</label>
        </span>
        <span>
          <MovieInput
            type="radio"
            id="movies"
            name="radio"
            value="movies"
            onClick={() => setSearchType("movie")}
          />
          <label for="movies">Movies</label>
        </span>
      </Div>
      <form onSubmit={handleOnSubmit}>
        <Search
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleOnChange}
        ></Search>
      </form>
    </>
  );
};

const Search = styled.input`
  font-size: 20px;
  color: #8a5082;
  background-color: #051622;
  outline: none;
  border: 2px solid #8a5082;
  border-radius: 10px;
  height: 30px;
  width: 250px;
  margin-left: 10px;
  &::placeholder {
    color: #8a5082;
  }
`;

const MovieInput = styled.input``;

const TvInput = styled.input``;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`;

export default SearchBar;

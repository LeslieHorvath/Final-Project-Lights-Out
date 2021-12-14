import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieContext } from "./Context/MovieContext";
require("dotenv").config({ path: "../../.env" });
const { REACT_APP_API_KEY } = process.env;
const SEARCH_API = `https://api.themoviedb.org/3/search/tv?&api_key=${REACT_APP_API_KEY}&query=`;

const SearchBar = () => {
  const [searchTerm, SetSearchTerm] = useState("");
  const { movies, setMovies } = useContext(MovieContext);
  const [Tvshows, setTvshows] = useState([]);
  const history = useHistory();

  const handleOnSubmit = (ev) => {
    ev.preventDefault();

    fetch(SEARCH_API + searchTerm)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      });
    history.push("/results");
  };

  const handleOnChange = (ev) => {
    SetSearchTerm(ev.target.value);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <Search
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleOnChange}
      ></Search>
    </form>
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
  margin-left: 300px;
  &::placeholder {
    color: #8a5082;
  }
`;
export default SearchBar;

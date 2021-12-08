import React, { useContext } from "react";
import styled from "styled-components";
import MovieResults from "./MovieResults";
import { MovieContext } from "./Context/MovieContext";
import Header from "./Header";
const Results = () => {
  const { movies, setMovies } = useContext(MovieContext);
  console.log(movies);
  return (
    <>
    <Header />
    <Wrapper>
      {movies.map((movie) => (
        <MovieResults key={movie.id} {...movie} />
      ))}
    </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
background-color: #22254b;
display: flex;
flex-wrap: wrap;
justify-content: center;
`

export default Results;

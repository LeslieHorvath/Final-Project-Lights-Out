import React, { useContext } from "react";
//Styling
import styled from "styled-components";
//Children
import MovieResults from "./MovieResults";
import Header from "./Header";
import FooterResults from "./FooterResults";
//Context
import { MovieContext } from "./Context/MovieContext";

const Results = () => {
  const { movies, searchType } = useContext(MovieContext);

  if (movies.length === 0)
    return (
      <>
        <Header />
        <Container>
          <h1>Please re-enter another search</h1>
        </Container>
        <FooterResults />
      </>
    );
  return (
    <>
      <Header />
      <Wrapper>
        {movies.map((movie) => (
          <MovieResults key={movie.id} {...movie} searchType={searchType} />
        ))}
      </Wrapper>
      <FooterResults />
    </>
  );
};

const Wrapper = styled.div`
  background-color: #22254b;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  height: 1790px;
`;

const Div = styled.div`
  display: flex;
  position: relative;
  bottom: 100%;
`;

const Container = styled.div`
  background-color: #22254b;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #deb992;
`;

export default Results;

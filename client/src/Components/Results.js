import React, { useContext } from "react";
import styled from "styled-components";
import MovieResults from "./MovieResults";
import { MovieContext } from "./Context/MovieContext";
import Header from "./Header";
import FooterResults from "./FooterResults";
const Results = () => {
  const { favoriteMovies, movies, setMovies } = useContext(MovieContext);
  console.log(movies);
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
          <MovieResults key={movie.id} {...movie} />
        ))}
      </Wrapper>
      <Div>
        <FooterResults />
      </Div>
    </>
  );
};

const Wrapper = styled.div`
  background-color: #22254b;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
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
`
export default Results;

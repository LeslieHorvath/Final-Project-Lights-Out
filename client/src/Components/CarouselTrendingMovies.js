import React, { useEffect, useState } from "react";
//Styling
import styled from "styled-components";

import Carousel from "react-elastic-carousel";

//Gets the poster_path from the image api
import MovieTrending from "./MovieTrending";

//Api keys
require("dotenv").config({ path: "../../.env" });
const { REACT_APP_API_KEY } = process.env;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${REACT_APP_API_KEY}&page=1`;

//Carousel that shows the top 20 trending movies
const CarouselTrendingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);
  return (
    <>
      <StyledCarousel focusOnSelect={true} itemsToShow={7}>
        {movies.map((movie) => (
          <MovieTrending key={movie.id} {...movie} />
        ))}
      </StyledCarousel>
    </>
  );
};

const StyledCarousel = styled(Carousel)``;

export default CarouselTrendingMovies;

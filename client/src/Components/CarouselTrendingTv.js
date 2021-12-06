import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import Tv from "./Tv";
require("dotenv").config({ path: "../../.env" });
const { REACT_APP_API_KEY } = process.env;
// console.log(process.env)
// console.log(REACT_APP_API_KEY);
const FEATURED_API = `https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=${REACT_APP_API_KEY}&page=1`;
const CarouselTrendingTv = () => {
  const [TvShows, setTvShows] = useState([]);
  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTvShows(data.results);
      });
  }, []);
  return (
    <>
      <StyledCarousel focusOnSelect={true} itemsToShow={7}>
        {TvShows.map((tvshow) => (
          <Tv key={tvshow.id} {...tvshow} />
        ))}
      </StyledCarousel>
    </>
  );
};

const StyledCarousel = styled(Carousel)``
export default CarouselTrendingTv;

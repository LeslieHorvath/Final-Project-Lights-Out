import React, { useEffect, useState } from "react";
//Styling
import styled from "styled-components";

import Carousel from "react-elastic-carousel";

//Gets the tv posters from the image api
import Tv from "./Tv";

//Api keys
require("dotenv").config({ path: "../../.env" });
const { REACT_APP_API_KEY } = process.env;
const FEATURED_API = `https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=${REACT_APP_API_KEY}&page=1`;

//Carousel that displays the top trending tv shows
const CarouselTrendingTv = () => {
  const [TvShows, setTvShows] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
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

const StyledCarousel = styled(Carousel)``;

export default CarouselTrendingTv;

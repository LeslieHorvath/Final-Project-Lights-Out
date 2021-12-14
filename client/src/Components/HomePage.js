import React from "react";
import Header from "./Header";
import starBackground from "../assets/lights-out-bg3.jpg";
import styled from "styled-components";
import CarouselTrendingMovies from "./CarouselTrendingMovies";
import CarouselTrendingTv from "./CarouselTrendingTv";
import FooterHomepage from "./FooterHomepage";
const HomePage = () => {
  return (
    <Wrapper>
      <Header />
      <BgImage src={starBackground} alt={"stars"} />
      <Carousel>
        <TrendingMovies>Trending Movies</TrendingMovies>
        <CarouselTrendingMovies />
        <TrendingTv>Trending TV Shows</TrendingTv>
        <CarouselTrendingTv />
      </Carousel>
      <FooterHomepage />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const BgImage = styled.img`
  position: absolute;
  width: 100%;
  height: 126vh;
  z-index: 1;
`;

const Carousel = styled.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
`;

const TrendingMovies = styled.h2`
  padding-left: 70px;
  color: #deb992;
  margin-top: 20px;
`;

const TrendingTv = styled.h2`
  padding-left: 70px;
  color: #deb992;
  margin-top: 0px;
`;
export default HomePage;

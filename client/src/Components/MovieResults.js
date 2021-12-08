import React from "react";
import styled from "styled-components";
import { FaLightbulb } from "react-icons/fa";
import AltImage from "../assets/alt-image2.jpg"
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const MovieResults = ({ title, poster_path, overview, vote_average }) => {
  return (
    <>
      <Wrapper>
        <MovieContainer>
          <Img src={poster_path ? (IMG_API + poster_path) : (AltImage) } alt={title} />
          <MovieInfo>
            <H3>IMDb rating:</H3>
            <Average>{vote_average}</Average>
            <FaLightbulb size={22} color={"yellow"} />
          </MovieInfo>
          <MovieOverview>
            <MovieTitle>{title}</MovieTitle>
            <H2>Overview</H2>
            <Para>{overview}</Para>
          </MovieOverview>
        </MovieContainer>
      </Wrapper>
    </>
  );
};

const MovieTitle=styled.h4`
font-weight: 600;
display: flex;
justify-content: center;`
const Wrapper = styled.div`
  padding-top: 20px;
`;

const Para = styled.p`
  padding: 0px 7px;
  line-height: 1.2;
`;

const MovieOverview = styled.div`
  max-height: 85%;
  overflow: auto;
  width: 275px;
  border-radius: 7px;
  background-color: white;
  position: absolute;
  bottom: 55px;
  left: 0;
  right: 0;
  transform: translateX(100%);
  transition: transform 0.4s ease-in-out;
`;

const MovieContainer = styled.div`
  width: 260px;
  padding-right: 10px;
  position: relative;
  overflow: hidden;
  &:hover ${MovieOverview} {
    width: 260px;
    transform: translateX(0%);
  }
`;

const Img = styled.img`
  width: 260px;
  border-radius: 10px;
  height: 350px;
  padding-bottom: 0px;
`;

const MovieInfo = styled.div`
  align-items: center;
  display: flex;
  color: white;
  padding-top: 5px;
  border-radius: 5px;
  height: 50px;
  background-color: #373b69;
`;

const H3 = styled.h3`
  padding-left: 10px;
  padding-right: 10px;
  margin: 0;
`;

const Average = styled.span`
  font-size: 19px;
  font-weight: 700;
  padding-right: 70px;
`;

const H2 = styled.h2`
  color: #deb992;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #deb992;
`;

export default MovieResults;

import React, { useEffect, useState, useContext } from "react";

//children
import Header from "./Header";
import FooterResults from "./FooterResults";

import { useParams } from "react-router-dom";
import { MovieContext } from "./Context/MovieContext";

//styling
import styled from "styled-components";
import AltImage from "../assets/alt-image2.jpg";

//api keys
require("dotenv").config({ path: "../../.env" });
const { REACT_APP_API_KEY } = process.env;
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const DetailsPage = () => {
  const [details, setDetails] = useState([]);
  const { searchType } = useContext(MovieContext);
  const { id } = useParams();
  const MOVIE_API = `https://api.themoviedb.org/3/${searchType}/${id}?api_key=${REACT_APP_API_KEY}&language=en-US`;
  useEffect(() => {
    fetch(MOVIE_API)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });
  }, [searchType]);
  // returns a movie details page
  if (searchType === "movie")
    return (
      <>
        <Header />
        <Wrapper>
          <Image
            src={details.poster_path ? IMG_API + details.poster_path : AltImage}
            alt={details.title}
          />
          <DetailsContainer>
            <p>
              <Span>Title:</Span> {details.title}
            </p>
            <p>
              <Span>Overview:</Span>
              {details.overview}
            </p>
            <p>
              <Span>Release Date: </Span>
              {details.release_date}
            </p>
            <p>
              <Span>Status:</Span>
              {details.status}
            </p>
            <p>
              <Span>Runtime:</Span>
              {details.runtime} Minutes
            </p>
            <p>
              <Span>Budget: </Span>$ {details.budget}
            </p>
            <p>
              <Span>Revenue:</Span>$ {details.revenue}
            </p>
            <Para>
              <Span>Average Rating:</Span>
              {details.vote_average}/10
            </Para>
            <Link href={details.homepage}>Where to view</Link>
          </DetailsContainer>
        </Wrapper>
        <FooterResults />
      </>
    );
  //returns a tv details page
  return (
    <>
      <Header />
      <Wrapper>
        <Image
          src={details.poster_path ? IMG_API + details.poster_path : AltImage}
          alt={details.title}
        />
        <DetailsContainer>
          <p>
            <Span>Title:</Span>
            {details.name}
          </p>
          <p>
            <Span>Overview:</Span>
            {details.overview}
          </p>
          <p>
            <Span>Number of seasons:</Span>
            {details.number_of_seasons}
          </p>
          <p>
            <Span>Number of episodes:</Span>
            {details.number_of_episodes}
          </p>
          <p>
            <Span>Episode runtime:</Span>
            {details.episode_run_time}
          </p>
          <p>
            <Span>First air date:</Span>
            {details.first_air_date}
          </p>
          <p>
            <Span>Last air date:</Span>
            {details.last_air_date}
          </p>
          <p>
            <Span>Status:</Span>
            {details.status}
          </p>
          <Para>
            <Span>Average rating:</Span>
            {details.vote_average}/10
          </Para>
          <Link href={details.homepage}>Where to view</Link>
        </DetailsContainer>
      </Wrapper>
      <FooterResults />
    </>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: #deb992;
  border-bottom: 1px solid #deb992;
  font-weight: 700;
  font-size: 20px;
`;

const Span = styled.span`
  padding-right: 5px;
  font-weight: 700;
  font-size: 20px;
`;

const Para = styled.p`
  padding-bottom: 50px;
`;

const Wrapper = styled.div`
  background-color: #22254b;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 400px;
  margin: 20px 20px;
  border-radius: 10px;
`;

const DetailsContainer = styled.div`
  width: 700px;
  color: #deb992;
  padding-left: 30px;
`;

export default DetailsPage;

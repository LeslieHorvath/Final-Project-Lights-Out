import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import Header from "./Header";
import FooterResults from "./FooterResults";
import { UserContext } from "./Context/UserContext";
import { MovieContext } from "./Context/MovieContext";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const Profile = () => {
  const { user } = useContext(UserContext);
  const { favoriteMovies } = useContext(MovieContext);
  if (favoriteMovies) {
    // console.log(poster_path);
    return (
      <>
        <Header />
        <Wrapper>
          <H1>Favorite Movies</H1>
          <StyledCarousel focusOnSelect={true} itemsToShow={5}>
            {favoriteMovies.map((movie) => (
              <Img src={IMG_API + movie.poster_path}></Img>
            ))}
          </StyledCarousel>
        </Wrapper>
        <FooterResults />
      </>
    );
  } else {
    return <p>loading</p>;
  }
};

const H1 = styled.h1`
  display: flex;
  font-size: 26px;
  color: #deb992;
  padding-left: 70px;
  padding-bottom: 10px;
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #22254b;
`;
const Img = styled.img`
  width: 270px;
  border-radius: 10px;
`;

const StyledCarousel = styled(Carousel)``;

export default Profile;

import React, { useContext } from "react";
//Styling
import styled from "styled-components";

import Carousel from "react-elastic-carousel";
//Children
import Header from "./Header";
import FooterResults from "./FooterResults";
//Context
import { MovieContext } from "./Context/MovieContext";
//Used to get the poster path src
import { useHistory } from "react-router-dom";
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Profile = () => {
  const { favoriteMovies, searchType } = useContext(MovieContext);
  const history = useHistory();

  if (favoriteMovies) {
    return (
      <>
        <Header />
        <Wrapper>
          <H1>Favorite Movies</H1>
          <StyledCarousel focusOnSelect={true} itemsToShow={5}>
            {favoriteMovies.map((movie) => (
              <Button
                onClick={() => history.push(`/${searchType}/${movie.id}`)}
              >
                <Img src={IMG_API + movie.poster_path}></Img>
              </Button>
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

const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 10px;
  height: 405px;
  width: 270px;
  cursor: pointer;
  padding: 0px;
`;

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

import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FaLightbulb } from "react-icons/fa";
import AltImage from "../assets/alt-image2.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import { MovieContext } from "./Context/MovieContext";
import { UserContext } from "./Context/UserContext";
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const MovieResults = ({ id, title, poster_path, overview, vote_average }) => {
  const { favoriteMovies, setFavoriteMovies } = useContext(MovieContext);
  //usestate for is favorited
  let [isFavorited, setIsFavorited] = useState(false);
  //useeffect that checks currentuser from context favorite movie array to see id is in it
  //if it is then change to true
  //in lightbulb if ? isfavorited then change color={}
  const { user } = useContext(UserContext);
  const handleAddMovie = () => {
    // ev.preventDefault();
    if (user) {
      console.log(user);
      fetch("/lightsout/addmovie", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          movie: {
            id,
            poster_path,
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setFavoriteMovies(data.results);
        });
    }
  };
  const handleRemoveMovie = () => {
    // ev.preventDefault();
    if (user) {
      console.log(user);
      fetch("/lightsout/removemovie", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          movie: {
            id,
            poster_path,
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setFavoriteMovies(data.results);
        });
    }
  };
  const toggleFavoriteMovie = () => {
    if (isFavorited === false) {
      handleAddMovie();
    } else handleRemoveMovie();
  };

  useEffect(() => {
    if (user) {
      favoriteMovies.map((favoriteMovie) => {
        if (favoriteMovie.id === id) {
          setIsFavorited(!isFavorited);
        }
      });
    }
  }, [id]);
  return (
    <>
      <Wrapper>
        <MovieContainer>
          <Img
            src={poster_path ? IMG_API + poster_path : AltImage}
            alt={title}
          />
          <MovieInfo>
            <H3>IMDb rating:</H3>
            <Average>{vote_average}</Average>
            <Button
              onClick={() => {
                toggleFavoriteMovie();
                setIsFavorited(!isFavorited);
              }}
            >
              <FaLightbulb
                size={22}
                style={isFavorited ? { fill: "yellow" } : { fill: "white" }}
              />
            </Button>
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

const Button = styled.button`
  background-color: #373b69;
  border: none;
  cursor: pointer;
`;

const MovieTitle = styled.h4`
  font-weight: 600;
  display: flex;
  justify-content: center;
`;
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
  padding-right: 7px;
  margin: 0;
`;

const Average = styled.span`
  font-size: 19px;
  font-weight: 700;
  padding-right: 60px;
`;

const H2 = styled.h2`
  color: #deb992;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #deb992;
`;

export default MovieResults;

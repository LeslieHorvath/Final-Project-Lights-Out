import React from "react";
import styled from "styled-components";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div>
      <Img src={IMG_API + poster_path} alt={title} />
    </div>
  );
};

const Img = styled.img`
  width: 190px;
  border-radius: 10px;
`;
export default Movie;

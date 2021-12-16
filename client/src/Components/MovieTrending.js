import React from "react";

import styled from "styled-components";

import { useHistory } from "react-router-dom";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const MovieTrending = ({ title, poster_path, id }) => {
  const history = useHistory();

  return (
    <div>
      <Img
        src={IMG_API + poster_path}
        alt={title}
        onClick={() => history.push(`/movie/${id}`)}
      />
    </div>
  );
};

const Img = styled.img`
  width: 190px;
  border-radius: 10px;
  cursor: pointer;
`;

export default MovieTrending;

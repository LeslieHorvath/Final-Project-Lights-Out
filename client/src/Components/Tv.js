import React from "react";

import { useHistory } from "react-router-dom";

//Styling
import styled from "styled-components";

//Used to get the poster path image src
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Tv = ({ id, title, poster_path }) => {
  const history = useHistory();
  return (
    <div>
      <Img
        src={IMG_API + poster_path}
        alt={title}
        onClick={() => history.push(`/tv/${id}`)}
      />
    </div>
  );
};

const Img = styled.img`
  width: 190px;
  border-radius: 10px;
  cursor: pointer;
`;
export default Tv;

import React, { useContext } from "react";
//Styling
import styled from "styled-components";
//Icons
import { FiUserCheck } from "react-icons/fi";

import { UserContext } from "../Context/UserContext";

//Login button that uses auth0 to log the user in
const LoginButton = () => {
  const { user, loginWithRedirect } = useContext(UserContext);
  return (
    <Button onClick={loginWithRedirect}>
      <FiUserCheck size={30} color={"#8a5082"} />
    </Button>
  );
};

const Button = styled.button`
  border: none;
  cursor: pointer;
  color: #8a5082;
  background-color: rgba(5, 22, 34, 0.05);
`;

export default LoginButton;

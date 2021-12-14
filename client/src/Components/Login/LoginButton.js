import React, { useContext } from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { FiUserCheck } from "react-icons/fi";
import { UserContext } from "../Context/UserContext";

const LoginButton = () => {
  const {user, loginWithRedirect } = useContext(UserContext);
console.log(user)
  return (
    <Button onClick={loginWithRedirect}>
      <FiUserCheck size={30} color={"#8a5082"}/>
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

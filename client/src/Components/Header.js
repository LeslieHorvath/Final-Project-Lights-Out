import React from "react";
import styled from "styled-components";
import { FaLightbulb } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import LoginButton from "./Login/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Wrapper>
      <Home to={"/"}>Home</Home>
      {isAuthenticated && <Profile to={"/profile"}>Profile</Profile>}
      <IconContainer>
        <Span>L</Span>ights
        <Icon>
          <FaLightbulb color={"#ffbb73"} size={50} />
        </Icon>
        ut
      </IconContainer>
      <SearchBar to={"/results"} />
      <Login>
        <LoginButton />
      </Login>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(5, 22, 34, 0.95);
  height: 90px;
  color: #deb992;
`;

const Icon = styled.div`
  padding-left: 15px;
  padding-top: 25px;
`;

const IconContainer = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 800;
  margin-left: 50px;
  padding-left: 400px;
`;

const Span = styled.span`
  font-size: 60px;
`;

const Home = styled(NavLink)`
  text-decoration: none;
  color: #8a5082;
  display: flex;
  margin-left: 30px;
  font-size: 24px;
`;

const Login = styled.div`
  margin-right: 30px;
  margin-left: 20px;
`;

const Profile = styled(NavLink)`
  text-decoration: none;
  color: #8a5082;
  display: flex;
  margin-left: 30px;
  font-size: 24px;
`;

export default Header;

import React from "react";
import styled from "styled-components";
import { FaLightbulb } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FiUserCheck } from "react-icons/fi";
const Header = () => {
  return (
    <Wrapper>
      <Home to={"/"}>Home</Home>
      <IconContainer>
        <Span>L</Span>ights
        <Icon>
          <FaLightbulb color={"#ffbb73"} size={50} />
        </Icon>
        ut
      </IconContainer>
      <SearchInput type={"text"} placeholder="search" />
      <Login>
        <FiUserCheck color={"#8A5082"} size={30} marginRight={100} />
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
  color: #8A5082;
  display: flex;
  margin-left: 30px;
  font-size: 24px;
`;

const SearchInput = styled.input`
font-size: 20px;
color: #8A5082;
background-color: #051622;
outline: none;
border: 2px solid #8A5082;
border-radius: 10px;
height: 30px;
width: 250px;
margin-left: 300px;
&::placeholder{
  color: #8A5082;
}
`;

const Login = styled.div`
  margin-right: 30px;
`;
export default Header;

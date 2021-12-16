import React from "react";

import styled from "styled-components";

import LogoutButton from "./Login/LogoutButton";

const FooterResults = () => {
  return (
    <Wrapper>
      <LogoutButton />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(5, 22, 34, 0.95);
  height: 90px;
  z-index: 3;
  width: 100%;
  bottom: -31%;
`;

export default FooterResults;

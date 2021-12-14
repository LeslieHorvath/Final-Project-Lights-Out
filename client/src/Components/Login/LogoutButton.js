import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from "@auth0/auth0-react";
const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
    return ( 
        isAuthenticated && (
            <Button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </Button>
          )
     );
}
 
const Button = styled.button`
border-radius: 5px;
cursor: pointer;
margin-right: 40px;
background-color: rgba(5, 22, 34, 0.95);
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
color: #8A5082;
border: 2px solid  #8A5082;
`
export default LogoutButton;
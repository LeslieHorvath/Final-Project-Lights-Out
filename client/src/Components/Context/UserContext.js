import React, { createContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const UserContext = createContext(null);
export const UserProvider = ({ children }) => {
  const { user, loginWithRedirect } = useAuth0();
  const [currentUser, setCurrentUser] = useState([]);
  //add another useeffect to update user whenever our update setupdate use state changes
  //check twitter project
  useEffect(() => {
    if (user) {
      setCurrentUser(user);
      fetch("/lightsout/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          name: user.name,
        }),
      });
    }
  }, [user]);
  return (
    <UserContext.Provider value={{user, currentUser, setCurrentUser, loginWithRedirect }}>
      {children}
    </UserContext.Provider>
  );
};

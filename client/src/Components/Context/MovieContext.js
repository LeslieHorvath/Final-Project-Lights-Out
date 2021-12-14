import React, { createContext, useState, useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
export const MovieContext = createContext(null);
export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const { user } = useContext(UserContext);
  const [favoriteMovies, setFavoriteMovies] = useState(null);
  useEffect(() => {
    if (user) {
      fetch("/lightsout/favoritemovies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results);
          setFavoriteMovies(data.results);
        });
    }
  }, [user]);
  return (
    <MovieContext.Provider value={{ movies, setMovies, favoriteMovies, setFavoriteMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

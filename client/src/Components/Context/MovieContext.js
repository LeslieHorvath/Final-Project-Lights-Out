import React, { createContext, useState, useContext, useEffect } from "react";

//Context to track favorite movies for that user
import { UserContext } from "./UserContext";

export const MovieContext = createContext(null);

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  //used for searchbar & details page to switch between movies/tv
  const [searchType, setSearchType] = useState("movie");

  //Gets logged in user from auth0
  const { user } = useContext(UserContext);

  //Usestate to set the favorite movies for that user
  const [favoriteMovies, setFavoriteMovies] = useState(null);
  const [update, setUpdate] = useState(false);

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
          setFavoriteMovies(data.results);
        });
    }
  }, [user, update]);

  return (
    <MovieContext.Provider
      value={{
        searchType,
        setSearchType,
        update,
        setUpdate,
        movies,
        setMovies,
        favoriteMovies,
        setFavoriteMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

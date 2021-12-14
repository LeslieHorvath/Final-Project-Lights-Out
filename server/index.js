const express = require("express");
const { addUser, getAllMovies, addMovie, removeMovie } = require("./Handlers");
const morgan = require("morgan");
const PORT = 4000;

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.post("/lightsout/users", addUser);
app.post("/lightsout/favoritemovies", getAllMovies);
app.put("/lightsout/addmovie", addMovie);
app.delete("/lightsout/removemovie", removeMovie);
app.listen(PORT, () => console.info(`Listening on port ${PORT}`));

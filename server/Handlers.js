const { MongoClient } = require("mongodb");

require("dotenv").config();

const { REACT_APP_MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
//Used to at a user to mongoDB
const addUser = async (req, res) => {
  const client = new MongoClient(REACT_APP_MONGO_URI, options);
  await client.connect();
  const db = client.db("Lights_Out");
  const foundUser = await db
    .collection("users")
    .findOne({ email: req.body.email });
  if (!foundUser) {
    await db.collection("users").insertOne({ ...req.body, favoriteMovie: [] });
  }
  res.status(200).json({ status: 200 });
  client.close();
};
//Used to get all the favorited movies in users DB
const getAllMovies = async (req, res) => {
  const client = new MongoClient(REACT_APP_MONGO_URI, options);
  await client.connect();
  const db = client.db("Lights_Out");
  const foundUser = await db
    .collection("users")
    .findOne({ email: req.body.email });
  try {
    if (foundUser) {
      res.status(200).json({ status: 200, results: foundUser.favoriteMovie });
    }
  } catch {
    res.status(400).json({ status: 400 });
  }
  client.close();
};
//Adds a movie to users DB
const addMovie = async (req, res) => {
  const client = new MongoClient(REACT_APP_MONGO_URI, options);
  await client.connect();
  const db = client.db("Lights_Out");
  const foundUser = await db
    .collection("users")
    .findOne({ email: req.body.email });
  try {
    if (foundUser) {
      const query = { email: req.body.email };
      const newValues = { $addToSet: { favoriteMovie: req.body.movie } };
      await db.collection("users").updateOne(query, newValues);
      res.status(200).json({ status: 200, results: foundUser.favoriteMovie });
    } else {
      res.status(404).json({ status: 404 });
    }
  } catch {
    res.status(400).json({ status: 400 });
  }
  client.close();
};
//removes a movie from users DB
const removeMovie = async (req, res) => {
  const client = new MongoClient(REACT_APP_MONGO_URI, options);
  await client.connect();
  const db = client.db("Lights_Out");
  const foundUser = await db
    .collection("users")
    .findOne({ email: req.body.email });
  try {
    if (foundUser) {
      const query = { email: req.body.email };
      const newValues = { $pull: { favoriteMovie: req.body.movie } };
      await db.collection("users").updateOne(query, newValues);
      res.status(200).json({ status: 200, results: foundUser.favoriteMovie });
    }
  } catch {
    res.status(400).json({ status: 400 });
  }
  client.close();
};

module.exports = { addUser, getAllMovies, addMovie, removeMovie };

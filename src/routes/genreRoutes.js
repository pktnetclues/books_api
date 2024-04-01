const express = require("express");
const addGenre = require("../controllers/genre/addGenre");
const getGenres = require("../controllers/genre/getGenres");
const deleteGenre = require("../controllers/genre/deleteGenre");
const updateGenre = require("../controllers/genre/updateGenre");

const genreRoutes = express.Router();

// Add Genre
genreRoutes.post("/addGenre", addGenre);

// Get all Genres
genreRoutes.get("/getGenres", getGenres);

// Delete Genre
genreRoutes.delete("/deleteGenre", deleteGenre);

// Update Genre
genreRoutes.put("/updateGenre", updateGenre);

module.exports = genreRoutes;
